import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────
type DemoState = "active" | "expiring" | "expired" | "cancelled";

// ─── Demo data ────────────────────────────────────────────────
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
const CrownIcon = ({ size = 32 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="#FFD54F">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
  </svg>
);
const ClockIcon2 = ({ size = 32, color = "#FCD34D" }: { size?: number; color?: string }) => (
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
const RefreshIcon = () => (
  <svg viewBox="0 0 24 24" width={22} height={22} fill="#512DA8">
    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
  </svg>
);
const WarnIcon = ({ color = "#FCD34D" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill={color}>
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);
const CalendarIcon = ({ color = "#512DA8" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill={color}>
    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
  </svg>
);
const DaysIcon = ({ color = "#512DA8" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill={color}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);
const PlanIcon = ({ color = "#512DA8" }: { color?: string }) => (
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
const SaveIcon = () => (
  <svg viewBox="0 0 24 24" width={11} height={11} fill="#FFE082">
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </svg>
);

// ─── Features ────────────────────────────────────────────────
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

// ─── Main Component ───────────────────────────────────────────
export default function ManageMembership() {
  const [demo, setDemo] = useState<DemoState>("active");
  const [showCancelSheet, setShowCancelSheet] = useState(false);
  const [showRenewSheet, setShowRenewSheet] = useState(false);
  const [cancelDone, setCancelDone] = useState(false);
  const [renewDone, setRenewDone] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"annual" | "monthly">("annual");

  const isExpiring = demo === "expiring";
  const isExpired = demo === "expired";
  const isCancelled = demo === "cancelled";
  const data =
    demo === "expiring"
      ? MEMBER_DATA.expiring
      : demo === "expired"
      ? MEMBER_DATA.expired
      : MEMBER_DATA.active;

  // For info rows, expired data has daysExpired not daysLeft
  const expiredData = MEMBER_DATA.expired;

  function handleCancel() {
    setCancelDone(true);
    setDemo("cancelled");
    setTimeout(() => setShowCancelSheet(false), 1800);
  }

  function handleRenew() {
    setRenewDone(true);
    setTimeout(() => {
      setShowRenewSheet(false);
      setDemo("active");
      setRenewDone(false);
    }, 1800);
  }

  function closeSheets() {
    if (!cancelDone) setShowCancelSheet(false);
    if (!renewDone) setShowRenewSheet(false);
  }

  // ── Hero icon ──
  function HeroIcon() {
    if (isExpired) return <ExpiredIcon size={32} />;
    if (isExpiring) return <ClockIcon2 size={32} color="#FCD34D" />;
    return <CrownIcon size={32} />;
  }

  // ── Hero subtitle ──
  function heroSubtitle() {
    if (isExpired) return "Your membership has expired — renew to regain access";
    if (isExpiring) return "Your membership expires soon — renew to keep learning";
    if (isCancelled) return "Your membership has been cancelled";
    return "Your premium membership is active";
  }

  // ── Status pill config ──
  const pillConfig = {
    active: {
      bg: "rgba(255,255,255,0.12)",
      border: "1px solid rgba(255,255,255,0.22)",
      dot: "#4ADE80",
      text: "Active",
      color: "rgba(255,255,255,0.85)",
    },
    expiring: {
      bg: "rgba(253,211,77,0.18)",
      border: "1.5px solid #FCD34D",
      dot: "#FCD34D",
      text: `Expires in ${MEMBER_DATA.expiring.daysLeft} days`,
      color: "#FCD34D",
    },
    expired: {
      bg: "rgba(255,107,107,0.15)",
      border: "1.5px solid #FF6B6B",
      dot: "#FF6B6B",
      text: `Expired ${expiredData.daysExpired} days ago`,
      color: "#FF6B6B",
    },
    cancelled: {
      bg: "rgba(120,120,120,0.18)",
      border: "1px solid rgba(120,120,120,0.4)",
      dot: "#9E9E9E",
      text: "Cancelled",
      color: "#9E9E9E",
    },
  }[demo];

  return (
    <div
      style={{
        background: "#e8e8e8",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 0 48px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Demo bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#282828",
          borderRadius: 12,
          padding: "10px 16px",
          marginBottom: 20,
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            color: "#9E9E9E",
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            marginRight: 4,
          }}
        >
          Demo
        </span>
        {(
          [
            { key: "active", activeColor: "#512DA8" },
            { key: "expiring", activeColor: "#D97706" },
            { key: "expired", activeColor: "#C62828" },
            { key: "cancelled", activeColor: "#555" },
          ] as { key: DemoState; activeColor: string }[]
        ).map(({ key, activeColor }) => (
          <button
            key={key}
            onClick={() => {
              setDemo(key);
              setCancelDone(false);
              setRenewDone(false);
              setShowCancelSheet(false);
              setShowRenewSheet(false);
            }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              padding: "6px 14px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: demo === key ? activeColor : "#3A3A3C",
              color: demo === key ? "#fff" : "#9E9E9E",
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* Phone */}
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
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>

          {/* ── HERO ──────────────────────────────────── */}
          <div
            style={{
              flexShrink: 0,
              background: "linear-gradient(165deg, #1a0b42 0%, #2e1575 60%, #3d1e8a 100%)",
              padding: "0 30px 36px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              borderRadius: "0 0 32px 32px",
            }}
          >
            {/* Status bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0 0",
                width: "100%",
              }}
            >
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 16, color: "#fff" }}>
                9:41
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <SignalIcon /><WifiIcon /><BatteryIcon />
              </div>
            </div>

            {/* Back button */}
            <button
              style={{
                position: "absolute",
                top: 10,
                left: 30,
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
              <BackIcon />
            </button>

            {/* Icon */}
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: isExpired
                  ? "rgba(255,107,107,0.15)"
                  : "rgba(255,255,255,0.12)",
                border: isExpired
                  ? "1.5px solid rgba(255,107,107,0.35)"
                  : "1.5px solid rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 24,
                marginBottom: 16,
              }}
            >
              <HeroIcon />
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 900,
                fontSize: 29,
                color: "#fff",
                textAlign: "center",
                lineHeight: 1.15,
                marginBottom: 8,
              }}
            >
              Manage Membership
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.65)",
                textAlign: "center",
                lineHeight: 1.4,
              }}
            >
              {heroSubtitle()}
            </div>

            {/* Status pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginTop: 14,
                padding: "6px 16px",
                borderRadius: 20,
                background: pillConfig.bg,
                border: pillConfig.border,
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: pillConfig.dot,
                }}
              />
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: pillConfig.color,
                }}
              >
                {pillConfig.text}
              </span>
            </div>

            {/* Urgency banners */}
            {isExpiring && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginTop: 10,
                  background: "rgba(253,211,77,0.12)",
                  border: "1px solid rgba(253,211,77,0.3)",
                  borderRadius: 10,
                  padding: "7px 14px",
                }}
              >
                <WarnIcon color="#FCD34D" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#FCD34D", lineHeight: 1.4 }}>
                  Renew now to avoid losing access to all premium features
                </span>
              </div>
            )}
            {isExpired && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  marginTop: 10,
                  background: "rgba(255,107,107,0.1)",
                  border: "1px solid rgba(255,107,107,0.3)",
                  borderRadius: 10,
                  padding: "7px 14px",
                }}
              >
                <WarnIcon color="#FF6B6B" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#FF9B9B", lineHeight: 1.4 }}>
                  Your access ended on {expiredData.expiryDate}. Renew to get back in.
                </span>
              </div>
            )}
          </div>

          {/* ── SCROLL AREA ───────────────────────────── */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              overflowY: "auto",
              overflowX: "hidden",
              paddingBottom: 110,
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            } as React.CSSProperties}
          >

            {/* ── Membership Details ───────────────────── */}
            <div style={{ padding: "20px 20px 0" }}>
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#9E9E9E",
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Membership Details
              </div>

              {/* ── Info card ── */}
              {isExpired ? (
                /* Expired card — white with red accent border */
                <div
                  style={{
                    background: "#fff",
                    borderRadius: 18,
                    padding: "18px 18px 16px",
                    border: "1.5px solid #FFCDD2",
                    boxShadow: "0 4px 20px rgba(255,107,107,0.12)",
                  }}
                >
                  {/* Plan + badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <span
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#3D3060",
                      }}
                    >
                      {expiredData.plan} Plan
                    </span>
                    <span
                      style={{
                        background: "#FFEBEE",
                        color: "#C62828",
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: 9,
                        padding: "3px 9px",
                        borderRadius: 20,
                        letterSpacing: "0.7px",
                        textTransform: "uppercase",
                      }}
                    >
                      Expired
                    </span>
                  </div>

                  {/* Info rows */}
                  {[
                    { Icon: <DaysIcon color="#C62828" />, label: "Expired on", value: expiredData.expiryDate },
                    { Icon: <CalendarIcon color="#606060" />, label: "Was active since", value: expiredData.startDate },
                    { Icon: <PlanIcon color="#606060" />, label: "Renewal price", value: `${expiredData.price}/year` },
                  ].map(({ Icon, label, value }, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: i === 0 ? 0 : 10,
                        marginTop: i === 0 ? 0 : 10,
                        borderTop: i === 0 ? "none" : "0.5px solid #F0F0F0",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        {Icon}
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060" }}>
                          {label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          color: i === 0 ? "#C62828" : "#282828",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}

                  {/* Expired notice */}
                  <div
                    style={{
                      marginTop: 14,
                      background: "#FFEBEE",
                      borderRadius: 10,
                      padding: "10px 12px",
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <WarnIcon color="#E57373" />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        color: "#C62828",
                        lineHeight: 1.5,
                      }}
                    >
                      You lost access{" "}
                      <strong>{expiredData.daysExpired} days ago</strong>. Renew now to regain all premium features.
                    </span>
                  </div>
                </div>
              ) : (
                /* Active / Expiring / Cancelled card */
                <div
                  style={{
                    background: isCancelled
                      ? "#FAFAFA"
                      : "linear-gradient(140deg, #180840 0%, #3b1a8c 50%, #6b3ecf 100%)",
                    borderRadius: 18,
                    padding: "18px 18px 16px",
                    position: "relative",
                    overflow: "hidden",
                    border: isCancelled ? "1.5px solid #EAE6F8" : "none",
                    boxShadow: isCancelled ? "none" : "0 8px 28px rgba(81,45,168,0.42)",
                  }}
                >
                  {!isCancelled && (
                    <>
                      <div
                        style={{
                          position: "absolute", top: -30, right: -30,
                          width: 120, height: 120,
                          background: "radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 65%)",
                          pointerEvents: "none",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute", bottom: -20, left: -10,
                          width: 90, height: 90,
                          background: "radial-gradient(circle, rgba(123,97,212,0.25) 0%, transparent 70%)",
                          pointerEvents: "none",
                        }}
                      />
                    </>
                  )}

                  {/* Plan + badge */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, position: "relative" }}>
                    <span
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        color: isCancelled ? "#3D3060" : "rgba(255,255,255,0.85)",
                      }}
                    >
                      {data.plan} Plan
                    </span>
                    {!isCancelled && (
                      <span
                        style={{
                          background: "linear-gradient(135deg, #FFE57F 0%, #FFB300 100%)",
                          color: "#5D3A00",
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 800,
                          fontSize: 9,
                          padding: "3px 9px",
                          borderRadius: 20,
                          letterSpacing: "0.7px",
                          textTransform: "uppercase",
                          boxShadow: "0 2px 6px rgba(255,179,0,0.35)",
                        }}
                      >
                        Current Plan
                      </span>
                    )}
                    {isCancelled && (
                      <span
                        style={{
                          background: "#F0F0F0",
                          color: "#9E9E9E",
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 9,
                          padding: "3px 9px",
                          borderRadius: 20,
                          letterSpacing: "0.7px",
                          textTransform: "uppercase",
                        }}
                      >
                        Cancelled
                      </span>
                    )}
                  </div>

                  {/* Info rows */}
                  {[
                    {
                      Icon: <DaysIcon color={isCancelled ? "#512DA8" : "#7B52D4"} />,
                      label: isCancelled ? "Access until" : isExpiring ? "Expires in" : "Days remaining",
                      value: isCancelled
                        ? MEMBER_DATA.active.expiryDate
                        : isExpiring
                        ? `${MEMBER_DATA.expiring.daysLeft} days`
                        : `${MEMBER_DATA.active.daysLeft} days`,
                    },
                    {
                      Icon: <CalendarIcon color={isCancelled ? "#606060" : "rgba(255,255,255,0.5)"} />,
                      label: "Started on",
                      value: data.startDate,
                    },
                    {
                      Icon: <PlanIcon color={isCancelled ? "#606060" : "rgba(255,255,255,0.5)"} />,
                      label: "Renewal price",
                      value: `${data.price}/year`,
                    },
                  ].map(({ Icon, label, value }, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: i === 0 ? 0 : 10,
                        marginTop: i === 0 ? 0 : 10,
                        borderTop: i === 0 ? "none" : isCancelled ? "0.5px solid #F0F0F0" : "0.5px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        {Icon}
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 13,
                            color: isCancelled ? "#606060" : "rgba(255,255,255,0.6)",
                          }}
                        >
                          {label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          color: isCancelled ? "#282828" : "#fff",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}

                  {!isCancelled && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        background: "rgba(255,255,255,0.13)",
                        border: "1px solid rgba(255,255,255,0.22)",
                        color: "#FFE082",
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: 11,
                        padding: "5px 12px",
                        borderRadius: 20,
                        marginTop: 14,
                      }}
                    >
                      <SaveIcon />
                      Save ₹2,000 vs monthly billing
                    </div>
                  )}
                </div>
              )}

              {/* Cancelled notice */}
              {isCancelled && (
                <div
                  style={{
                    marginTop: 12,
                    background: "#FFF8E1",
                    border: "1px solid #FFD54F",
                    borderRadius: 12,
                    padding: "12px 14px",
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <WarnIcon color="#FCD34D" />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#7A5A00", lineHeight: 1.5 }}>
                    Your premium benefits remain active until{" "}
                    <strong>{MEMBER_DATA.active.expiryDate}</strong>. After that, your account will revert to the free plan.
                  </span>
                </div>
              )}
            </div>

            {/* Section divider */}
            <div style={{ height: 8, background: "#f7f6ff", margin: "20px 0 0" }} />

            {/* ── Benefits ─────────────────────────────── */}
            <div style={{ padding: "20px 0 0" }}>
              <div style={{ padding: "0 20px 4px" }}>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#9E9E9E",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  What's Included
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9E9E9E", marginBottom: 6 }}>
                  {isExpired
                    ? "Renew to regain access to all these features"
                    : isCancelled
                    ? "You'll lose access to these benefits after your plan ends"
                    : "Everything you get with your Premium membership"}
                </div>
              </div>

              {FEATURES.map((f, i) => {
                const dimmed = isExpired || isCancelled;
                return (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "15px 30px",
                      borderBottom: i < FEATURES.length - 1 ? "0.5px solid #F0F0F0" : "none",
                      opacity: dimmed ? 0.5 : 1,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: dimmed ? "#F5F5F5" : "#F0EEFF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {f.icon}
                    </div>
                    <span
                      style={{
                        flex: 1,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        color: dimmed ? "#9E9E9E" : "#282828",
                      }}
                    >
                      {f.label}
                    </span>
                    <div style={{ width: 22, height: 22, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <CheckIcon color={dimmed ? "#D0D0D0" : "#512DA8"} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section divider */}
            <div style={{ height: 8, background: "#f7f6ff", margin: "4px 0 0" }} />

            {/* ── Trust tiles ──────────────────────────── */}
            <div style={{ padding: "18px 20px 0", display: "flex", gap: 8 }}>
              {[
                { Icon: <ShieldIcon />, label: "Secure Payment" },
                { Icon: <CircleCheckIcon />, label: "Cancel Anytime" },
                { Icon: <RefreshIcon />, label: "Instant Access" },
              ].map(({ Icon, label }, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    background: "#f7f6ff",
                    borderRadius: 12,
                    padding: "12px 8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    textAlign: "center",
                  }}
                >
                  {Icon}
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#512DA8", fontWeight: 600, lineHeight: 1.3 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Cancel link — active state only ─────── */}
            {demo === "active" && (
              <div style={{ textAlign: "center", padding: "22px 20px 0" }}>
                <button
                  onClick={() => setShowCancelSheet(true)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "#C62828",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    textDecorationColor: "rgba(198,40,40,0.35)",
                    textUnderlineOffset: 3,
                    padding: 0,
                  }}
                >
                  Cancel Membership
                </button>
              </div>
            )}
          </div>

          {/* ── STICKY CTA ────────────────────────────────────── */}
          <div
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              background: "#fff",
              padding: "12px 20px 22px",
              boxShadow: "0 -2px 16px rgba(0,0,0,0.08)",
            }}
          >
            {/* Expiring — Renew */}
            {isExpiring && (
              <>
                <button
                  onClick={() => setShowRenewSheet(true)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    width: "100%", height: 56,
                    background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                    color: "#fff",
                    fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 17,
                    border: "none", borderRadius: 13, cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(81,45,168,0.4)",
                  }}
                >
                  <CrownIcon size={20} />
                  Renew Membership
                </button>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9e9e9e", textAlign: "center", marginTop: 7, lineHeight: 1.4 }}>
                  Renew now · Keep all your benefits · Cancel anytime
                </div>
              </>
            )}

            {/* Expired — Renew (more urgent) */}
            {isExpired && (
              <>
                <button
                  onClick={() => setShowRenewSheet(true)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    width: "100%", height: 56,
                    background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                    color: "#fff",
                    fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 17,
                    border: "none", borderRadius: 13, cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(81,45,168,0.4)",
                  }}
                >
                  <CrownIcon size={20} />
                  Renew Membership
                </button>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9e9e9e", textAlign: "center", marginTop: 7, lineHeight: 1.4 }}>
                  Pick up right where you left off · ₹10,000/year
                </div>
              </>
            )}

            {/* Cancelled — Reactivate */}
            {isCancelled && (
              <>
                <button
                  onClick={() => { setDemo("active"); setCancelDone(false); }}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    width: "100%", height: 56,
                    background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                    color: "#fff",
                    fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 17,
                    border: "none", borderRadius: 13, cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(81,45,168,0.4)",
                  }}
                >
                  Reactivate Membership
                </button>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9e9e9e", textAlign: "center", marginTop: 7, lineHeight: 1.4 }}>
                  Your benefits are still active until {MEMBER_DATA.active.expiryDate}
                </div>
              </>
            )}

            {/* Active — info only */}
            {demo === "active" && (
              <>
                <div
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    width: "100%", height: 56,
                    background: "#F5F3FF", borderRadius: 13, border: "1.5px solid #DDD8F0",
                  }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#7B52D4", fontWeight: 600 }}>
                    Next renewal on {MEMBER_DATA.active.expiryDate}
                  </span>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9e9e9e", textAlign: "center", marginTop: 7, lineHeight: 1.4 }}>
                  {MEMBER_DATA.active.daysLeft} days remaining · ₹10,000/year
                </div>
              </>
            )}
          </div>

          {/* ════════════════════════════════════════
              CANCEL SHEET
          ════════════════════════════════════════ */}
          {showCancelSheet && (
            <div
              onClick={closeSheets}
              style={{
                position: "absolute", inset: 0,
                background: "rgba(28,20,50,0.55)",
                zIndex: 200, backdropFilter: "blur(3px)",
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "#fff", borderRadius: "24px 24px 0 0",
                  padding: "0 24px 36px",
                  boxShadow: "0 -6px 32px rgba(81,45,168,0.14)",
                }}
              >
                <div style={{ width: 36, height: 4, background: "#DDD8F0", borderRadius: 2, margin: "10px auto 0" }} />

                {!cancelDone ? (
                  <>
                    <div
                      style={{
                        width: 62, height: 62, borderRadius: 18,
                        background: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "22px auto 16px",
                      }}
                    >
                      <svg viewBox="0 0 24 24" width={28} height={28} fill="#E65100">
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                      </svg>
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 18, color: "#1C1440", textAlign: "center", marginBottom: 6 }}>
                      Cancel Membership?
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", textAlign: "center", lineHeight: 1.5, marginBottom: 20, padding: "0 8px" }}>
                      You'll keep all premium benefits until{" "}
                      <strong style={{ color: "#282828" }}>{MEMBER_DATA.active.expiryDate}</strong>. After that, your account reverts to the free plan.
                    </div>

                    <div style={{ background: "#FFF8F8", border: "1px solid #FFD0D0", borderRadius: 12, padding: "12px 14px", marginBottom: 20 }}>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: "#C62828", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: 10 }}>
                        You'll lose access to
                      </div>
                      {["Unlimited premium courses", "Business tools & templates", "Expert Q&A queries"].map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: i < 2 ? 8 : 0 }}>
                          <svg viewBox="0 0 24 24" width={14} height={14} fill="#E57373">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                          </svg>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#282828" }}>{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleCancel}
                      style={{
                        width: "100%", height: 50, background: "#C62828", color: "#fff",
                        fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 16,
                        border: "none", borderRadius: 14, cursor: "pointer", marginBottom: 10,
                      }}
                    >
                      Yes, Cancel Membership
                    </button>
                    <button
                      onClick={() => setShowCancelSheet(false)}
                      style={{
                        width: "100%", height: 50, background: "#F4F3FA", color: "#512DA8",
                        fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 16,
                        border: "none", borderRadius: 14, cursor: "pointer",
                      }}
                    >
                      Keep My Membership
                    </button>
                  </>
                ) : (
                  <div style={{ textAlign: "center", padding: "28px 0 10px" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F5F5F5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                      <svg viewBox="0 0 24 24" width={32} height={32} fill="#9E9E9E">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 18, color: "#1C1440", marginBottom: 8 }}>
                      Membership Cancelled
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9E9E9E", lineHeight: 1.5 }}>
                      Your access continues until {MEMBER_DATA.active.expiryDate}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════
              RENEW SHEET (expiring + expired)
          ════════════════════════════════════════ */}
          {showRenewSheet && (
            <div
              onClick={closeSheets}
              style={{
                position: "absolute", inset: 0,
                background: "rgba(28,20,50,0.55)",
                zIndex: 200, backdropFilter: "blur(3px)",
              }}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "#fff", borderRadius: "24px 24px 0 0",
                  padding: "0 24px 36px",
                  boxShadow: "0 -6px 32px rgba(81,45,168,0.14)",
                }}
              >
                <div style={{ width: 36, height: 4, background: "#DDD8F0", borderRadius: 2, margin: "10px auto 0" }} />

                {!renewDone ? (
                  <>
                    {/* BT App card */}
                    <div
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        margin: "22px 0 18px", padding: "14px",
                        background: "#F5F3FF", borderRadius: 14, border: "1px solid #EAE6F8",
                      }}
                    >
                      <div
                        style={{
                          width: 44, height: 44, borderRadius: 12,
                          background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                        }}
                      >
                        <CrownIcon size={22} />
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#1C1440" }}>
                          BillionTools Premium
                        </div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9E9E9E" }}>
                          Annual Plan · Auto-renews yearly
                        </div>
                      </div>
                    </div>

                    {/* Urgency message */}
                    <div
                      style={{
                        background: isExpired ? "rgba(255,107,107,0.08)" : "rgba(253,211,77,0.1)",
                        border: isExpired ? "1px solid rgba(255,107,107,0.3)" : "1px solid rgba(253,211,77,0.4)",
                        borderRadius: 10, padding: "10px 14px", marginBottom: 18,
                        display: "flex", gap: 8, alignItems: "flex-start",
                      }}
                    >
                      <WarnIcon color={isExpired ? "#E57373" : "#FCD34D"} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: isExpired ? "#C62828" : "#7A5A00", lineHeight: 1.5 }}>
                        {isExpired
                          ? <>Your membership <strong>expired {expiredData.daysExpired} days ago</strong>. Renew now to pick up right where you left off.</>
                          : <>Only <strong>{MEMBER_DATA.expiring.daysLeft} days left</strong> on your current plan. Renew now to keep uninterrupted access.</>
                        }
                      </span>
                    </div>

                    {/* ── Plan section label ── */}
                    <div
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: 12,
                        color: "#9E9E9E",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        marginBottom: 10,
                      }}
                    >
                      {isExpired ? "Choose a plan" : "Change plan?"}
                    </div>

                    {/* ── Annual card ── */}
                    <div
                      onClick={() => setSelectedPlan("annual")}
                      style={{
                        background: selectedPlan === "annual"
                          ? "linear-gradient(140deg, #180840 0%, #3b1a8c 50%, #6b3ecf 100%)"
                          : "linear-gradient(140deg, #180840 0%, #3b1a8c 50%, #6b3ecf 100%)",
                        borderRadius: 14,
                        padding: "14px 14px 12px",
                        marginBottom: 8,
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: selectedPlan === "annual"
                          ? "0 6px 20px rgba(81,45,168,0.45)"
                          : "none",
                        opacity: selectedPlan === "annual" ? 1 : 0.4,
                        transition: "opacity 0.15s, box-shadow 0.15s",
                      }}
                    >
                      <div style={{ position: "absolute", top: -20, right: -20, width: 90, height: 90, background: "radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                          <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.85)" }}>Annual</span>
                          <span style={{ background: "linear-gradient(135deg, #FFE57F 0%, #FFB300 100%)", color: "#5D3A00", fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 9, padding: "2px 8px", borderRadius: 20, letterSpacing: "0.6px", textTransform: "uppercase" }}>Best Value</span>
                          {isExpiring && (
                            <span style={{ background: "rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.9)", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 9, padding: "2px 8px", borderRadius: 20, letterSpacing: "0.6px", textTransform: "uppercase" }}>Current</span>
                          )}
                        </div>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", border: selectedPlan === "annual" ? "none" : "2px solid rgba(255,255,255,0.3)", background: selectedPlan === "annual" ? "rgba(255,255,255,0.25)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {selectedPlan === "annual" && <CheckIcon size={12} color="#fff" />}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 26, color: "#fff", lineHeight: 1 }}>₹10,000</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)" }}>/year</span>
                      </div>
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#FFE082", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 10, padding: "3px 10px", borderRadius: 20, marginTop: 8 }}>
                        <SaveIcon />
                        Save ₹2,000 vs monthly
                      </div>
                    </div>

                    {/* ── Monthly card ── */}
                    <div
                      onClick={() => setSelectedPlan("monthly")}
                      style={{
                        background: "#fff",
                        border: selectedPlan === "monthly" ? "1.5px solid #7B61D4" : "1.5px solid #EAE6F8",
                        borderRadius: 14,
                        padding: "14px 14px 12px",
                        marginBottom: 14,
                        cursor: "pointer",
                        boxShadow: selectedPlan === "monthly" ? "0 4px 14px rgba(81,45,168,0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
                        transition: "border-color 0.15s, box-shadow 0.15s",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#3D3060" }}>Monthly</span>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", border: selectedPlan === "monthly" ? "none" : "2px solid #C5B8EF", background: selectedPlan === "monthly" ? "#512DA8" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {selectedPlan === "monthly" && <CheckIcon size={12} color="#fff" />}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 26, color: "#1C1440", lineHeight: 1 }}>₹1,000</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9E9E9E" }}>/month</span>
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9E9E9E", marginTop: 4 }}>₹12,000 billed yearly</div>
                    </div>

                    {/* "New plan activates after current plan ends" — expiring only */}
                    {!isExpired && (
                      <div
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          background: "#F0EEFF",
                          border: "1px solid #DDD8F0",
                          borderRadius: 12,
                          padding: "11px 13px",
                          marginBottom: 14,
                        }}
                      >
                        <div style={{ flexShrink: 0, marginTop: 1 }}>
                          <CalendarIcon color="#512DA8" />
                        </div>
                        <div>
                          <div
                            style={{
                              fontFamily: "'Lato', sans-serif",
                              fontWeight: 700,
                              fontSize: 13,
                              color: "#3D3060",
                              marginBottom: 3,
                            }}
                          >
                            New plan activates after current plan ends
                          </div>
                          <div
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: 12,
                              color: "#7B52D4",
                              lineHeight: 1.5,
                            }}
                          >
                            You will be charged now, but your renewed plan will start on{" "}
                            <strong>{MEMBER_DATA.expiring.expiryDate}</strong> — the day after your current plan expires. No overlap, no gap.
                          </div>
                        </div>
                      </div>
                    )}

                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9E9E9E", textAlign: "center", marginBottom: 14, lineHeight: 1.5 }}>
                      By confirming, you agree to the renewal terms. Cancel anytime before the next cycle.
                    </div>

                    <button
                      onClick={handleRenew}
                      style={{
                        width: "100%", height: 54,
                        background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                        color: "#fff",
                        fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 17,
                        border: "none", borderRadius: 14, cursor: "pointer",
                        boxShadow: "0 4px 16px rgba(81,45,168,0.35)",
                      }}
                    >
                      {selectedPlan === "annual" ? "Confirm Renewal · ₹10,000/yr" : "Confirm Renewal · ₹1,000/mo"}
                    </button>
                  </>
                ) : (
                  <div style={{ textAlign: "center", padding: "28px 0 10px" }}>
                    <div
                      style={{
                        width: 64, height: 64, borderRadius: "50%",
                        background: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        margin: "0 auto 16px",
                      }}
                    >
                      <svg viewBox="0 0 24 24" width={32} height={32} fill="#2E7D32">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 20, color: "#1C1440", marginBottom: 6 }}>
                      Membership Renewed!
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9E9E9E", lineHeight: 1.5 }}>
                      {isExpired
                        ? "Welcome back! Your premium access is restored."
                        : "You're all set. Your premium access continues uninterrupted."}
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
