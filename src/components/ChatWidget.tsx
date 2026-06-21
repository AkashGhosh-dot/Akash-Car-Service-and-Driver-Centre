"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919339865491";
const SUBMIT_URL =
  "https://script.google.com/macros/s/AKfycbyLa26NV8B3gFmll4xL0RAG1aPAQQIo8sT__zNcSHabELJHWoKkv7PR9eH0Dylv08mc/exec";

const SERVICE_OPTIONS = [
  "Car Rental",
  "Driver Service",
  "Traveller",
  "Wedding Car",
  "Bus",
  "Pick-Up Van",
  "Truck",
];

type Step = "name" | "phone" | "service" | "serviceDate" | "submitting" | "done" | "error";

interface ChatMessage {
  from: "bot" | "user";
  text: string;
}

interface LeadData {
  name: string;
  phone: string;
  service: string;
  serviceDate: string;
}

const BOT_PROMPTS: Record<"name" | "phone" | "service" | "serviceDate", string> = {
  name: "What's your name?",
  phone: "Thanks! What's your phone number?",
  service: "Which service are you looking for?",
  serviceDate: "Got it! What is your service date?",
};

const INITIAL_MESSAGES: ChatMessage[] = [
  { from: "bot", text: "Welcome 👋 How can we help you?" },
  { from: "bot", text: BOT_PROMPTS.name },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [step, setStep] = useState<Step>("name");
  const [lead, setLead] = useState<Partial<LeadData>>({});
  const [input, setInput] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens or step changes
  useEffect(() => {
    if (open && !["submitting", "done", "error"].includes(step)) {
      const t = setTimeout(() => inputRef.current?.focus(), 120);
      return () => clearTimeout(t);
    }
  }, [open, step]);

  function pushMessage(msg: ChatMessage) {
    setMessages((prev) => [...prev, msg]);
  }

  function botReply(text: string, delay = 480) {
    setTimeout(() => pushMessage({ from: "bot", text }), delay);
  }

  function handleServiceSelect(service: string) {
    pushMessage({ from: "user", text: service });
    setLead((prev) => ({ ...prev, service }));
    setStep("serviceDate");
    botReply(BOT_PROMPTS.serviceDate);
  }

  async function handleSend(e: FormEvent) {
    e.preventDefault();
    const value = input.trim();
    if (!value || submitting) return;

    setInput("");
    pushMessage({ from: "user", text: value });

    switch (step) {
      case "name": {
        setLead((prev) => ({ ...prev, name: value }));
        setStep("phone");
        botReply(BOT_PROMPTS.phone);
        break;
      }

      case "phone": {
        const digits = value.replace(/\D/g, "");
        if (digits.length < 7) {
          botReply("Please enter a valid phone number and try again.");
          // stay on phone step — setInput already cleared, re-focus via useEffect
          return;
        }
        setLead((prev) => ({ ...prev, phone: value }));
        setStep("service");
        botReply(BOT_PROMPTS.service);
        break;
      }

      case "service": {
        setLead((prev) => ({ ...prev, service: value }));
        setStep("serviceDate");
        botReply(BOT_PROMPTS.serviceDate);
        break;
      }

      case "serviceDate": {
        const finalLead: LeadData = {
          name: lead.name ?? "",
          phone: lead.phone ?? "",
          service: lead.service ?? "",
          serviceDate: value,
        };
        setLead(finalLead);
        setStep("submitting");
        setSubmitting(true);
        botReply("Sending your details… ⏳", 300);

        try {
          await fetch(SUBMIT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalLead),
          });
          setStep("done");
          botReply(
            "Thank you for the information. Our team will connect with you soon. ✅",
            900
          );
        } catch {
          setStep("error");
          botReply(
            "Sorry, something went wrong. Please reach us directly on WhatsApp.",
            700
          );
        } finally {
          setSubmitting(false);
        }
        break;
      }
    }
  }

  const inputActive = !["submitting", "done", "error"].includes(step);

  const inputPlaceholder =
    step === "name"
      ? "Your name…"
      : step === "phone"
        ? "Your phone number…"
        : step === "service"
          ? "Or type a service…"
          : "e.g. 25 June 2025…";

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:right-6">
      {/* ── Chat window ── */}
      {open && (
        <div
          className="flex w-[min(340px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071225] shadow-2xl shadow-black/70"
          style={{ maxHeight: "min(540px,calc(100dvh - 6rem))" }}
          role="dialog"
          aria-label="Chat with Akash Car Service"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center gap-3 bg-[#e53935] px-4 py-3">
            <div
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white"
            >
              A
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-tight text-white">Akash Car Service</p>
              <p className="text-[10px] text-white/70">Usually replies instantly</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded p-1 text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            style={{ minHeight: 0 }}
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
              >
                {msg.from === "bot" && (
                  <div
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e53935] text-[11px] font-bold text-white"
                  >
                    A
                  </div>
                )}
                <p
                  className={`max-w-[78%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    msg.from === "bot"
                      ? "rounded-tl-none bg-white/10 text-slate-200"
                      : "rounded-tr-none bg-[#e53935] text-white"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}

            {/* Service quick-select chips */}
            {step === "service" && (
              <div className="flex flex-wrap gap-2 pl-9 pt-1">
                {SERVICE_OPTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleServiceSelect(s)}
                    className="rounded-full border border-[#e53935]/50 bg-[#e53935]/10 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-[#e53935]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e53935]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Submitting spinner */}
            {step === "submitting" && (
              <div className="flex items-center gap-2 pl-9">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </span>
              </div>
            )}


            {/* Error: WhatsApp fallback */}
            {step === "error" && (
              <div className="flex justify-center pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#128C7E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                >
                  <WhatsAppSVG />
                  Message us on WhatsApp
                </a>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          {inputActive && (
            <form
              onSubmit={handleSend}
              className="flex shrink-0 items-center gap-2 border-t border-white/10 px-3 py-3"
            >
              <input
                ref={inputRef}
                type={step === "phone" ? "tel" : "text"}
                inputMode={step === "phone" ? "tel" : "text"}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={inputPlaceholder}
                autoComplete="off"
                aria-label={inputPlaceholder}
                className="min-w-0 flex-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white placeholder-white/40 outline-none transition focus:ring-2 focus:ring-[#e53935]/70"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e53935] text-white transition-colors hover:bg-[#c62828] disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e53935]"
              >
                <Send size={15} aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      )}

      {/* ── Floating toggle button ── */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full bg-[#e53935] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 transition-all duration-200 hover:bg-[#c62828] hover:shadow-xl hover:shadow-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e53935] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071225] active:scale-95"
      >
        <MessageCircle size={18} aria-hidden="true" />
        Chat
      </button>
    </div>
  );
}

function WhatsAppSVG() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-white"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.118 1.523 5.847L0 24l6.335-1.499A11.956 11.956 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.021-1.378l-.36-.214-3.754.888.917-3.65-.234-.374A9.784 9.784 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}
