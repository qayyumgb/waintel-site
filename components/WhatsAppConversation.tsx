"use client";

import Image from "next/image";

/* ============================================================
   <WhatsAppConversation />
   Pixel-faithful WhatsApp chat UI (iOS Messages style).
   Used on Home, Industries, and Features pages.

   The visual perspective is: "what your customer sees on
   their phone when they message your business."
     - Customer (WhatsApp user)  -> RIGHT, mint-green bubble  (#D9FDD3)
     - Business / Ghost Employee -> LEFT,  white bubble
============================================================ */

export type WAMessageStatus = "sent" | "delivered" | "read";

export type WAMessage =
  | {
      side: "in" | "out";
      type: "text";
      text: string;
      time: string;
      status?: WAMessageStatus;
    }
  | {
      side: "in" | "out";
      type: "voice";
      durationSec: number;
      time: string;
      status?: WAMessageStatus;
    }
  | {
      side: "in" | "out";
      type: "image";
      caption?: string;
      placeholder: "jazzcash" | "easypaisa" | "menu" | "id-card" | "generic";
      time: string;
      status?: WAMessageStatus;
    };

export interface WhatsAppConversationProps {
  businessName: string;
  businessSubtitle?: string; // "online", "typing...", "last seen…"
  businessInitial?: string;  // Letter shown in avatar circle
  businessAvatarUrl?: string; // optional explicit image
  messages: WAMessage[];
  showFrame?: boolean;       // wrap in iPhone-style frame
  className?: string;
}

const TickRead = () => (
  <svg viewBox="0 0 16 11" className="inline-block h-[11px] w-[15px]" fill="none">
    <path d="M11.071.653a.457.457 0 0 0-.304-.114l-.041.004a.464.464 0 0 0-.301.156L4.737 8.075 2.292 5.62a.464.464 0 0 0-.661.653L4.39 9.052a.464.464 0 0 0 .671-.018L11.084 1.31a.464.464 0 0 0-.013-.657z" fill="#53BDEB"/>
    <path d="M15.046.653a.457.457 0 0 0-.304-.114l-.041.004a.464.464 0 0 0-.301.156L8.71 8.075l-.882-.882a.464.464 0 0 0-.661.653l1.221 1.221a.464.464 0 0 0 .671-.018L15.06 1.31a.464.464 0 0 0-.014-.657z" fill="#53BDEB"/>
  </svg>
);

const TickDelivered = () => (
  <svg viewBox="0 0 16 11" className="inline-block h-[11px] w-[15px]" fill="none">
    <path d="M11.071.653a.457.457 0 0 0-.304-.114l-.041.004a.464.464 0 0 0-.301.156L4.737 8.075 2.292 5.62a.464.464 0 0 0-.661.653L4.39 9.052a.464.464 0 0 0 .671-.018L11.084 1.31a.464.464 0 0 0-.013-.657z" fill="#8696a0"/>
    <path d="M15.046.653a.457.457 0 0 0-.304-.114l-.041.004a.464.464 0 0 0-.301.156L8.71 8.075l-.882-.882a.464.464 0 0 0-.661.653l1.221 1.221a.464.464 0 0 0 .671-.018L15.06 1.31a.464.464 0 0 0-.014-.657z" fill="#8696a0"/>
  </svg>
);

const TickSent = () => (
  <svg viewBox="0 0 12 11" className="inline-block h-[11px] w-[12px]" fill="none">
    <path d="M11.071.653a.457.457 0 0 0-.304-.114l-.041.004a.464.464 0 0 0-.301.156L4.737 8.075 2.292 5.62a.464.464 0 0 0-.661.653L4.39 9.052a.464.464 0 0 0 .671-.018L11.084 1.31a.464.464 0 0 0-.013-.657z" fill="#8696a0"/>
  </svg>
);

function StatusTicks({ status }: { status?: WAMessageStatus }) {
  if (!status) return null;
  if (status === "read") return <TickRead />;
  if (status === "delivered") return <TickDelivered />;
  return <TickSent />;
}

function VoiceBubble({ durationSec, time, status, side }: { durationSec: number; time: string; status?: WAMessageStatus; side: "in" | "out" }) {
  const minutes = Math.floor(durationSec / 60);
  const seconds = (durationSec % 60).toString().padStart(2, "0");
  return (
    <div className="flex items-center gap-2.5">
      <button className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00a884] text-white" aria-label="Play voice note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
      </button>
      {/* Waveform */}
      <svg viewBox="0 0 120 24" className="h-6 w-[120px]" aria-hidden>
        {Array.from({ length: 28 }).map((_, i) => {
          const h = [4, 8, 12, 6, 14, 10, 16, 8, 12, 6, 18, 10, 14, 8, 16, 12, 6, 14, 10, 18, 8, 12, 16, 6, 10, 14, 8, 12][i];
          return <rect key={i} x={i * 4} y={(24 - h) / 2} width="2" height={h} rx="1" fill="#8696a0" />;
        })}
      </svg>
      <div className="ml-1 flex flex-col items-end self-end whitespace-nowrap text-[11px] leading-none">
        <span className="text-[#667781]">{minutes}:{seconds}</span>
        <span className="mt-1 inline-flex items-center gap-1 text-[#667781]">
          {time}
          {side === "in" && <StatusTicks status={status} />}
        </span>
      </div>
    </div>
  );
}

function PaymentScreenshot({ kind, businessName }: { kind: "jazzcash" | "easypaisa"; businessName?: string }) {
  /* Generic payment-app screenshot. The "kind" prop is kept for backwards compat
     and tints the receipt, but no provider name is shown — payment provider is
     intentionally generic so the same component works in any market. */
  const isAlt = kind === "easypaisa";
  const accent = isAlt ? "#1D9E75" : "#0F6E56";
  const accentDark = isAlt ? "#0F6E56" : "#0A5A45";

  return (
    <div className="w-[200px] overflow-hidden rounded-[10px]">
      <div className="flex items-center justify-between px-3 py-2.5 text-white" style={{ background: accent }}>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="6" width="18" height="13" rx="2" stroke="white" strokeWidth="2" />
              <path d="M3 11h18" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-[12px] font-bold">Payment Receipt</span>
        </div>
        <span className="text-[10px] opacity-80">✓ Successful</span>
      </div>
      <div className="bg-white p-3">
        <div className="mb-2 flex items-center justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full text-white" style={{ background: accentDark }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="mb-1 text-center text-[11px] font-bold text-[#0B1319]">$24.50</div>
        <div className="mb-3 text-center text-[9px] text-[#667781]">Payment Successful</div>
        <div className="space-y-1.5 border-t border-[#EAEAF0] pt-2 text-[9px]">
          <Row k="To" v={businessName || "Bella's Bistro"} />
          <Row k="Method" v="Card · ••• 4242" />
          <Row k="Ref" v="TX-2738461" />
          <Row k="Date" v="27 Mar, 09:42 PM" />
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[#667781]">{k}</span>
      <span className="font-semibold text-[#0B1319]">{v}</span>
    </div>
  );
}

function GenericImage({ caption }: { caption?: string }) {
  return (
    <div className="w-[200px]">
      <div className="flex h-[120px] items-center justify-center rounded-[10px] bg-gradient-to-br from-[#1D9E75] to-[#0F6E56] text-white">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
      {caption && <div className="mt-1 text-[12px] text-[#0B1319]">{caption}</div>}
    </div>
  );
}

/* WhatsApp wallpaper — beige with very subtle dot pattern */
const WallpaperBg = () => (
  <div
    className="absolute inset-0"
    style={{
      backgroundColor: "#E5DDD3",
      backgroundImage:
        "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
      backgroundSize: "16px 16px",
    }}
  />
);

export function WhatsAppConversation({
  businessName,
  businessSubtitle = "online",
  businessInitial,
  businessAvatarUrl,
  messages,
  showFrame = true,
  className = "",
}: WhatsAppConversationProps) {
  const initial = businessInitial ?? businessName[0]?.toUpperCase() ?? "W";

  const inner = (
    <div className="relative flex h-full flex-col bg-[#E5DDD3]">
      {/* Top WhatsApp header bar */}
      <div className="relative z-10 flex items-center gap-3 bg-[#075E54] px-3 py-3 text-white">
        <button aria-label="Back" className="flex h-7 w-7 items-center justify-center text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 text-[14px] font-bold">
          {businessAvatarUrl ? (
            <Image src={businessAvatarUrl} alt={businessName} width={36} height={36} />
          ) : (
            initial
          )}
        </div>

        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate text-[15px] font-semibold">{businessName}</div>
          <div className="truncate text-[11px] text-white/80">{businessSubtitle}</div>
        </div>

        <button aria-label="Video call" className="flex h-7 w-7 items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16 10l5-3v10l-5-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        </button>
        <button aria-label="Voice call" className="flex h-7 w-7 items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        </button>
        <button aria-label="More" className="flex h-7 w-7 items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" />
          </svg>
        </button>
      </div>

      {/* Messages area */}
      <div className="relative flex-1 overflow-hidden">
        <WallpaperBg />
        <div className="relative z-10 flex flex-col gap-1.5 px-3 py-4">
          {messages.map((m, i) => {
            const isOut = m.side === "in"; // out on screen = customer (right)
            return (
              <div key={i} className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
                <div
                  className={`relative max-w-[78%] px-2 pb-1 pt-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] ${
                    isOut
                      ? "rounded-[7.5px] rounded-tr-[2px] bg-[#D9FDD3]"
                      : "rounded-[7.5px] rounded-tl-[2px] bg-white"
                  }`}
                >
                  {m.type === "text" && (
                    <div className="px-1.5 pb-3 pt-0.5 text-[14.2px] leading-[1.4] text-[#111B21]">
                      <span className="whitespace-pre-line">{m.text}</span>
                      <MetaInline time={m.time} status={isOut ? m.status : undefined} />
                    </div>
                  )}
                  {m.type === "voice" && (
                    <div className="px-1 pb-2 pt-1.5">
                      <VoiceBubble durationSec={m.durationSec} time={m.time} status={m.status} side={m.side} />
                    </div>
                  )}
                  {m.type === "image" && (
                    <div className="p-1">
                      {m.placeholder === "jazzcash" || m.placeholder === "easypaisa" ? (
                        <PaymentScreenshot kind={m.placeholder} businessName={businessName} />
                      ) : (
                        <GenericImage caption={m.caption} />
                      )}
                      <MetaInline time={m.time} status={isOut ? m.status : undefined} darkBg={false} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Input bar */}
      <div className="relative z-10 flex items-center gap-2 bg-[#F0F0F0] px-2 py-2">
        <div className="flex flex-1 items-center gap-2 rounded-[24px] bg-white px-3 py-2 text-[#999]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9 10h.01M15 10h.01M9 15s1.5 1.5 3 1.5 3-1.5 3-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input disabled placeholder="Type a message" className="w-full bg-transparent text-[14px] outline-none placeholder:text-[#999]" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#075E54] text-white" aria-label="Send">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
        </button>
      </div>
    </div>
  );

  if (!showFrame) return <div className={className}>{inner}</div>;

  /* iPhone-style outer frame */
  return (
    <div
      className={`mx-auto w-[340px] sm:w-[380px] ${className}`}
      style={{ filter: "drop-shadow(0 30px 60px rgba(11,19,25,0.18))" }}
    >
      <div className="overflow-hidden rounded-[44px] border-[10px] border-[#0B1319] bg-[#0B1319]">
        {/* Notch */}
        <div className="relative h-6 bg-[#0B1319]">
          <div className="absolute left-1/2 top-0 h-5 w-32 -translate-x-1/2 rounded-b-[18px] bg-[#0B1319]" />
        </div>
        <div className="h-[640px] overflow-hidden bg-white">{inner}</div>
        {/* Home indicator */}
        <div className="flex justify-center bg-[#0B1319] py-2">
          <div className="h-1 w-28 rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  );
}

function MetaInline({ time, status, darkBg = false }: { time: string; status?: WAMessageStatus; darkBg?: boolean }) {
  const cls = darkBg ? "text-white/85" : "text-[#667781]";
  return (
    <span className={`pointer-events-none float-right ml-2 mt-1.5 inline-flex translate-y-1 items-center gap-1 text-[11px] leading-none ${cls}`}>
      <span>{time}</span>
      {status && <StatusTicks status={status} />}
    </span>
  );
}
