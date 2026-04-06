"use client";

import { useEffect, useRef } from "react";

export const NeuralPulseBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const gridSize = 60;
      const { x: mx, y: my } = mouseRef.current;

      ctx.strokeStyle = "rgba(39, 223, 233, 0.08)";
      ctx.lineWidth = 1;

      // Draw horizontal lines with wave
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 10) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseEffect = Math.max(0, (200 - dist) / 200) * 15;
          
          const wave = Math.sin(x * 0.005 + time) * 15;
          const finalY = y + wave - mouseEffect;
          
          if (x === 0) ctx.moveTo(x, finalY);
          else ctx.lineTo(x, finalY);
        }
        ctx.stroke();
      }

      // Draw vertical lines with wave
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 10) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseEffect = Math.max(0, (200 - dist) / 200) * 15;
          
          const wave = Math.cos(y * 0.005 + time) * 15;
          const finalX = x + wave - mouseEffect;
          
          if (y === 0) ctx.moveTo(finalX, y);
          else ctx.lineTo(finalX, y);
        }
        ctx.stroke();
      }

      // Pulse at intersections
      ctx.fillStyle = "rgba(39, 223, 233, 0.2)";
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const pulse = Math.sin(x + y + time * 2) * 0.5 + 0.5;
          if (pulse > 0.8) {
            ctx.beginPath();
            ctx.arc(x, y, 2 * pulse, 0, Math.PI * 2);
            ctx.fill();
            
            // Outer glow
            ctx.shadowBlur = 10 * pulse;
            ctx.shadowColor = "#27DFE9";
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
