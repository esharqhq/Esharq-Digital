import { NextResponse } from "next/server";

const escapeMd = (value: string) =>
  value.replace(/([_*`\[\]])/g, "\\$1");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name = "",
      email = "",
      message = "",
      business = "",
      stuck = "",
      source = "contact",
    } = body ?? {};

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const threadId = process.env.TELEGRAM_THREAD_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Telegram credentials missing" },
        { status: 500 },
      );
    }

    const isAudit = source === "blog-audit";
    const header = isAudit
      ? "🧾 *Yangi Audit So'rovi (Blog)*"
      : "🆕 *Yangi Xabar (Esharq.ai)*";

    const lines = [header, ""];
    if (name) lines.push(`👤 *Ism*: ${escapeMd(String(name))}`);
    if (business) lines.push(`🏢 *Biznes*: ${escapeMd(String(business))}`);
    if (email) lines.push(`📧 *Kontakt*: ${escapeMd(String(email))}`);
    if (stuck) lines.push(`🎯 *Muammo*: ${escapeMd(String(stuck))}`);
    if (message && message !== "—") {
      lines.push("", `📝 *Izoh*:`, String(message));
    }

    const text = lines.join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          message_thread_id: threadId ? Number(threadId) : undefined,
          text,
          parse_mode: "Markdown",
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Telegram API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message", details: errorData },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("API Route Error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
