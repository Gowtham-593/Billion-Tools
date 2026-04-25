import { useState } from "react";

// ── Icon helpers ──────────────────────────────────────────────
const CheckIcon = ({ color = "#512DA8", size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

const CloseIcon = ({ color = "#fff", size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="#fff">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

const CrownIcon = () => (
  <svg viewBox="0 0 24 24" width={32} height={32} fill="#FFD54F">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" width={22} height={22} fill="#512DA8">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

const CircleCheckIcon = () => (
  <svg viewBox="0 0 24 24" width={22} height={22} fill="#512DA8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const SaveIcon = () => (
  <svg viewBox="0 0 24 24" width={11} height={11} fill="#FFE082">
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </svg>
);

// ── Feature row data ──────────────────────────────────────────
const FEATURES = [
  {
    label: "Unlimited premium courses",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="#512DA8">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
      </svg>
    ),
  },
  {
    label: "New content added weekly",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="#512DA8">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
  },
  {
    label: "Learn anytime, at your pace",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="#512DA8">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
  },
  {
    label: "All business tools & templates",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="#512DA8">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "Unlimited expert Q&A queries",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="#512DA8">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
      </svg>
    ),
  },
];

// ── Main component ────────────────────────────────────────────
export default function BilliontSubscription() {
  const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly">("annual");
  const [showSheet, setShowSheet] = useState(false);
  const [showPromo, setShowPromo] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoState, setPromoState] = useState<"idle" | "success" | "error">("idle");
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPct: number } | null>(null);
  const [subscribed, setSubscribed] = useState(false);

  // ── Price logic ──────────────────────────────────────────────
  const discountMult = appliedPromo ? (100 - appliedPromo.discountPct) / 100 : 1;
  const annualPrice = Math.round(10000 * discountMult);
  const monthlyPrice = Math.round(1000 * discountMult);
  const annualSavings = 10000 - annualPrice;
  const monthlySavings = 1000 - monthlyPrice;

  const isAnnual = selectedPlan === "annual";
  const fmt = (n: number) => n.toLocaleString("en-IN");
  const planLabel = isAnnual ? `Annual (₹${fmt(annualPrice)}/year)` : `Monthly (₹${fmt(monthlyPrice)}/month)`;
  const ctaFine = isAnnual
    ? `₹${fmt(annualPrice)}/year · Billed annually · Cancel anytime`
    : `₹${fmt(monthlyPrice)}/month · Billed monthly · Cancel anytime`;
  const sheetPrice = isAnnual ? `₹${fmt(annualPrice)} per year` : `₹${fmt(monthlyPrice)} per month`;
  const sheetBilling = isAnnual
    ? "Starts today · Renews on 9 Apr 2027"
    : "Starts today · Renews on 9 May 2026";

  // ── Valid codes ──────────────────────────────────────────────
  const PROMO_CODES: Record<string, number> = { SAVE20: 20, FIRST10: 10, WELCOME15: 15 };

  function applyPromo() {
    const code = promoCode.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      setAppliedPromo({ code, discountPct: PROMO_CODES[code] });
      setPromoState("success");
    } else {
      setPromoState("error");
    }
  }

  function removePromo() {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoState("idle");
  }

  function closePromoSheet() {
    setShowPromo(false);
    if (promoState === "error") setPromoState("idle");
  }

  // ── render ──────────────────────────────────────────────────
  return (
    <div
      style={{ background: "#e8e8e8", minHeight: "100vh" }}
      className="flex justify-center items-start py-8 font-sans"
    >
      {/* Phone shell */}
      <div
        style={{
          width: 480,
          height: 1013,
          borderRadius: 40,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
          border: "1.5px solid #282828",
          background: "#1a0b42",
        }}
      >
        {/* ── Screen ── */}
        <div className="absolute inset-0 flex flex-col">

          {/* ══ HERO ══ */}
          <div
            style={{
              flexShrink: 0,
              background: "linear-gradient(165deg,#1a0b42 0%,#2e1575 60%,#3d1e8a 100%)",
              borderRadius: "0 0 32px 32px",
              padding: "0 30px 40px",
            }}
            className="flex flex-col items-center relative"
          >
            {/* Status bar */}
            <div className="flex items-center justify-between w-full pt-[10px]">
              <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 600, fontSize: 16, color: "#fff" }}>
                9:41
              </span>
              <div className="flex items-center gap-[5px]">
                <svg viewBox="0 0 24 24" width={15} height={15} fill="#fff">
                  <rect x="1" y="15" width="3" height="6" rx="1" />
                  <rect x="6" y="11" width="3" height="10" rx="1" />
                  <rect x="11" y="7" width="3" height="14" rx="1" />
                  <rect x="16" y="3" width="3" height="18" rx="1" opacity="0.4" />
                </svg>
                <svg viewBox="0 0 24 24" width={15} height={15} fill="#fff">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </svg>
                <svg viewBox="0 0 24 24" width={15} height={15} fill="#fff">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                </svg>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => {}}
              style={{
                position: "absolute",
                top: 10,
                right: 0,
                width: 32,
                height: 32,
                background: "rgba(255,255,255,0.15)",
                border: "none",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <CloseIcon />
            </button>

            {/* Crown circle */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 24,
                marginBottom: 18,
              }}
            >
              <CrownIcon />
            </div>

            <p
              style={{ fontFamily: "'Lato',sans-serif", fontWeight: 900, fontSize: 29, color: "#fff", textAlign: "center", lineHeight: 1.15, marginBottom: 10 }}
            >
              Unlock Premium
            </p>
            <p
              style={{ fontFamily: "'Inter',sans-serif", fontSize: 16, color: "rgba(255,255,255,0.65)", textAlign: "center", lineHeight: 1.4 }}
            >
              Unlimited courses. Zero limits.
            </p>
          </div>
          {/* /hero */}

          {/* ══ SCROLLABLE WHITE AREA ══ */}
          <div
            style={{ flex: 1, background: "#fff", overflowY: "auto", overflowX: "hidden", paddingBottom: 110 }}
            className="scrollbar-hide"
          >

            {/* Feature checklist */}
            <div style={{ paddingTop: 8 }}>
              {FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center"
                  style={{
                    gap: 16,
                    padding: "15px 30px",
                    borderBottom: i < FEATURES.length - 1 ? "0.5px solid #F0F0F0" : "none",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "#F0EEFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {f.icon}
                  </div>
                  <span
                    style={{ flex: 1, fontFamily: "'Inter',sans-serif", fontSize: 16, color: "#282828" }}
                  >
                    {f.label}
                  </span>
                  <div className="flex items-center justify-center" style={{ width: 22, height: 22, flexShrink: 0 }}>
                    <CheckIcon />
                  </div>
                </div>
              ))}
            </div>

            {/* Section divider */}
            <div style={{ height: 8, background: "#f7f6ff" }} />

            {/* ── Plan cards ── */}
            <div style={{ padding: "20px 20px 0" }}>
              <p
                style={{
                  fontFamily: "'Lato',sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#9E9E9E",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Choose your plan
              </p>

              <div className="flex flex-col gap-[10px]">

                {/* Annual card */}
                <div
                  onClick={() => setSelectedPlan("annual")}
                  style={{
                    borderRadius: 18,
                    padding: "18px 18px 16px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(140deg,#180840 0%,#3b1a8c 50%,#6b3ecf 100%)",
                    boxShadow: isAnnual ? "0 8px 28px rgba(81,45,168,0.42)" : "none",
                    opacity: isAnnual ? 1 : 0.38,
                    transition: "opacity 0.2s, box-shadow 0.2s",
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                    <div className="flex items-center gap-[9px]">
                      <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 0.1, color: "rgba(255,255,255,0.85)" }}>
                        Annual
                      </span>
                      <span
                        style={{
                          background: "linear-gradient(135deg,#FFE57F 0%,#FFB300 100%)",
                          color: "#5D3A00",
                          fontFamily: "'Lato',sans-serif",
                          fontWeight: 800,
                          fontSize: 9,
                          padding: "3px 9px",
                          borderRadius: 20,
                          letterSpacing: "0.7px",
                          textTransform: "uppercase",
                          boxShadow: "0 2px 6px rgba(255,179,0,0.35)",
                        }}
                      >
                        Best Value
                      </span>
                    </div>
                    {/* Ring */}
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.5)",
                        background: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckIcon color="#fff" size={12} />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-[3px]" style={{ flexWrap: "wrap" }}>
                    {appliedPromo && (
                      <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 19, color: "rgba(255,255,255,0.38)", textDecoration: "line-through", marginRight: 6, lineHeight: 1 }}>₹10,000</span>
                    )}
                    <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 900, fontSize: 32, lineHeight: 1, color: appliedPromo ? "#FFE57F" : "#fff" }}>₹{fmt(annualPrice)}</span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>/year</span>
                  </div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 7 }}>
                    {appliedPromo ? `₹${fmt(annualSavings)} saved (${appliedPromo.discountPct}% off) · Billed annually` : "₹833/month · Billed annually · + Tax"}
                  </p>

                  {/* Savings pill */}
                  <div
                    className="inline-flex items-center gap-[5px]"
                    style={{
                      background: "rgba(255,255,255,0.13)",
                      border: "1px solid rgba(255,255,255,0.22)",
                      color: "#FFE082",
                      fontFamily: "'Lato',sans-serif",
                      fontWeight: 700,
                      fontSize: 11,
                      padding: "5px 12px",
                      borderRadius: 20,
                      marginTop: 12,
                    }}
                  >
                    <SaveIcon />
                    Save ₹2,000 — 2 months free
                  </div>
                </div>

                {/* Monthly card */}
                <div
                  onClick={() => setSelectedPlan("monthly")}
                  style={{
                    borderRadius: 18,
                    padding: "18px 18px 16px",
                    cursor: "pointer",
                    background: "#fff",
                    border: selectedPlan === "monthly" ? "1.5px solid #7B61D4" : "1.5px solid #EAE6F8",
                    boxShadow: selectedPlan === "monthly" ? "0 4px 18px rgba(81,45,168,0.15)" : "0 2px 8px rgba(0,0,0,0.05)",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                    <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 15, letterSpacing: 0.1, color: "#3D3060" }}>
                      Monthly
                    </span>
                    <div
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        border: selectedPlan === "monthly" ? "2px solid #512DA8" : "2px solid #C5B8EF",
                        background: selectedPlan === "monthly" ? "#512DA8" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "background 0.15s, border-color 0.15s",
                      }}
                    >
                      {selectedPlan === "monthly" && <CheckIcon color="#fff" size={12} />}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-[3px]" style={{ flexWrap: "wrap" }}>
                    {appliedPromo && (
                      <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 19, color: "#C5B8EF", textDecoration: "line-through", marginRight: 6, lineHeight: 1 }}>₹1,000</span>
                    )}
                    <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 900, fontSize: 32, lineHeight: 1, color: "#1C1440" }}>₹{fmt(monthlyPrice)}</span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, fontWeight: 500, color: "#9E9E9E" }}>/month</span>
                  </div>
                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#9E9E9E", marginTop: 7 }}>
                    {appliedPromo ? `₹${fmt(monthlySavings)} saved (${appliedPromo.discountPct}% off) · Billed monthly` : "Billed monthly · Cancel anytime"}
                  </p>
                </div>

              </div>
            </div>

            {/* Promo code section */}
            <div style={{ padding: "14px 20px 0" }}>
              {appliedPromo ? (
                <div
                  className="flex items-center justify-between"
                  style={{ background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 12, padding: "10px 14px" }}
                >
                  <div className="flex items-center gap-[8px]">
                    <svg viewBox="0 0 24 24" width={17} height={17} fill="#16A34A">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 13, color: "#15803D" }}>
                      {appliedPromo.code}
                    </span>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#16A34A" }}>
                      · {appliedPromo.discountPct}% discount applied
                    </span>
                  </div>
                  <button
                    onClick={removePromo}
                    style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#DC2626", background: "none", border: "none", cursor: "pointer", fontWeight: 600, flexShrink: 0 }}
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <button
                    onClick={() => setShowPromo(true)}
                    style={{
                      fontFamily: "'Inter',sans-serif",
                      fontSize: 13,
                      color: "#7B61D4",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textDecoration: "underline",
                      textDecorationColor: "rgba(123,97,212,0.35)",
                      textUnderlineOffset: 3,
                    }}
                  >
                    Have a promo code?
                  </button>
                </div>
              )}
            </div>

            {/* Trust signals */}
            <div className="flex gap-[8px]" style={{ padding: "18px 20px 0" }}>
              {[
                { icon: <ShieldIcon />, label: "Secure Payment" },
                { icon: <CloseIcon color="#512DA8" size={22} />, label: "Cancel Anytime" },
                { icon: <CircleCheckIcon />, label: "Instant Access" },
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-[6px] text-center"
                  style={{ background: "#f7f6ff", borderRadius: 12, padding: "12px 8px" }}
                >
                  {t.icon}
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#512DA8", fontWeight: 600, lineHeight: 1.3 }}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
          {/* /scroll-area */}

          {/* ══ STICKY CTA ══ */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "#fff",
              padding: "12px 20px 22px",
              boxShadow: "0 -2px 16px rgba(0,0,0,0.08)",
            }}
          >
            <button
              onClick={() => setShowSheet(true)}
              className="flex items-center justify-center gap-[8px]"
              style={{
                width: "100%",
                height: 56,
                background: "linear-gradient(135deg,#512DA8 0%,#7B52D4 100%)",
                color: "#fff",
                fontFamily: "'Lato',sans-serif",
                fontWeight: 800,
                fontSize: 17,
                border: "none",
                borderRadius: 13,
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(81,45,168,0.4)",
              }}
            >
              Subscribe
              <ArrowIcon />
            </button>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 11, color: "#9e9e9e", textAlign: "center", marginTop: 7, lineHeight: 1.4 }}>
              {ctaFine}
            </p>
          </div>

          {/* ══ CONFIRMATION BOTTOM SHEET ══ */}
          {showSheet && (
            <>
              <div
                onClick={() => setShowSheet(false)}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(40,40,40,0.55)",
                  zIndex: 100,
                  backdropFilter: "blur(4px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "#fff",
                  borderRadius: "20px 20px 0 0",
                  zIndex: 101,
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  boxShadow: "0 -4px 24px rgba(81,45,168,0.12)",
                }}
              >
                {!subscribed ? (
                  <>
                    {/* Handle */}
                    <div style={{ width: 36, height: 4, background: "#D0CAEA", borderRadius: 2, margin: "10px auto 0", flexShrink: 0 }} />

                    {/* Header */}
                    <div className="flex items-center justify-between" style={{ padding: "14px 20px 10px", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 19, color: "#282828" }}>
                        BillionTools
                      </span>
                      <button
                        onClick={() => setShowSheet(false)}
                        style={{
                          width: 30,
                          height: 30,
                          background: "#E3DFFF",
                          border: "none",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
                      >
                        <CloseIcon color="#512DA8" size={14} />
                      </button>
                    </div>

                    {/* App card */}
                    <div
                      className="flex items-center gap-[14px]"
                      style={{
                        background: "#F7F6FF",
                        margin: "0 14px",
                        padding: 14,
                        borderRadius: 16,
                        flexShrink: 0,
                        border: "1px solid #E3DFFF",
                      }}
                    >
                      <div style={{ width: 60, height: 60, borderRadius: 14, overflow: "hidden", flexShrink: 0 }}>
                        <svg viewBox="0 0 60 60" width={60} height={60}>
                          <rect width="60" height="60" rx="14" fill="#512DA8" />
                          <polygon points="46,10 22,24 28,29" fill="#F16623" />
                          <polygon points="46,10 28,29 26,44" fill="#E07818" />
                          <polygon points="28,29 32,32 26,44" fill="#F16623" opacity="0.7" />
                          <text x="7" y="52" fontFamily="'Lato',sans-serif" fontWeight="900" fontSize="22" fill="#FFFFFF" letterSpacing="-1">BT</text>
                        </svg>
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 16, color: "#282828" }}>BillionTools Premium</p>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#606060", marginTop: 3 }}>
                          Poornatha
                          <span style={{ display: "inline-block", background: "#E3DFFF", color: "#512DA8", fontFamily: "'Inter',sans-serif", fontSize: 10, fontWeight: 600, padding: "1px 6px", borderRadius: 4, marginLeft: 4, verticalAlign: "middle" }}>SME</span>
                        </p>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#606060", marginTop: 2 }}>Subscription</p>
                      </div>
                    </div>

                    {/* Price section */}
                    <div style={{ padding: "14px 20px", borderTop: "0.5px solid #E5E5EA", flexShrink: 0 }}>
                      <div className="flex items-center gap-[10px]" style={{ marginBottom: 2 }}>
                        <p style={{ fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 19, color: "#282828", margin: 0 }}>{sheetPrice}</p>
                        {appliedPromo && (
                          <span
                            style={{
                              background: "#DCFCE7",
                              color: "#15803D",
                              fontFamily: "'Lato',sans-serif",
                              fontWeight: 700,
                              fontSize: 11,
                              padding: "3px 9px",
                              borderRadius: 20,
                              letterSpacing: "0.4px",
                            }}
                          >
                            {appliedPromo.discountPct}% OFF
                          </span>
                        )}
                      </div>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "#606060", marginTop: 3 }}>{sheetBilling}</p>
                    </div>

                    {/* Terms */}
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#9E9E9E", lineHeight: 1.5, padding: "12px 20px", borderTop: "0.5px solid #E5E5EA", flexShrink: 0 }}>
                      Plan renews automatically until cancelled. Cancel anytime via Settings › Account. Applicable taxes as per Government norms.
                    </p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#9E9E9E", padding: "0 20px 14px", flexShrink: 0 }}>
                      Account: arjun@example.com
                    </p>

                    {/* Subscribe button */}
                    <button
                      onClick={() => setSubscribed(true)}
                      style={{
                        display: "block",
                        width: "calc(100% - 28px)",
                        margin: "0 14px 28px",
                        height: 52,
                        background: "linear-gradient(135deg,#512DA8 0%,#7B52D4 100%)",
                        color: "#fff",
                        fontFamily: "'Lato',sans-serif",
                        fontWeight: 800,
                        fontSize: 17,
                        border: "none",
                        borderRadius: 13,
                        cursor: "pointer",
                        flexShrink: 0,
                        boxShadow: "0 4px 14px rgba(81,45,168,0.3)",
                      }}
                    >
                      Subscribe
                    </button>
                  </>
                ) : (
                  /* ── Success state ── */
                  <div className="flex flex-col items-center" style={{ padding: "24px 20px 32px" }}>
                    <div style={{ width: 72, height: 72, marginBottom: 14 }}>
                      <svg viewBox="0 0 72 72" width={72} height={72}>
                        <circle cx="36" cy="36" r="31" fill="none" stroke="#E8F5E9" strokeWidth="6" />
                        <circle cx="36" cy="36" r="31" fill="none" stroke="#4CAF50" strokeWidth="6" strokeLinecap="round" />
                        <path d="M21 36 L31 46 L51 26" fill="none" stroke="#4CAF50" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p style={{ fontFamily: "'Lato',sans-serif", fontWeight: 800, fontSize: 21, color: "#282828", textAlign: "center", marginBottom: 4 }}>
                      Subscription Activated!
                    </p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 14, color: "#606060", textAlign: "center", marginBottom: 18 }}>
                      Welcome to BillionTools Premium
                    </p>
                    <div style={{ width: "100%", background: "#F7F6FF", borderRadius: 14, border: "1px solid #E3DFFF", padding: "4px 16px", marginBottom: 18 }}>
                      {[
                        { label: "Plan", value: planLabel, highlight: false },
                        { label: "Starts on", value: "Today · 9 Apr 2026", highlight: true },
                        { label: "Next billing", value: isAnnual ? "₹10,000 + tax · 9 Apr 2027" : "₹1,000 + tax · 9 May 2026", highlight: false },
                      ].map((row, i, arr) => (
                        <div
                          key={i}
                          className="flex justify-between items-center"
                          style={{ padding: "10px 0", borderBottom: i < arr.length - 1 ? "0.5px solid #E3DFFF" : "none" }}
                        >
                          <span style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#606060" }}>{row.label}</span>
                          <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 600, fontSize: 13, color: row.highlight ? "#512DA8" : "#282828" }}>
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => { setShowSheet(false); setSubscribed(false); }}
                      style={{
                        width: "100%",
                        height: 52,
                        background: "linear-gradient(135deg,#512DA8 0%,#7B52D4 100%)",
                        color: "#fff",
                        fontFamily: "'Lato',sans-serif",
                        fontWeight: 800,
                        fontSize: 17,
                        border: "none",
                        borderRadius: 13,
                        cursor: "pointer",
                        boxShadow: "0 4px 14px rgba(81,45,168,0.3)",
                      }}
                    >
                      Start Exploring Premium
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {/* ══ PROMO CODE BOTTOM SHEET ══ */}
          {showPromo && (
            <>
              <div
                onClick={closePromoSheet}
                style={{ position: "absolute", inset: 0, background: "rgba(28,20,50,0.5)", zIndex: 200, backdropFilter: "blur(3px)" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "#fff",
                  borderRadius: "24px 24px 0 0",
                  zIndex: 201,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "0 24px 36px",
                  boxShadow: "0 -6px 32px rgba(81,45,168,0.14)",
                }}
              >
                {/* Handle */}
                <div style={{ width: 36, height: 4, background: "#DDD8F0", borderRadius: 2, margin: "10px auto 0" }} />

                {/* Close */}
                <button
                  onClick={closePromoSheet}
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 16,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#F4F3FA",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CloseIcon color="#606060" size={14} />
                </button>

                {promoState === "success" && appliedPromo ? (
                  /* ── Success state ── */
                  <>
                    {/* Green check icon */}
                    <div
                      style={{
                        width: 62,
                        height: 62,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#DCFCE7 0%,#BBF7D0 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "22px 0 14px",
                        border: "1.5px solid #86EFAC",
                      }}
                    >
                      <svg viewBox="0 0 24 24" width={30} height={30} fill="#16A34A">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>

                    <p style={{ fontFamily: "'Lato',sans-serif", fontWeight: 800, fontSize: 19, color: "#15803D", marginBottom: 4 }}>
                      Code Applied!
                    </p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#9E9E9E", marginBottom: 20, textAlign: "center" }}>
                      Your discount has been applied to the selected plan
                    </p>

                    {/* Applied code card */}
                    <div
                      style={{
                        width: "100%",
                        background: "#F0FDF4",
                        border: "1px solid #BBF7D0",
                        borderRadius: 16,
                        padding: "14px 16px",
                        marginBottom: 18,
                      }}
                    >
                      <div className="flex items-center justify-between" style={{ marginBottom: 10 }}>
                        <span style={{ fontFamily: "'Lato',sans-serif", fontWeight: 800, fontSize: 16, color: "#1C1440", letterSpacing: 1.5 }}>
                          {appliedPromo.code}
                        </span>
                        <span
                          style={{
                            background: "#16A34A",
                            color: "#fff",
                            fontFamily: "'Lato',sans-serif",
                            fontWeight: 800,
                            fontSize: 12,
                            padding: "4px 10px",
                            borderRadius: 20,
                            letterSpacing: "0.5px",
                          }}
                        >
                          {appliedPromo.discountPct}% OFF
                        </span>
                      </div>
                      <div style={{ borderTop: "0.5px solid #BBF7D0", paddingTop: 10 }}>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#15803D" }}>
                          {isAnnual
                            ? `You save ₹${fmt(annualSavings)} on the Annual plan`
                            : `You save ₹${fmt(monthlySavings)} on the Monthly plan`}
                        </p>
                      </div>
                    </div>

                    {/* Done button */}
                    <button
                      onClick={() => setShowPromo(false)}
                      style={{
                        width: "100%",
                        height: 50,
                        background: "linear-gradient(135deg,#512DA8 0%,#7B52D4 100%)",
                        color: "#fff",
                        fontFamily: "'Lato',sans-serif",
                        fontWeight: 700,
                        fontSize: 16,
                        border: "none",
                        borderRadius: 14,
                        cursor: "pointer",
                        boxShadow: "0 4px 14px rgba(81,45,168,0.3)",
                        marginBottom: 12,
                      }}
                    >
                      Done
                    </button>

                    {/* Remove code link */}
                    <button
                      onClick={() => { removePromo(); }}
                      style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#DC2626", background: "none", border: "none", cursor: "pointer" }}
                    >
                      Remove code
                    </button>
                  </>
                ) : (
                  /* ── Idle / Error state ── */
                  <>
                    {/* Tag icon */}
                    <div
                      style={{
                        width: 62,
                        height: 62,
                        borderRadius: 18,
                        background: "linear-gradient(135deg,#EDE7F6 0%,#D9D0F5 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "22px 0 16px",
                      }}
                    >
                      <svg viewBox="0 0 24 24" width={30} height={30} fill="#512DA8">
                        <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
                      </svg>
                    </div>

                    <p style={{ fontFamily: "'Lato',sans-serif", fontWeight: 700, fontSize: 18, color: "#1C1440", marginBottom: 5 }}>
                      Have a Promo Code?
                    </p>
                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#9E9E9E", marginBottom: 18, textAlign: "center" }}>
                      Enter your code below to apply a discount
                    </p>

                    {/* Error banner */}
                    {promoState === "error" && (
                      <div
                        className="flex items-center gap-[8px]"
                        style={{
                          width: "100%",
                          background: "#FEF2F2",
                          border: "1px solid #FECACA",
                          borderRadius: 12,
                          padding: "10px 14px",
                          marginBottom: 12,
                        }}
                      >
                        <svg viewBox="0 0 24 24" width={18} height={18} fill="#EF4444" style={{ flexShrink: 0 }}>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 13, color: "#DC2626", margin: 0 }}>
                          Invalid or expired promo code. Please try again.
                        </p>
                      </div>
                    )}

                    <input
                      type="text"
                      placeholder="ENTER CODE"
                      maxLength={20}
                      value={promoCode}
                      onChange={(e) => { setPromoCode(e.target.value); if (promoState === "error") setPromoState("idle"); }}
                      style={{
                        width: "100%",
                        height: 50,
                        border: promoState === "error" ? "1.5px solid #EF4444" : "1.5px solid #E3DFFF",
                        borderRadius: 14,
                        padding: "0 16px",
                        fontFamily: "'Lato',sans-serif",
                        fontWeight: 600,
                        fontSize: 15,
                        color: "#282828",
                        letterSpacing: 2,
                        background: promoState === "error" ? "#FFF5F5" : "#FAFAFE",
                        outline: "none",
                        textTransform: "uppercase",
                        textAlign: "center",
                        boxSizing: "border-box",
                      }}
                    />

                    <button
                      onClick={applyPromo}
                      disabled={promoCode.trim().length === 0}
                      style={{
                        width: "100%",
                        height: 50,
                        marginTop: 12,
                        background: promoCode.trim().length === 0 ? "#C5B8EF" : "linear-gradient(135deg,#512DA8 0%,#7B52D4 100%)",
                        color: "#fff",
                        fontFamily: "'Lato',sans-serif",
                        fontWeight: 700,
                        fontSize: 16,
                        border: "none",
                        borderRadius: 14,
                        cursor: promoCode.trim().length === 0 ? "default" : "pointer",
                        boxShadow: promoCode.trim().length === 0 ? "none" : "0 4px 14px rgba(81,45,168,0.3)",
                        marginBottom: 12,
                      }}
                    >
                      Apply Code
                    </button>

                    <p style={{ fontFamily: "'Inter',sans-serif", fontSize: 12, color: "#BDBDBD", textAlign: "center" }}>
                      Try: SAVE20 · FIRST10 · WELCOME15
                    </p>
                  </>
                )}
              </div>
            </>
          )}

        </div>
        {/* /screen */}
      </div>
      {/* /phone */}
    </div>
  );
}
