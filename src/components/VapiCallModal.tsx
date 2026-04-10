"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Vapi from "@vapi-ai/web";
import { X, Phone, PhoneOff, Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../../public/logo.png";

interface VapiCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

export const VapiCallModal = ({
  isOpen,
  onClose,
  lang,
}: VapiCallModalProps) => {
  const vapiRef = useRef<Vapi | null>(null);
  const [status, setStatus] = useState<"idle" | "connecting" | "connected">(
    "idle",
  );
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);

  useEffect(() => {
    if (!vapiRef.current) {
      vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);
    }
    const vapi = vapiRef.current;

    const onCallStart = () => setStatus("connected");
    const onCallEnd = () => {
      setStatus("idle");
      setIsSpeaking(false);
      setIsMuted(false);
      setVolumeLevel(0);
    };
    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);
    const onVolumeLevel = (level: number) => setVolumeLevel(level);
    const onError = (err: unknown) => {
      console.error("Vapi error:", err);
      setStatus("idle");
    };

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("volume-level", onVolumeLevel);
    vapi.on("error", onError);

    return () => {
      vapi.removeListener("call-start", onCallStart);
      vapi.removeListener("call-end", onCallEnd);
      vapi.removeListener("speech-start", onSpeechStart);
      vapi.removeListener("speech-end", onSpeechEnd);
      vapi.removeListener("volume-level", onVolumeLevel);
      vapi.removeListener("error", onError);
    };
  }, []);

  const startCall = useCallback(async () => {
    if (!vapiRef.current) return;
    setStatus("connecting");
    try {
      await vapiRef.current.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!);
    } catch (err) {
      console.error("Failed to start call:", err);
      setStatus("idle");
    }
  }, []);

  const endCall = useCallback(() => {
    if (!vapiRef.current) return;
    vapiRef.current.stop();
    setStatus("idle");
  }, []);

  const toggleMute = useCallback(() => {
    if (!vapiRef.current) return;
    const next = !isMuted;
    vapiRef.current.setMuted(next);
    setIsMuted(next);
  }, [isMuted]);

  useEffect(() => {
    if (!isOpen && status !== "idle") {
      endCall();
    }
  }, [isOpen, status, endCall]);

  // Auto-start call when popup opens
  useEffect(() => {
    if (isOpen && status === "idle") {
      startCall();
    }
  }, [isOpen, status, startCall]);

  const ringScale = 1 + volumeLevel * 0.4;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-[10000] w-[280px] bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  status === "connected"
                    ? "bg-[#27DFE9] shadow-[0_0_6px_#27DFE9]"
                    : status === "connecting"
                      ? "bg-yellow-400 animate-pulse"
                      : "bg-white/20"
                }`}
              />
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-mono">
                {status === "idle" && "Ready"}
                {status === "connecting" && "Connecting"}
                {status === "connected" && (isSpeaking ? "Speaking" : "Listening")}
              </span>
            </div>
            <button
              onClick={() => {
                endCall();
                onClose();
              }}
              className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/40 hover:text-white"
            >
              <X size={12} />
            </button>
          </div>

          {/* Logo + Visualizer */}
          <div className="flex flex-col items-center py-6">
            <div className="relative flex items-center justify-center">
              {/* Pulse rings when connected */}
              {status === "connected" && (
                <>
                  <motion.div
                    className="absolute w-24 h-24 rounded-full border border-[#27DFE9]/15"
                    animate={{
                      scale: [1, ringScale, 1],
                      opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute w-20 h-20 rounded-full border border-[#27DFE9]/10"
                    animate={{
                      scale: [1, 1 + volumeLevel * 0.3, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  />
                </>
              )}

              {/* Glow */}
              <div
                className={`absolute w-16 h-16 rounded-full bg-[#27DFE9] blur-[30px] transition-opacity duration-500 ${
                  status === "connected"
                    ? isSpeaking
                      ? "opacity-35"
                      : "opacity-15"
                    : status === "connecting"
                      ? "opacity-10 animate-pulse"
                      : "opacity-5"
                }`}
              />

              {/* Logo */}
              <div
                className={`relative z-10 transition-transform duration-300 ${
                  status === "connected" && isSpeaking
                    ? "scale-110"
                    : "scale-100"
                }`}
              >
                <Image src={Logo} alt="Esharq" width={56} height={56} priority />
              </div>
            </div>

            <p className="text-[9px] text-white/25 mt-3 font-mono tracking-wider">
              Esharq AI
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 pb-5 px-5">
            {status === "idle" ? (
              <button
                onClick={startCall}
                className="w-12 h-12 rounded-full bg-[#27DFE9] flex items-center justify-center hover:bg-[#27DFE9]/80 transition-all duration-300 shadow-[0_0_20px_rgba(39,223,233,0.3)]"
              >
                <Phone size={20} className="text-black" />
              </button>
            ) : status === "connecting" ? (
              <div className="w-12 h-12 rounded-full bg-[#27DFE9]/15 border border-[#27DFE9]/30 flex items-center justify-center animate-pulse">
                <Phone size={20} className="text-[#27DFE9]" />
              </div>
            ) : (
              <>
                <button
                  onClick={toggleMute}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isMuted
                      ? "bg-red-500/20 border border-red-500/30"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {isMuted ? (
                    <MicOff size={16} className="text-red-400" />
                  ) : (
                    <Mic size={16} className="text-white/70" />
                  )}
                </button>

                <button
                  onClick={() => {
                    endCall();
                    onClose();
                  }}
                  className="w-12 h-12 rounded-full bg-red-500/90 flex items-center justify-center hover:bg-red-500 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.25)]"
                >
                  <PhoneOff size={20} className="text-white" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
