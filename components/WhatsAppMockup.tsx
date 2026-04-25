// Pure SVG/CSS WhatsApp phone mockup — no external images, sharp on retina,
// loads instantly. Tells the product story directly.
export function WhatsAppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-full bg-brand-400/20 blur-3xl" aria-hidden />

      {/* Phone frame */}
      <div className="relative rounded-[40px] border-[10px] border-ink-900 bg-ink-900 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-ink-900" aria-hidden />

        {/* Screen */}
        <div className="relative h-[640px] overflow-hidden bg-[#0b1a13]">
          {/* WhatsApp header */}
          <div className="flex items-center gap-3 bg-[#0F6E56] px-4 pt-9 pb-3">
            <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-[15px]">
              W
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-[14px] font-semibold leading-tight">Waintel Demo</div>
              <div className="text-white/70 text-[11px]">online</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden>
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.27-.27.35-.66.24-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
            </svg>
          </div>

          {/* Chat area */}
          <div
            className="relative px-3 py-4 space-y-2 h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          >
            {/* Day badge */}
            <div className="flex justify-center">
              <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70">
                TODAY
              </span>
            </div>

            {/* Customer */}
            <Bubble side="in">
              Salam! Aap ki property listings dekhni thien — DHA Phase 5 mein 10 marla kya rate?
            </Bubble>

            {/* Bot */}
            <Bubble side="out">
              W'salam! 🏡 DHA Phase 5 Karachi mein 10 marla houses currently 5–8 crore range mein chal rahe hain. Budget kya soch rahe hain?
            </Bubble>

            <Bubble side="in">6 crore tak</Bubble>

            <Bubble side="out">
              Perfect — aapke budget mein 4 active listings hain. Kya main consultant se 10 minutes mein call karwa dun? Naam aur phone share kar dein.
            </Bubble>

            <Bubble side="in">Sumama, 0300-1234567</Bubble>

            {/* Typing indicator */}
            <div className="flex">
              <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12px] text-ink-700 shadow-sm">
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-pulse" />
                  <span className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-pulse [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-pulse [animation-delay:240ms]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  if (side === "in") {
    return (
      <div className="flex">
        <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-[12.5px] leading-snug text-ink-800 shadow-sm">
          {children}
          <div className="mt-1 text-right text-[10px] text-ink-400">11:42</div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-[#dcf8c6] px-3 py-2 text-[12.5px] leading-snug text-ink-800 shadow-sm">
        {children}
        <div className="mt-1 text-right text-[10px] text-ink-500">
          11:42{" "}
          <span className="text-brand-500" aria-label="Read">
            ✓✓
          </span>
        </div>
      </div>
    </div>
  );
}
