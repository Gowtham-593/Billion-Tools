import { useState } from "react";

export default function CoursesExpired() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sheetStep, setSheetStep] = useState<"plan" | "confirm" | "success">("plan");
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "monthly">("yearly");
  const [activeCourse, setActiveCourse] = useState<{
    id: string;
    name: string;
    color: string;
    emoji: string;
  } | null>(null);

  function openSheet(id: string, name: string, color: string, emoji: string) {
    setActiveCourse({ id, name, color, emoji });
    setSheetStep("plan");
    setSelectedPlan("yearly");
    setSheetOpen(true);
  }

  function closeSheet() {
    setSheetOpen(false);
  }

  const isInProgress = activeCourse
    ? activeCourse.id === "tasks-people" || activeCourse.id === "build-team"
    : false;

  // Lock icon SVG (shared)
  const LockIcon = ({ color = "#92400E", size = 15 }: { color?: string; size?: number }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  );

  // Expired-access course card
  function ExpiredCard({
    id,
    name,
    desc,
    sections,
    progress,
    iconColor,
    emoji,
  }: {
    id: string;
    name: string;
    desc: string;
    sections: string;
    progress: number;
    iconColor: string;
    emoji: string;
  }) {
    return (
      <div
        style={{
          background: "#FFFDF5",
          border: "1px solid #FDE68A",
          borderRadius: 16,
          margin: "0 16px 14px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ padding: "14px 14px 12px" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 10 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                flexShrink: 0,
                overflow: "hidden",
                border: "2px solid #FDE68A",
                position: "relative",
              }}
            >
              <svg viewBox="0 0 60 60" width="60" height="60">
                <circle cx="30" cy="30" r="30" fill={iconColor} opacity={0.6} />
                <text x="30" y="38" fontSize="26" textAnchor="middle">{emoji}</text>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 17, color: "#282828", lineHeight: 1.25, paddingRight: 6 }}>
                {name}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", lineHeight: 1.4, marginTop: 4 }}>
                {desc}
              </div>
            </div>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "1px solid #E5E5EA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                cursor: "pointer",
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#606060">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
            </div>
          </div>

          {/* Progress locked */}
          <div style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  color: "#B45309",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <LockIcon color="#B45309" size={12} />
                Progress locked
              </span>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, fontWeight: 700, color: "#9E9E9E" }}>
                {progress}% done
              </span>
            </div>
            <div style={{ height: 5, background: "#F3F3F3", borderRadius: 3, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #FCD34D, #F59E0B)",
                  borderRadius: 3,
                  opacity: 0.7,
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#9E9E9E">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060" }}>{sections}</span>
            </div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                background: "#FEF3C7",
                color: "#B45309",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: 10,
                padding: "3px 10px",
                borderRadius: 20,
                letterSpacing: "0.3px",
              }}
            >
              <svg viewBox="0 0 24 24" width="9" height="9" fill="#B45309">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              ACCESS EXPIRED
            </span>
          </div>

          <button
            onClick={() => openSheet(id, name, iconColor.replace("#", ""), emoji)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              height: 44,
              background: "#FEF3C7",
              border: "1.5px solid #FCD34D",
              color: "#92400E",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              borderRadius: 12,
              cursor: "pointer",
            }}
          >
            <LockIcon color="#92400E" size={15} />
            Renew to Resume — {progress}% done
          </button>
        </div>
      </div>
    );
  }

  // Locked course card (never started)
  function LockedCard({
    id,
    name,
    desc,
    sections,
    iconColor,
    emoji,
  }: {
    id: string;
    name: string;
    desc: string;
    sections: string;
    iconColor: string;
    emoji: string;
  }) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #E5E5EA",
          borderRadius: 16,
          margin: "0 16px 14px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ padding: "14px 14px 12px" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 10 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                flexShrink: 0,
                overflow: "hidden",
                border: "2px solid #E3DFFF",
                opacity: 0.5,
              }}
            >
              <svg viewBox="0 0 60 60" width="60" height="60">
                <circle cx="30" cy="30" r="30" fill={iconColor} />
                <text x="30" y="38" fontSize="26" textAnchor="middle">{emoji}</text>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 17, color: "#606060", lineHeight: 1.25, paddingRight: 6 }}>
                {name}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", lineHeight: 1.4, marginTop: 4 }}>
                {desc}
              </div>
            </div>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                border: "1px solid #E5E5EA",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#9E9E9E">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
              </svg>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="#CECECE">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9E9E9E" }}>{sections}</span>
            </div>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
                background: "#E3DFFF",
                color: "#512DA8",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: 10,
                padding: "3px 10px",
                borderRadius: 20,
                letterSpacing: "0.3px",
              }}
            >
              <svg viewBox="0 0 24 24" width="9" height="9" fill="#512DA8">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
              </svg>
              PREMIUM
            </span>
          </div>

          <button
            onClick={() => openSheet(id, name, iconColor.replace("#", ""), emoji)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              height: 44,
              background: "#F7F6FF",
              border: "1.5px solid #E3DFFF",
              color: "#512DA8",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              borderRadius: 12,
              cursor: "pointer",
            }}
          >
            <LockIcon color="#512DA8" size={15} />
            Renew to Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#e8e8e8",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "32px 0 48px",
      }}
    >
      <div
        style={{
          width: 480,
          height: 1013,
          borderRadius: 40,
          border: "1.5px solid #282828",
          boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
          overflow: "hidden",
          position: "relative",
          background: "#fff",
        }}
      >
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>

          {/* Header */}
          <div style={{ background: "#f7f6ff", flexShrink: 0 }}>
            {/* Status bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 26px 4px" }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 16, color: "#000" }}>9:41</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
                  <rect x="1" y="15" width="3" height="6" rx="1" />
                  <rect x="6" y="11" width="3" height="10" rx="1" />
                  <rect x="11" y="7" width="3" height="14" rx="1" />
                  <rect x="16" y="3" width="3" height="18" rx="1" opacity={0.3} />
                </svg>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </svg>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                </svg>
              </div>
            </div>

            {/* Header bar with search */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 20px 14px" }}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#fff",
                  border: "1.5px solid #E3DFFF",
                  borderRadius: 24,
                  padding: "9px 16px",
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#9E9E9E" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#9E9E9E" }}>Search Courses</span>
              </div>
              {/* Language icon */}
              <div style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                <svg viewBox="0 0 34 34" width="34" height="34">
                  <circle cx="17" cy="17" r="14" fill="#E3DFFF" />
                  <text x="17" y="22" fontFamily="serif" fontSize="13" fontWeight="700" fill="#512DA8" textAnchor="middle">அ</text>
                  <path d="M27 14 L30 17 L27 20" stroke="#512DA8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="30" y="22" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#512DA8" textAnchor="middle">A</text>
                </svg>
              </div>
              {/* A icon */}
              <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                  <path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
                </svg>
              </div>
              {/* Volume icon */}
              <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              </div>
              {/* Settings icon */}
              <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96a7.26 7.26 0 0 0-1.62-.94l-.36-2.54A.484.484 0 0 0 14 2h-4c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.477.477 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h4c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Scroll area */}
          <div className="scrollbar-hide" style={{ flex: 1, overflowY: "auto", overflowX: "hidden", paddingBottom: 80 }}>

            {/* Expired Banner */}
            <div
              style={{
                background: "linear-gradient(135deg, #7C2D12 0%, #B45309 100%)",
                margin: "16px 16px 0",
                borderRadius: 16,
                padding: 16,
                display: "flex",
                flexDirection: "column",
                gap: 12,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    background: "rgba(255,255,255,0.15)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 16, color: "#fff", lineHeight: 1.3 }}>
                    Your Premium membership has expired
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.8)", marginTop: 3, lineHeight: 1.4 }}>
                    Annual plan expired on April 3, 2026 · All premium courses are now locked
                  </div>
                </div>
              </div>
              <button
                onClick={() => openSheet("renew-all", "All Premium Courses", "512DA8", "📚")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 42,
                  background: "#fff",
                  color: "#B45309",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 800,
                  fontSize: 14,
                  border: "none",
                  borderRadius: 12,
                  cursor: "pointer",
                }}
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#B45309">
                  <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                </svg>
                Reactivate Membership — View Plans
              </button>
            </div>

            {/* Section: Pick up where you left off */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "#606060",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                padding: "18px 16px 10px",
              }}
            >
              Pick up where you left off
            </div>

            <ExpiredCard
              id="tasks-people"
              name="Tasks vs People — Leading & Managing with Clarity"
              desc="Learn the different leadership styles to manage people and tasks effectively"
              sections="3 Sections"
              progress={75}
              iconColor="#C5B358"
              emoji="⚖️"
            />

            <ExpiredCard
              id="build-team"
              name="Build a Great Team"
              desc="Master people assessment and build high performing teams"
              sections="1 Section"
              progress={40}
              iconColor="#2E5E6E"
              emoji="🤝"
            />

            {/* Section: More Premium Courses */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                color: "#606060",
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                padding: "18px 16px 10px",
              }}
            >
              More Premium Courses
            </div>

            <LockedCard
              id="marketing"
              name="Marketing 101"
              desc="Build a strong marketing strategy to grow revenue in a buyer's market"
              sections="1 Section"
              iconColor="#2E6E4E"
              emoji="📈"
            />

            <LockedCard
              id="finance"
              name="Finance Fundamentals for SMEs"
              desc="Understand cash flow, margins, and financial decisions that scale your business"
              sections="2 Sections"
              iconColor="#5E3A2E"
              emoji="💰"
            />

            <LockedCard
              id="operations"
              name="Operations That Scale"
              desc="Design processes, reduce waste, and build systems that run without you"
              sections="3 Sections"
              iconColor="#1A3A5E"
              emoji="⚙️"
            />
          </div>

          {/* Bottom Nav */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 72,
              background: "#fff",
              borderTop: "0.5px solid #E5E5EA",
              display: "flex",
              alignItems: "flex-start",
              paddingTop: 10,
            }}
          >
            {[
              {
                label: "Home",
                active: false,
                icon: (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#606060" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                ),
              },
              {
                label: "Courses",
                active: true,
                icon: (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#512DA8">
                    <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z" />
                  </svg>
                ),
              },
              {
                label: "Library",
                active: false,
                icon: (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#606060" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                ),
              },
              {
                label: "Tools",
                active: false,
                icon: (
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#606060" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    color: item.active ? "#512DA8" : "#606060",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Overlay */}
          {sheetOpen && (
            <div
              onClick={closeSheet}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(40,28,14,0.6)",
                zIndex: 100,
                backdropFilter: "blur(4px)",
              }}
            />
          )}

          {/* Bottom Sheet */}
          {sheetOpen && (
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
                maxHeight: "92%",
                boxShadow: "0 -4px 28px rgba(180,83,9,0.15)",
                overflow: "hidden",
              }}
            >
              {/* Handle */}
              <div style={{ width: 40, height: 4, background: "#D0CAEA", borderRadius: 2, margin: "12px auto 0", flexShrink: 0 }} />

              <div className="scrollbar-hide" style={{ overflowY: "auto", flex: 1 }}>

                {/* Step 1: Plan selection */}
                {sheetStep === "plan" && (
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px 12px" }}>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 18, color: "#282828" }}>
                        Reactivate Your Plan
                      </span>
                      <button
                        onClick={closeSheet}
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
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="#512DA8">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                      </button>
                    </div>

                    {/* Expired alert */}
                    <div
                      style={{
                        margin: "0 14px 14px",
                        background: "#FFFBEB",
                        border: "1.5px solid #FCD34D",
                        borderRadius: 14,
                        padding: 14,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div
                          style={{
                            width: 38,
                            height: 38,
                            background: "#FEF3C7",
                            borderRadius: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="#B45309">
                            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                          </svg>
                        </div>
                        <div>
                          <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 14, color: "#92400E" }}>
                            Your membership has expired
                          </div>
                          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#B45309", marginTop: 2, lineHeight: 1.4 }}>
                            Annual plan expired April 3, 2026. Reactivate to continue your learning journey and resume where you left off.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Course preview */}
                    {activeCourse && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          background: "#F7F6FF",
                          border: "1px solid #E3DFFF",
                          borderRadius: 14,
                          margin: "0 14px 14px",
                          padding: "12px 14px",
                        }}
                      >
                        <div style={{ width: 46, height: 46, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #E3DFFF" }}>
                          <svg viewBox="0 0 60 60" width="46" height="46">
                            <circle cx="30" cy="30" r="30" fill={`#${activeCourse.color}`} />
                            <text x="30" y="38" fontSize="22" textAnchor="middle">{activeCourse.emoji}</text>
                          </svg>
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#282828", lineHeight: 1.3 }}>
                            {activeCourse.name}
                          </div>
                          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", marginTop: 3 }}>
                            {isInProgress ? "You had progress in this course — renew to resume" : "Renew membership to access this course"}
                          </div>
                        </div>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="#9E9E9E" style={{ marginLeft: "auto", flexShrink: 0 }}>
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </svg>
                      </div>
                    )}

                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        fontWeight: 600,
                        color: "#606060",
                        letterSpacing: "0.8px",
                        textTransform: "uppercase",
                        padding: "0 14px 10px",
                      }}
                    >
                      Choose a Plan to Reactivate
                    </div>

                    {/* Plan cards */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 14px 14px" }}>
                      {/* Yearly */}
                      <div
                        onClick={() => setSelectedPlan("yearly")}
                        style={{
                          borderRadius: 14,
                          padding: "14px 16px",
                          cursor: "pointer",
                          background:
                            selectedPlan === "yearly"
                              ? "linear-gradient(135deg, #2a1060 0%, #512DA8 60%, #7B52D4 100%)"
                              : "#E3DFFF",
                          boxShadow: selectedPlan === "yearly" ? "0 4px 16px rgba(81,45,168,0.28)" : "none",
                          opacity: selectedPlan === "yearly" ? 1 : 0.45,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>Annual Plan</span>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 10, color: "#5D4037", background: "#FCD34D", padding: "3px 9px", borderRadius: 20 }}>
                              RECOMMENDED
                            </span>
                            <div
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: "50%",
                                border: "2px solid #fff",
                                background: "rgba(255,255,255,0.25)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {selectedPlan === "yearly" && (
                                <svg viewBox="0 0 24 24" width="12" height="12" fill="#fff">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                          <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 26, color: "#fff" }}>₹10,000</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>/year</span>
                        </div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
                          ₹833/month · Billed annually · + Tax applicable
                        </div>
                        <div
                          style={{
                            display: "inline-block",
                            background: "rgba(255,255,255,0.18)",
                            color: "#fff",
                            fontFamily: "'Lato', sans-serif",
                            fontWeight: 700,
                            fontSize: 11,
                            padding: "3px 9px",
                            borderRadius: 20,
                            marginTop: 8,
                          }}
                        >
                          Save ₹2,000 — 2 months free vs monthly
                        </div>
                      </div>

                      {/* Monthly */}
                      <div
                        onClick={() => setSelectedPlan("monthly")}
                        style={{
                          borderRadius: 14,
                          padding: "14px 16px",
                          cursor: "pointer",
                          background: "#fff",
                          border: selectedPlan === "monthly" ? "1.5px solid #512DA8" : "1.5px solid #E3DFFF",
                          boxShadow: selectedPlan === "monthly" ? "0 2px 12px rgba(81,45,168,0.15)" : "none",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#282828" }}>Monthly Plan</span>
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              border: selectedPlan === "monthly" ? "2px solid #512DA8" : "2px solid #C4B5FD",
                              background: selectedPlan === "monthly" ? "#512DA8" : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {selectedPlan === "monthly" && (
                              <svg viewBox="0 0 24 24" width="12" height="12" fill="#fff">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                          <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 26, color: "#282828" }}>₹1,000</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060" }}>/month</span>
                        </div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", marginTop: 2 }}>
                          + Applicable tax · Billed monthly · Cancel anytime
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: "0 14px 14px", flexShrink: 0 }}>
                      <button
                        onClick={() => setSheetStep("confirm")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          width: "100%",
                          height: 52,
                          background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                          color: "#fff",
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 800,
                          fontSize: 17,
                          border: "none",
                          borderRadius: 13,
                          cursor: "pointer",
                          boxShadow: "0 4px 14px rgba(81,45,168,0.3)",
                        }}
                      >
                        {selectedPlan === "yearly" ? "Reactivate Annual Plan" : "Reactivate Monthly Plan"}
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff">
                          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                      </button>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9E9E9E", textAlign: "center", marginTop: 6 }}>
                        {selectedPlan === "yearly"
                          ? "₹10,000/year (₹833/month) + applicable tax. Access starts immediately upon payment."
                          : "₹1,000/month + applicable tax. Access starts immediately upon payment."}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Confirm */}
                {sheetStep === "confirm" && activeCourse && (
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px 12px" }}>
                      <button
                        onClick={() => setSheetStep("plan")}
                        style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}
                      >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="#282828">
                          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                        </svg>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, color: "#282828" }}>Back</span>
                      </button>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 18, color: "#282828" }}>Confirm Renewal</span>
                      <button
                        onClick={closeSheet}
                        style={{ width: 30, height: 30, background: "#E3DFFF", border: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                      >
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="#512DA8">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                      </button>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#F7F6FF", border: "1px solid #E3DFFF", borderRadius: 14, margin: "0 14px 14px", padding: "12px 14px" }}>
                      <div style={{ width: 46, height: 46, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #E3DFFF" }}>
                        <svg viewBox="0 0 60 60" width="46" height="46">
                          <circle cx="30" cy="30" r="30" fill={`#${activeCourse.color}`} />
                          <text x="30" y="38" fontSize="22" textAnchor="middle">{activeCourse.emoji}</text>
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#282828" }}>{activeCourse.name}</div>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#E8F5E9", color: "#2E7D32", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 20, marginTop: 4 }}>
                          <svg viewBox="0 0 24 24" width="10" height="10" fill="#2E7D32">
                            <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
                          </svg>
                          Will be unlocked with membership
                        </div>
                      </div>
                    </div>

                    {/* App card */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#F7F6FF", border: "1px solid #E3DFFF", borderRadius: 14, margin: "0 14px 10px", padding: "12px 14px" }}>
                      <svg viewBox="0 0 60 60" width="46" height="46" style={{ borderRadius: 11, flexShrink: 0 }}>
                        <rect width="60" height="60" rx="14" fill="#512DA8" />
                        <polygon points="46,10 22,24 28,29" fill="#F16623" />
                        <polygon points="46,10 28,29 26,44" fill="#E07818" />
                        <polygon points="28,29 32,32 26,44" fill="#F16623" opacity={0.7} />
                        <text x="7" y="52" fontFamily="Lato,sans-serif" fontWeight="900" fontSize="22" fill="#fff" letterSpacing="-1">BT</text>
                      </svg>
                      <div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#282828" }}>BillionTools Premium</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", marginTop: 3 }}>Poornatha · SME Subscription · Renewal</div>
                      </div>
                    </div>

                    {/* Summary */}
                    <div style={{ background: "#F7F6FF", border: "1px solid #E3DFFF", borderRadius: 14, margin: "0 14px 10px", padding: "4px 14px" }}>
                      {[
                        { label: "Plan", value: selectedPlan === "yearly" ? "Annual — ₹10,000/year" : "Monthly — ₹1,000/month", highlight: false },
                        { label: "Previous plan expired", value: "April 3, 2026", highlight: false, amber: true },
                        { label: "Access starts", value: "Immediately · Today", highlight: true },
                        { label: "Today you pay", value: selectedPlan === "yearly" ? "₹10,000 + applicable tax" : "₹1,000 + applicable tax", highlight: true },
                        { label: "Next renewal", value: selectedPlan === "yearly" ? "April 3, 2027" : "May 10, 2026", highlight: false },
                        { label: "Account", value: "arjun@example.com", highlight: false },
                      ].map((row, i, arr) => (
                        <div
                          key={row.label}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "9px 0",
                            borderBottom: i < arr.length - 1 ? "0.5px solid #E3DFFF" : "none",
                          }}
                        >
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060" }}>{row.label}</span>
                          <span
                            style={{
                              fontFamily: "'Lato', sans-serif",
                              fontWeight: 600,
                              fontSize: 13,
                              color: (row as any).amber ? "#B45309" : row.highlight ? "#512DA8" : "#282828",
                            }}
                          >
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#9E9E9E", lineHeight: 1.5, margin: "0 14px 10px" }}>
                      Your membership is reactivated immediately upon payment. Applicable taxes as per Government norms. Cancel anytime via Settings — future renewals will not be charged.
                    </div>

                    <div style={{ padding: "0 14px 14px" }}>
                      <button
                        onClick={() => setSheetStep("success")}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          width: "100%",
                          height: 52,
                          background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                          color: "#fff",
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 800,
                          fontSize: 17,
                          border: "none",
                          borderRadius: 13,
                          cursor: "pointer",
                          boxShadow: "0 4px 14px rgba(81,45,168,0.3)",
                        }}
                      >
                        Pay &amp; Reactivate Now
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Success */}
                {sheetStep === "success" && activeCourse && (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 20px 32px" }}>
                    <div style={{ width: 72, height: 72, marginBottom: 14 }}>
                      <svg viewBox="0 0 72 72" width="72" height="72">
                        <circle fill="none" stroke="#E8F5E9" strokeWidth="6" cx="36" cy="36" r="31" />
                        <circle fill="none" stroke="#4CAF50" strokeWidth="6" strokeLinecap="round" cx="36" cy="36" r="31" strokeDasharray="195" strokeDashoffset="0" style={{ transformOrigin: "center", transform: "rotate(-90deg)" }} />
                        <path fill="none" stroke="#4CAF50" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="M21 36 L31 46 L51 26" />
                      </svg>
                    </div>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 21, color: "#282828", textAlign: "center", marginBottom: 4 }}>
                      Membership Reactivated!
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#606060", textAlign: "center", marginBottom: 18, padding: "0 16px", lineHeight: 1.4 }}>
                      Your premium access is back. All courses are unlocked and your progress is restored.
                    </div>

                    <div style={{ width: "100%", background: "#F7F6FF", border: "1px solid #E3DFFF", borderRadius: 14, padding: 14, display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                      <div style={{ width: 46, height: 46, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid #E3DFFF" }}>
                        <svg viewBox="0 0 60 60" width="46" height="46">
                          <circle cx="30" cy="30" r="30" fill={`#${activeCourse.color}`} />
                          <text x="30" y="38" fontSize="22" textAnchor="middle">{activeCourse.emoji}</text>
                        </svg>
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#282828" }}>{activeCourse.name}</div>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#E8F5E9", color: "#2E7D32", fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 20, marginTop: 4 }}>
                          <svg viewBox="0 0 24 24" width="10" height="10" fill="#2E7D32">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                          </svg>
                          Unlocked — Ready to continue
                        </div>
                      </div>
                    </div>

                    <div style={{ width: "100%" }}>
                      <button
                        onClick={closeSheet}
                        style={{
                          width: "100%",
                          height: 52,
                          background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                          color: "#fff",
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 800,
                          fontSize: 17,
                          border: "none",
                          borderRadius: 13,
                          cursor: "pointer",
                          boxShadow: "0 4px 14px rgba(81,45,168,0.3)",
                          marginBottom: 10,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 6,
                        }}
                      >
                        Continue Learning
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <button
                        onClick={closeSheet}
                        style={{
                          width: "100%",
                          height: 44,
                          background: "#F7F6FF",
                          border: "1.5px solid #E3DFFF",
                          color: "#512DA8",
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 15,
                          borderRadius: 13,
                          cursor: "pointer",
                        }}
                      >
                        Back to All Courses
                      </button>
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
