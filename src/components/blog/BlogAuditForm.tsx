"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type AuditDict = {
  nameLabel: string;
  namePlaceholder: string;
  businessLabel: string;
  businessPlaceholder: string;
  contactLabel: string;
  contactPlaceholder: string;
  stuckLabel: string;
  stuckChoose: string;
  stuckOptions: string[];
  usingLabel: string;
  usingPlaceholder: string;
  submitDefault: string;
  submitSending: string;
  footerNote: string;
  received: string;
  receivedDesc: string;
};

type FormState = {
  name: string;
  business: string;
  contact: string;
  stuck: string;
  using: string;
};

export const BlogAuditForm = ({ dict }: { dict: AuditDict }) => {
  const [form, setForm] = useState<FormState>({
    name: "",
    business: "",
    contact: "",
    stuck: "",
    using: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((p) => ({ ...p, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending || sent) return;
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.contact,
          message: form.using || "—",
          business: form.business,
          stuck: form.stuck,
          source: "blog-audit",
        }),
      });

      if (res.ok) {
        setSent(true);
      } else {
        const error = await res.json().catch(() => ({}));
        console.error("Submission error:", error);
        alert("Something went wrong. Please try again or reach out directly.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Network error. Please check your connection.");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-white/[0.03] border border-white/10 rounded-none py-4 px-5 text-white outline-none focus:border-[#27DFE9] transition-colors font-mono text-xs placeholder:text-white/25 placeholder:normal-case";

  const labelClass =
    "text-[10px] uppercase tracking-[0.3em] text-white/60 font-mono block mb-3";

  if (sent) {
    return (
      <div className="min-h-[300px] flex flex-col items-center justify-center text-center gap-6 border border-white/10 bg-black/40 p-10">
        <div className="text-[#27DFE9] text-6xl font-black">✓</div>
        <p className="text-white font-black uppercase tracking-[0.3em] font-mono text-sm">
          {dict.received}
        </p>
        <p className="text-white/50 text-[11px] uppercase tracking-widest leading-relaxed max-w-xs mx-auto">
          {dict.receivedDesc}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black/40 border border-white/10 p-8 md:p-10 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>{dict.nameLabel}</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder={dict.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>{dict.businessLabel}</label>
          <input
            type="text"
            required
            value={form.business}
            onChange={set("business")}
            placeholder={dict.businessPlaceholder}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>{dict.contactLabel}</label>
          <input
            type="text"
            required
            value={form.contact}
            onChange={set("contact")}
            placeholder={dict.contactPlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>{dict.stuckLabel}</label>
          <select
            required
            value={form.stuck}
            onChange={set("stuck")}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled className="bg-[#151616]">
              {dict.stuckChoose}
            </option>
            {dict.stuckOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#151616]">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>{dict.usingLabel}</label>
        <textarea
          rows={4}
          value={form.using}
          onChange={set("using")}
          placeholder={dict.usingPlaceholder}
          className={inputClass}
        />
      </div>

      <Button
        type="submit"
        disabled={sending}
        variant="brand"
        size="lg"
        className="w-full h-16 tracking-[0.4em] text-xs"
      >
        {sending ? dict.submitSending : dict.submitDefault}
        <ArrowRight size={18} />
      </Button>

      <p className="text-[11px] text-white/45 text-center leading-relaxed pt-2">
        {dict.footerNote}
      </p>
    </form>
  );
};
