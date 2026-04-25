import { useState } from "react";

type DemoState = "active" | "expiring" | "expired" | "cancelled";

const MEMBER_DATA = {
  active: {
    startDate: "10 Oct 2025",
    expiryDate: "10 Oct 2026",
    daysLeft: 182,
    plan: "Annual",
    price: "₹10,000",
  },
  expiring: {
    startDate: "10 Oct 2025",
    expiryDate: "10 May 2026",
    daysLeft: 29,
    plan: "Annual",
    price: "₹10,000",
  },
  expired: {
    startDate: "10 Oct 2024",
    expiryDate: "10 Oct 2025",
    daysExpired: 183,
    plan: "Annual",
    price: "₹10,000",
  },
};

// ─── Icons ────────────────────────────────────────────────────
const BackIcon = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} fill="#fff">
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
  </svg>
);
const CrownIcon = ({ size = 32, color = "#FFD54F" }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
  </svg>
);
const ClockIcon = ({ size = 32, color = "#FCD34D" }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);
const ExpiredIcon = ({ size = 32 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#FF6B6B">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);
const CheckIcon = ({ size = 20, color = "#512DA8" }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);
const WarnIcon = ({ color = "#FCD34D", size = 14 }: { color?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);
const CalendarIcon = ({ color = "#606060" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill={color}>
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
  </svg>
);
const DaysIcon = ({ color = "#606060" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill={color}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);
const PlanIcon = ({ color = "#606060" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill={color}>
    <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
  </svg>
);
const SignalIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="#000">
    <rect x="1" y="15" width="3" height="6" rx="1" />
    <rect x="6" y="11" width="3" height="10" rx="1" />
    <rect x="11" y="7" width="3" height="14" rx="1" />
    <rect x="16" y="3" width="3" height="18" rx="1" opacity="0.3" />
  </svg>
);
const WifiIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="#000">
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </svg>
);
const BatteryIcon = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="#000">
    <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
  </svg>
);
const SaveTagIcon = () => (
  <svg viewBox="0 0 24 24" width={10} height={10} fill="#FFE082">
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </svg>
);

// ─── Feature list ─────────────────────────────────────────────
const FEATURES = [
  { label: "Unlimited premium courses", icon: <svg viewBox="0 0 24 24" width={18} height={18} fill="#512DA8"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" /></svg> },
  { label: "New content added weekly", icon: <svg viewBox="0 0 24 24" width={18} height={18} fill="#512DA8"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" /></svg> },
  { label: "Learn anytime, at your pace", icon: <svg viewBox="0 0 24 24" width={18} height={18} fill="#512DA8"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" /></svg> },
  { label: "All business tools & templates", icon: <svg viewBox="0 0 24 24" width={18} height={18} fill="#512DA8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg> },
  { label: "Unlimited expert Q&A queries", icon: <svg viewBox="0 0 24 24" width={18} height={18} fill="#512DA8"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" /></svg> },
];

// ─── Reusable plan card ───────────────────────────────────────
function PlanCard({
  type,
  selected,
  isCurrentPlan,
  onSelect,
}: {
  type: "annual" | "monthly";
  selected: boolean;
  isCurrentPlan?: boolean;
  onSelect: () => void;
}) {
  const isAnnual = type === "annual";
  return (
    <div
      onClick={onSelect}
      style={{
        borderRadius: 16,
        padding: "14px 16px 14px",
        marginBottom: 10,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        ...(isAnnual
          ? {
              background: "linear-gradient(140deg, #180840 0%, #3b1a8c 50%, #6b3ecf 100%)",
              boxShadow: selected ? "0 6px 22px rgba(81,45,168,0.45)" : "0 2px 8px rgba(81,45,168,0.2)",
              opacity: selected ? 1 : 0.45,
            }
          : {
              background: "#fff",
              border: selected ? "1.5px solid #7B61D4" : "1.5px solid #E8E4F4",
              boxShadow: selected ? "0 4px 14px rgba(81,45,168,0.12)" : "0 1px 3px rgba(0,0,0,0.04)",
            }),
      }}
    >
      {isAnnual && (
        <div style={{ position: "absolute", top: -18, right: -18, width: 80, height: 80, background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
      )}
      {/* Top row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: isAnnual ? "rgba(255,255,255,0.9)" : "#3D3060" }}>
            {isAnnual ? "Annual" : "Monthly"}
          </span>
          {isAnnual && (
            <span style={{ background: "linear-gradient(135deg, #FFE57F 0%, #FFB300 100%)", color: "#5D3A00", fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 8, padding: "2px 7px", borderRadius: 20, letterSpacing: "0.6px", textTransform: "uppercase" }}>
              Best Value
            </span>
          )}
          {isCurrentPlan && isAnnual && (
            <span style={{ background: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.88)", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 8, padding: "2px 7px", borderRadius: 20, letterSpacing: "0.6px", textTransform: "uppercase" }}>
              Current
            </span>
          )}
        </div>
        {/* Radio */}
        <div style={{ width: 18, height: 18, borderRadius: "50%", flexShrink: 0, border: selected ? "none" : isAnnual ? "2px solid rgba(255,255,255,0.3)" : "2px solid #C5B8EF", background: selected ? (isAnnual ? "rgba(255,255,255,0.22)" : "#512DA8") : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {selected && <CheckIcon size={11} color="#fff" />}
        </div>
      </div>

      {/* Price */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 28, color: isAnnual ? "#fff" : "#1C1440", lineHeight: 1 }}>
          {isAnnual ? "₹10,000" : "₹1,000"}
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: isAnnual ? "rgba(255,255,255,0.5)" : "#9E9E9E" }}>
          {isAnnual ? "/year" : "/month"}
        </span>
      </div>

      {/* Sub-detail */}
      {isAnnual ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)" }}>₹833/month · Billed annually + Tax</span>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,0.11)", border: "1px solid rgba(255,255,255,0.18)", color: "#FFE082", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 10, padding: "2px 8px", borderRadius: 20 }}>
            <SaveTagIcon />
            Save ₹2,000 — 2 months free
          </div>
        </div>
      ) : (
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9E9E9E", marginTop: 6 }}>₹12,000 billed yearly</div>
      )}
    </div>
  );
}

// ─── Section label ────────────────────────────────────────────
function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: "#9E9E9E", letterSpacing: "0.6px", textTransform: "uppercase", marginBottom: 12 }}>
      {text}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────
export default function ManageMembershipV2({ onBack }: { onBack?: () => void }) {
  const [demo, setDemo] = useState<DemoState>("expiring");
  const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly">("annual");
  const [showCancelSheet, setShowCancelSheet] = useState(false);
  const [showConfirmSheet, setShowConfirmSheet] = useState(false);
  const [cancelDone, setCancelDone] = useState(false);
  const [confirmDone, setConfirmDone] = useState(false);

  const isExpiring = demo === "expiring";
  const isExpired = demo === "expired";
  const isCancelled = demo === "cancelled";
  const isActive = demo === "active";
  const showPlanCards = isExpiring || isExpired;

  const expiringData = MEMBER_DATA.expiring;
  const expiredData = MEMBER_DATA.expired;
  const activeData = MEMBER_DATA.active;
  const data = isExpired ? expiredData : isExpiring ? expiringData : activeData;

  function handleCancel() {
    setCancelDone(true);
    setDemo("cancelled");
    setTimeout(() => setShowCancelSheet(false), 1800);
  }
  function handleConfirm() {
    setConfirmDone(true);
    setTimeout(() => {
      setShowConfirmSheet(false);
      setDemo("active");
      setConfirmDone(false);
    }, 1800);
  }
  function resetDemo(s: DemoState) {
    setDemo(s);
    setCancelDone(false);
    setConfirmDone(false);
    setShowCancelSheet(false);
    setShowConfirmSheet(false);
    setSelectedPlan("annual");
  }

  // pill
  const pill = {
    active:    { bg: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", dot: "#4ADE80", text: "Active",                              color: "rgba(255,255,255,0.85)" },
    expiring:  { bg: "rgba(253,211,77,0.18)",  border: "1.5px solid #FCD34D",             dot: "#FCD34D", text: `Expires in ${expiringData.daysLeft} days`, color: "#FCD34D" },
    expired:   { bg: "rgba(255,107,107,0.15)", border: "1.5px solid #FF6B6B",             dot: "#FF6B6B", text: `Expired ${expiredData.daysExpired} days ago`, color: "#FF6B6B" },
    cancelled: { bg: "rgba(120,120,120,0.18)", border: "1px solid rgba(120,120,120,0.4)", dot: "#9E9E9E", text: "Cancelled",                             color: "#9E9E9E" },
  }[demo];

  // membership card border accent
  const cardBorder = isExpired ? "1.5px solid #FFCDD2" : isExpiring ? "1.5px solid #FFE082" : isCancelled ? "1.5px solid #EAE6F8" : "1.5px solid #E8E4F4";
  const cardShadow = isExpired ? "0 2px 12px rgba(255,107,107,0.08)" : "0 2px 8px rgba(0,0,0,0.04)";

  return (
    <div style={{ background: "#e8e8e8", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 0 48px", fontFamily: "'Inter', sans-serif" }}>
      {/* Demo bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#282828", borderRadius: 12, padding: "10px 16px", marginBottom: 20 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, color: "#9E9E9E", letterSpacing: "0.8px", textTransform: "uppercase", marginRight: 4 }}>Demo</span>
        {([
          { key: "active" as DemoState, c: "#512DA8" },
          { key: "expiring" as DemoState, c: "#D97706" },
          { key: "expired" as DemoState, c: "#C62828" },
          { key: "cancelled" as DemoState, c: "#555" },
        ]).map(({ key, c }) => (
          <button key={key} onClick={() => resetDemo(key)} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer", background: demo === key ? c : "#3A3A3C", color: demo === key ? "#fff" : "#9E9E9E" }}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Phone */}
      <div style={{ width: 480, height: 1013, borderRadius: 40, overflow: "hidden", position: "relative", boxShadow: "0 30px 80px rgba(0,0,0,0.3)", border: "1.5px solid #282828", background: "#1a0b42" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>

          {/* ── HERO ── */}
          <div style={{ flexShrink: 0, background: "linear-gradient(165deg, #1a0b42 0%, #2e1575 60%, #3d1e8a 100%)", padding: "0 30px 32px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", borderRadius: "0 0 32px 32px" }}>
            {/* status bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0 0", width: "100%" }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 16, color: "#fff" }}>9:41</span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}><SignalIcon /><WifiIcon /><BatteryIcon /></div>
            </div>
            {/* back */}
            <button onClick={onBack} style={{ position: "absolute", top: 10, left: 30, width: 32, height: 32, background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <BackIcon />
            </button>
            {/* icon */}
            <div style={{ width: 68, height: 68, borderRadius: "50%", background: isExpired ? "rgba(255,107,107,0.15)" : "rgba(255,255,255,0.12)", border: isExpired ? "1.5px solid rgba(255,107,107,0.35)" : "1.5px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 22, marginBottom: 14 }}>
              {isExpired ? <ExpiredIcon size={28} /> : isExpiring ? <ClockIcon size={28} /> : <CrownIcon size={28} />}
            </div>
            {/* title */}
            <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 27, color: "#fff", textAlign: "center", lineHeight: 1.15, marginBottom: 6 }}>Manage Membership</div>
            {/* subtitle */}
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.6)", textAlign: "center", lineHeight: 1.4 }}>
              {isExpired ? "Your membership has expired — renew to regain access" : isExpiring ? "Your membership expires soon — renew to keep learning" : isCancelled ? "Your membership has been cancelled" : "Your premium membership is active"}
            </div>
            {/* status pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12, padding: "5px 14px", borderRadius: 20, background: pill.bg, border: pill.border }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: pill.dot }} />
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: pill.color }}>{pill.text}</span>
            </div>
            {/* urgency banner */}
            {(isExpiring || isExpired) && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: 7, marginTop: 10, background: isExpired ? "rgba(255,107,107,0.1)" : "rgba(253,211,77,0.1)", border: isExpired ? "1px solid rgba(255,107,107,0.3)" : "1px solid rgba(253,211,77,0.28)", borderRadius: 10, padding: "7px 12px" }}>
                <WarnIcon color={isExpired ? "#FF6B6B" : "#FCD34D"} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: isExpired ? "#FF9B9B" : "#FCD34D", lineHeight: 1.4 }}>
                  {isExpired ? `Your access ended on ${expiredData.expiryDate}. Renew to get back in.` : "Renew now to avoid losing access to all premium features"}
                </span>
              </div>
            )}
          </div>

          {/* ── SCROLL AREA ── */}
          <div style={{ flex: 1, background: "#F7F7F9", overflowY: "auto", overflowX: "hidden", paddingBottom: 110, msOverflowStyle: "none", scrollbarWidth: "none" } as React.CSSProperties}>

            {/* ── MEMBERSHIP DETAILS ── */}
            <div style={{ padding: "20px 20px 0" }}>
              <SectionLabel text="Membership Details" />

              {/* White info card */}
              <div style={{ background: "#fff", borderRadius: 16, padding: "16px 16px 14px", border: cardBorder, boxShadow: cardShadow }}>
                {/* Plan name + badges */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#1C1440" }}>
                    {data.plan} Plan
                  </span>
                  {!isCancelled && !isExpired && (
                    <span style={{ background: "#EDE8FF", color: "#512DA8", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 8, padding: "3px 8px", borderRadius: 20, letterSpacing: "0.6px", textTransform: "uppercase" }}>
                      Current Plan
                    </span>
                  )}
                  {isExpired && (
                    <span style={{ background: "#FFEBEE", color: "#C62828", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 8, padding: "3px 8px", borderRadius: 20, letterSpacing: "0.6px", textTransform: "uppercase" }}>
                      Expired
                    </span>
                  )}
                  {isCancelled && (
                    <span style={{ background: "#F0F0F0", color: "#9E9E9E", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 8, padding: "3px 8px", borderRadius: 20, letterSpacing: "0.6px", textTransform: "uppercase" }}>
                      Cancelled
                    </span>
                  )}
                </div>

                {/* Info rows */}
                {[
                  {
                    icon: <DaysIcon color={isExpired ? "#C62828" : "#606060"} />,
                    label: isExpired ? "Expired on" : isCancelled ? "Access until" : isExpiring ? "Expires in" : "Days remaining",
                    value: isExpired ? expiredData.expiryDate : isCancelled ? activeData.expiryDate : isExpiring ? `${expiringData.daysLeft} days` : `${activeData.daysLeft} days`,
                    valueColor: isExpired ? "#C62828" : "#282828",
                  },
                  {
                    icon: <CalendarIcon />,
                    label: isExpired ? "Was active since" : "Started on",
                    value: data.startDate,
                    valueColor: "#282828",
                  },
                  {
                    icon: <PlanIcon />,
                    label: "Renewal price",
                    value: `${data.price}/year`,
                    valueColor: "#282828",
                  },
                ].map(({ icon, label, value, valueColor }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: i === 0 ? 0 : 10, marginTop: i === 0 ? 0 : 10, borderTop: i === 0 ? "none" : "0.5px solid #F0F0F0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      {icon}
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#808080" }}>{label}</span>
                    </div>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 13, color: valueColor }}>{value}</span>
                  </div>
                ))}
              </div>

              {/* Contextual notice under card */}
              {isCancelled && (
                <div style={{ marginTop: 10, background: "#FFF8E1", border: "1px solid #FFE082", borderRadius: 12, padding: "11px 13px", display: "flex", gap: 9, alignItems: "flex-start" }}>
                  <WarnIcon color="#F59E0B" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#78500A", lineHeight: 1.5 }}>
                    Your premium benefits remain active until <strong>{activeData.expiryDate}</strong>. After that, your account reverts to the free plan.
                  </span>
                </div>
              )}
              {isExpired && (
                <div style={{ marginTop: 10, background: "#FFEBEE", border: "1px solid #FFCDD2", borderRadius: 12, padding: "11px 13px", display: "flex", gap: 9, alignItems: "flex-start" }}>
                  <WarnIcon color="#E57373" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#C62828", lineHeight: 1.5 }}>
                    You lost access <strong>{expiredData.daysExpired} days ago</strong>. Renew now to regain all premium features.
                  </span>
                </div>
              )}
              {isExpiring && (
                <div style={{ marginTop: 10, background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 12, padding: "11px 13px", display: "flex", gap: 9, alignItems: "flex-start" }}>
                  <WarnIcon color="#F59E0B" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#78500A", lineHeight: 1.5 }}>
                    Your premium benefits remain active until <strong>{expiringData.expiryDate}</strong>. After that, your account will revert to the free plan.
                  </span>
                </div>
              )}
            </div>

            {/* ── PLAN CARDS — expiring / expired only ── */}
            {showPlanCards && (
              <div style={{ padding: "20px 20px 0" }}>
                <SectionLabel text={isExpired ? "Choose a plan" : "Change plan?"} />
                <PlanCard type="annual" selected={selectedPlan === "annual"} isCurrentPlan={isExpiring} onSelect={() => setSelectedPlan("annual")} />
                <PlanCard type="monthly" selected={selectedPlan === "monthly"} onSelect={() => setSelectedPlan("monthly")} />

                {/* "New plan activates after current plan ends" — expiring + annual selected only */}
                {isExpiring && selectedPlan === "annual" && (
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#fff", border: "1px solid #E8E4F4", borderRadius: 12, padding: "11px 13px", marginTop: 2, marginBottom: 4 }}>
                    <div style={{ flexShrink: 0, marginTop: 1 }}>
                      <svg viewBox="0 0 24 24" width={14} height={14} fill="#512DA8"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" /></svg>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: "#1C1440", marginBottom: 2 }}>
                        New plan activates after current plan ends
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", lineHeight: 1.5 }}>
                        You will be charged now, but your renewed plan will start on{" "}
                        <strong style={{ color: "#512DA8" }}>{expiringData.expiryDate}</strong> — the day after your current plan expires. No overlap, no gap.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ── DIVIDER ── */}
            <div style={{ height: 8, background: "#EDEDF0", margin: "20px 0 0" }} />

            {/* ── WHAT'S INCLUDED ── */}
            <div style={{ padding: "20px 20px 4px" }}>
              <SectionLabel text="What's Included" />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9E9E9E", marginBottom: 2, marginTop: -6 }}>
                {isExpired ? "Renew to regain access to all these features" : isCancelled ? "You'll lose access to these benefits after your plan ends" : "Everything you get with your Premium membership"}
              </div>
            </div>
            {FEATURES.map((f, i) => {
              const dimmed = isExpired || isCancelled;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 20px", borderBottom: i < FEATURES.length - 1 ? "0.5px solid #EEEEEE" : "none", background: "#fff", opacity: dimmed ? 0.45 : 1 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F5F5F5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {f.icon}
                  </div>
                  <span style={{ flex: 1, fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#282828" }}>{f.label}</span>
                  <CheckIcon size={18} color={dimmed ? "#D0D0D0" : "#512DA8"} />
                </div>
              );
            })}

            {/* ── DIVIDER ── */}
            <div style={{ height: 8, background: "#EDEDF0", margin: "4px 0 0" }} />

            {/* ── TRUST TILES ── */}
            <div style={{ padding: "16px 20px 0", display: "flex", gap: 8 }}>
              {[
                { label: "Secure Payment", icon: <svg viewBox="0 0 24 24" width={20} height={20} fill="#512DA8"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg> },
                { label: "Cancel Anytime", icon: <svg viewBox="0 0 24 24" width={20} height={20} fill="#512DA8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg> },
                { label: "Instant Access", icon: <svg viewBox="0 0 24 24" width={20} height={20} fill="#512DA8"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></svg> },
              ].map(({ label, icon }, i) => (
                <div key={i} style={{ flex: 1, background: "#fff", borderRadius: 12, border: "1px solid #EBEBEB", padding: "12px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, textAlign: "center" }}>
                  {icon}
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#512DA8", fontWeight: 600, lineHeight: 1.3 }}>{label}</span>
                </div>
              ))}
            </div>

            {/* ── CANCEL LINK ── */}
            {isActive && (
              <div style={{ textAlign: "center", padding: "20px 20px 0" }}>
                <button onClick={() => setShowCancelSheet(true)} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#C62828", background: "none", border: "none", cursor: "pointer", textDecoration: "underline", textDecorationColor: "rgba(198,40,40,0.3)", textUnderlineOffset: 3, padding: 0 }}>
                  Cancel Membership
                </button>
              </div>
            )}
          </div>

          {/* ── STICKY CTA ── */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#fff", padding: "12px 20px 22px", boxShadow: "0 -1px 0 #EBEBEB, 0 -4px 16px rgba(0,0,0,0.06)" }}>
            {(isExpiring || isExpired) && (
              <>
                <button onClick={() => setShowConfirmSheet(true)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", height: 54, background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)", color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 17, border: "none", borderRadius: 13, cursor: "pointer", boxShadow: "0 4px 16px rgba(81,45,168,0.38)" }}>
                  <CrownIcon size={18} color="#FFD54F" />
                  Renew Membership
                </button>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9e9e9e", textAlign: "center", marginTop: 6, lineHeight: 1.4 }}>
                  {isExpired ? "Pick up right where you left off · ₹10,000/year" : "Renew now · Keep all your benefits · Cancel anytime"}
                </div>
              </>
            )}
            {isCancelled && (
              <>
                <button onClick={() => resetDemo("active")} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", height: 54, background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)", color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 17, border: "none", borderRadius: 13, cursor: "pointer", boxShadow: "0 4px 16px rgba(81,45,168,0.38)" }}>
                  Reactivate Membership
                </button>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9e9e9e", textAlign: "center", marginTop: 6 }}>
                  Your benefits are still active until {activeData.expiryDate}
                </div>
              </>
            )}
            {isActive && (
              <>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", height: 54, background: "#F5F3FF", borderRadius: 13, border: "1.5px solid #DDD8F0" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#7B52D4", fontWeight: 600 }}>Next renewal on {activeData.expiryDate}</span>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9e9e9e", textAlign: "center", marginTop: 6 }}>
                  {activeData.daysLeft} days remaining · ₹10,000/year
                </div>
              </>
            )}
          </div>

          {/* ════════ CANCEL SHEET ════════ */}
          {showCancelSheet && (
            <div onClick={() => { if (!cancelDone) setShowCancelSheet(false); }} style={{ position: "absolute", inset: 0, background: "rgba(28,20,50,0.5)", zIndex: 200, backdropFilter: "blur(3px)" }}>
              <div onClick={(e) => e.stopPropagation()} style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#fff", borderRadius: "24px 24px 0 0", padding: "0 24px 36px", boxShadow: "0 -6px 32px rgba(0,0,0,0.1)" }}>
                <div style={{ width: 36, height: 4, background: "#E0E0E0", borderRadius: 2, margin: "10px auto 0" }} />
                {!cancelDone ? (
                  <>
                    <div style={{ width: 60, height: 60, borderRadius: 16, background: "#FFF3E0", display: "flex", alignItems: "center", justifyContent: "center", margin: "22px auto 14px" }}>
                      <svg viewBox="0 0 24 24" width={26} height={26} fill="#E65100"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 18, color: "#1C1440", textAlign: "center", marginBottom: 6 }}>Cancel Membership?</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", textAlign: "center", lineHeight: 1.5, marginBottom: 18, padding: "0 8px" }}>
                      You'll keep all premium benefits until <strong style={{ color: "#282828" }}>{activeData.expiryDate}</strong>. After that, your account reverts to the free plan.
                    </div>
                    <div style={{ background: "#FFF8F8", border: "1px solid #FFD0D0", borderRadius: 12, padding: "12px 14px", marginBottom: 18 }}>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 11, color: "#C62828", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 10 }}>You'll lose access to</div>
                      {["Unlimited premium courses", "Business tools & templates", "Expert Q&A queries"].map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i < 2 ? 8 : 0 }}>
                          <svg viewBox="0 0 24 24" width={13} height={13} fill="#E57373"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#282828" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={handleCancel} style={{ width: "100%", height: 50, background: "#C62828", color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 13, cursor: "pointer", marginBottom: 10 }}>
                      Yes, Cancel Membership
                    </button>
                    <button onClick={() => setShowCancelSheet(false)} style={{ width: "100%", height: 50, background: "#F5F3FF", color: "#512DA8", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, border: "none", borderRadius: 13, cursor: "pointer" }}>
                      Keep My Membership
                    </button>
                  </>
                ) : (
                  <div style={{ textAlign: "center", padding: "28px 0 10px" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "#F5F5F5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                      <svg viewBox="0 0 24 24" width={28} height={28} fill="#9E9E9E"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 18, color: "#1C1440", marginBottom: 6 }}>Membership Cancelled</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9E9E9E", lineHeight: 1.5 }}>Your access continues until {activeData.expiryDate}</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ════════ CONFIRM RENEWAL SHEET ════════ */}
          {showConfirmSheet && (
            <div onClick={() => { if (!confirmDone) setShowConfirmSheet(false); }} style={{ position: "absolute", inset: 0, background: "rgba(28,20,50,0.5)", zIndex: 200, backdropFilter: "blur(3px)" }}>
              <div onClick={(e) => e.stopPropagation()} style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#fff", borderRadius: "24px 24px 0 0", padding: "0 24px 36px", boxShadow: "0 -6px 32px rgba(0,0,0,0.1)" }}>
                <div style={{ width: 36, height: 4, background: "#E0E0E0", borderRadius: 2, margin: "10px auto 0" }} />
                {!confirmDone ? (
                  <>
                    {/* App card */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "20px 0 16px", padding: "13px", background: "#F7F6FF", borderRadius: 14, border: "1px solid #EAE6F8" }}>
                      <div style={{ width: 42, height: 42, borderRadius: 11, background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <CrownIcon size={20} color="#FFD54F" />
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#1C1440" }}>BillionTools Premium</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9E9E9E" }}>{selectedPlan === "annual" ? "Annual Plan · Auto-renews yearly" : "Monthly Plan · Auto-renews monthly"}</div>
                      </div>
                    </div>

                    {/* Urgency */}
                    <div style={{ background: isExpired ? "#FFF1F1" : "#FFFBEB", border: isExpired ? "1px solid #FFCDD2" : "1px solid #FDE68A", borderRadius: 10, padding: "10px 13px", marginBottom: 16, display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <WarnIcon color={isExpired ? "#E57373" : "#F59E0B"} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: isExpired ? "#C62828" : "#78500A", lineHeight: 1.5 }}>
                        {isExpired
                          ? <><strong>Expired {expiredData.daysExpired} days ago.</strong> Renew now to pick up right where you left off.</>
                          : <><strong>Only {expiringData.daysLeft} days left.</strong> Renew now to keep uninterrupted access to all premium features.</>
                        }
                      </span>
                    </div>

                    {/* Price row */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5 }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#606060" }}>{selectedPlan === "annual" ? "Annual Plan" : "Monthly Plan"}</span>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 22, color: "#1C1440" }}>
                        {selectedPlan === "annual" ? "₹10,000" : "₹1,000"}
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9E9E9E", fontWeight: 400 }}>{selectedPlan === "annual" ? " /year" : " /month"}</span>
                      </span>
                    </div>
                    {selectedPlan === "annual" && (
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9E9E9E" }}>vs ₹12,000 billed monthly</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#2E7D32", fontWeight: 600 }}>Save ₹2,000</span>
                      </div>
                    )}

                    {/* "New plan activates after" — expiring + annual */}
                    {isExpiring && selectedPlan === "annual" && (
                      <div style={{ display: "flex", gap: 9, alignItems: "flex-start", background: "#F7F6FF", border: "1px solid #EAE6F8", borderRadius: 11, padding: "10px 12px", marginBottom: 14 }}>
                        <svg viewBox="0 0 24 24" width={13} height={13} fill="#512DA8" style={{ flexShrink: 0, marginTop: 1 }}><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" /></svg>
                        <div>
                          <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: "#1C1440", marginBottom: 2 }}>New plan activates after current plan ends</div>
                          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", lineHeight: 1.5 }}>
                            Charged now, starts on <strong style={{ color: "#512DA8" }}>{expiringData.expiryDate}</strong> — no overlap, no gap.
                          </div>
                        </div>
                      </div>
                    )}

                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9E9E9E", textAlign: "center", marginBottom: 14, lineHeight: 1.5 }}>
                      By confirming, you agree to the renewal terms. Cancel anytime before the next cycle.
                    </div>
                    <button onClick={handleConfirm} style={{ width: "100%", height: 52, background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)", color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 16, border: "none", borderRadius: 13, cursor: "pointer", boxShadow: "0 4px 14px rgba(81,45,168,0.35)" }}>
                      {selectedPlan === "annual" ? "Confirm Renewal · ₹10,000/yr" : "Confirm Renewal · ₹1,000/mo"}
                    </button>
                  </>
                ) : (
                  <div style={{ textAlign: "center", padding: "28px 0 10px" }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                      <svg viewBox="0 0 24 24" width={28} height={28} fill="#2E7D32"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 20, color: "#1C1440", marginBottom: 6 }}>Membership Renewed!</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9E9E9E", lineHeight: 1.5 }}>
                      {isExpired ? "Welcome back! Your premium access is restored." : "You're all set. Your premium access continues uninterrupted."}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
