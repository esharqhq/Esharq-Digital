"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = ({ dict, onSuccess }: { dict: any; onSuccess?: () => void }) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending || sent) return;
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
        if (onSuccess) {
          setTimeout(onSuccess, 2000);
        }
      } else {
        const error = await response.json();
        console.error("Submission error:", error);
        alert("Something went wrong. Please try again or reach out directly.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setSending(false);
    }
  };

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [key]: e.target.value })),
  });

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-none py-5 px-6 text-white outline-none focus:border-[#27DFE9] transition-all font-mono text-xs placeholder:text-white/10 placeholder:uppercase";

  if (sent) {
    return (
      <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center gap-6">
        <div className="text-[#27DFE9] text-6xl font-black">✓</div>
        <p className="text-white font-black uppercase tracking-[0.3em] font-mono">
          {dict.received}
        </p>
        <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-relaxed max-w-xs mx-auto">
          {dict.receivedDesc}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div>
          <label className="text-[10px] uppercase tracking-[0.3em] text-[#27DFE9] font-black block mb-4 italic">
            {dict.identLabel}
          </label>
          <input
            type="text"
            required
            placeholder={dict.identPlaceholder}
            className={inputClass}
            {...field("name")}
          />
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-[0.3em] text-[#27DFE9] font-black block mb-4 italic">
            {dict.freqLabel}
          </label>
          <input
            type="email"
            required
            placeholder={dict.freqPlaceholder}
            className={inputClass}
            {...field("email")}
          />
        </div>
      </div>

      <div>
        <label className="text-[10px] uppercase tracking-[0.3em] text-[#27DFE9] font-black block mb-4 italic">
          {dict.msgLabel}
        </label>
        <textarea
          rows={5}
          required
          placeholder={dict.msgPlaceholder}
          className={inputClass}
          {...field("message")}
        />
      </div>

      <Button
        type="submit"
        disabled={sending}
        variant="brand"
        size="lg"
        className="w-full h-20 tracking-[0.5em] text-xs shadow-[0_0_20px_rgba(39,223,233,0.1)] hover:shadow-[0_0_30px_rgba(39,223,233,0.2)] transition-shadow"
      >
        {sending ? dict.btnSending : dict.btnDefault}
        <ArrowRight
          size={18}
          className="group-hover/button:translate-x-3 transition-transform duration-500"
        />
        {/* Decorative elements to match the theme */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/30" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-black/30" />
      </Button>
    </form>
  );
};
