import { useState } from "react";

export default function SettingsPremium({ onManageMembership }: { onManageMembership?: () => void }) {
  const [soundOn, setSoundOn] = useState(true);
  const [notifOn, setNotifOn] = useState(true);
  const [premiumTheme, setPremiumTheme] = useState(true);

  // Reusable toggle switch
  function Toggle({ value, onChange }: { value: boolean; onChange: () => void }) {
    return (
      <div
        onClick={onChange}
        style={{
          position: "relative",
          display: "inline-block",
          width: 50,
          height: 29,
          flexShrink: 0,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: value ? "#512DA8" : "#ccc",
            borderRadius: 29,
            transition: "background 0.2s",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 23,
            height: 23,
            left: value ? 24 : 3,
            top: 3,
            background: "white",
            borderRadius: "50%",
            transition: "left 0.2s",
            boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
          }}
        />
      </div>
    );
  }

  // Settings row with chevron
  function SettingsRow({
    icon,
    title,
    subtitle,
    right,
  }: {
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    right?: React.ReactNode;
  }) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "13px 24px",
          cursor: "pointer",
        }}
      >
        <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>{title}</div>
          {subtitle && (
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 1 }}>{subtitle}</div>
          )}
        </div>
        {right !== undefined ? right : (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#606060">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        )}
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
          <div style={{ background: premiumTheme ? "#f7f6ff" : "#fff", flexShrink: 0 }}>
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

            {/* Header bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 30px 16px" }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 21, color: "#512DA8", letterSpacing: "-0.3px" }}>
                Billion<span style={{ color: "#F16623" }}>T</span>ools
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                {/* Search */}
                <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                {/* Language */}
                <div style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg viewBox="0 0 34 34" width="34" height="34">
                    <circle cx="17" cy="17" r="14" fill="#E3DFFF" />
                    <text x="17" y="22" fontFamily="serif" fontSize="13" fontWeight="700" fill="#512DA8" textAnchor="middle">அ</text>
                    <path d="M27 14 L30 17 L27 20" stroke="#512DA8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="30" y="22" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#512DA8" textAnchor="middle">A</text>
                  </svg>
                </div>
                {/* A icon */}
                <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                    <path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
                  </svg>
                </div>
                {/* Volume */}
                <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                  </svg>
                </div>
                {/* Settings (active) */}
                <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#512DA8">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96a7.26 7.26 0 0 0-1.62-.94l-.36-2.54A.484.484 0 0 0 14 2h-4c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.477.477 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h4c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="scrollbar-hide" style={{ flex: 1, overflowY: "auto", overflowX: "hidden", paddingBottom: 30 }}>

            {/* Back row */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "16px 24px 4px", cursor: "pointer", width: "fit-content" }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#282828">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Back</span>
            </div>

            {/* Page title */}
            <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 25, color: "#282828", padding: "6px 24px 12px" }}>
              Settings
            </div>

            {/* ── General Section ── */}
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, color: "#606060", padding: "6px 24px 4px", letterSpacing: "0.2px" }}>
              General
            </div>

            {/* Profile row */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 24px 14px", cursor: "pointer" }}>
              <div style={{ width: 54, height: 54, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <svg viewBox="0 0 54 54" width="54" height="54">
                  <circle cx="27" cy="27" r="27" fill="#c5bcf5" />
                  <ellipse cx="27" cy="18" rx="13" ry="14" fill="#3d2b1f" />
                  <circle cx="27" cy="23" r="11" fill="#e8c9a0" />
                  <rect x="21" y="33" width="12" height="8" rx="4" fill="#e8c9a0" />
                  <ellipse cx="27" cy="50" rx="16" ry="10" fill="#7c6bb5" />
                  <path d="M10 54 Q11 40 27 38 Q43 40 44 54Z" fill="#2e2060" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 17, color: "#282828" }}>Tanisha</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 2 }}>tanisha@example.com</div>
              </div>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#606060">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* ── Premium Membership Card ── */}
            <div
              onClick={onManageMembership}
              style={{
                margin: "14px 16px 6px",
                borderRadius: 18,
                overflow: "hidden",
                background: premiumTheme
                  ? "linear-gradient(140deg, #110535 0%, #3d1a8c 52%, #6b3ecf 100%)"
                  : "#fff",
                border: premiumTheme ? undefined : "1.5px solid #E8E4F4",
                padding: "16px 18px 0",
                position: "relative",
                cursor: "pointer",
                boxShadow: premiumTheme
                  ? "0 10px 40px rgba(81,45,168,0.55), 0 2px 8px rgba(0,0,0,0.25)"
                  : "0 2px 12px rgba(0,0,0,0.06)",
                transition: "background 0.35s, box-shadow 0.35s",
              }}
            >
              {/* Premium-only decorations */}
              {premiumTheme && <>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.045) 55%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: -50, right: -30, width: 170, height: 170, background: "radial-gradient(circle, rgba(180,120,255,0.22) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: -40, left: -20, width: 130, height: 130, background: "radial-gradient(circle, rgba(140,80,255,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: 16, right: 74, width: 3, height: 3, background: "rgba(255,255,255,0.38)", borderRadius: "50%", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: 32, right: 90, width: 2, height: 2, background: "rgba(255,255,255,0.22)", borderRadius: "50%", pointerEvents: "none" }} />
                <div style={{ position: "absolute", top: 24, right: 60, width: 2, height: 2, background: "rgba(255,255,255,0.28)", borderRadius: "50%", pointerEvents: "none" }} />
              </>}

              {/* Top row: badge + gold plan tag */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, position: "relative" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: premiumTheme ? "rgba(255,255,255,0.14)" : "#F3F0FF", border: premiumTheme ? "1px solid rgba(255,255,255,0.22)" : "1px solid #E0DAF8", borderRadius: 20, padding: "5px 13px", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: premiumTheme ? "#fff" : "#512DA8", letterSpacing: "0.4px" }}>
                  <span style={{ width: 7, height: 7, background: "#A3E635", borderRadius: "50%", flexShrink: 0, display: "inline-block" }} />
                  Premium Member
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 11, color: "#4A2800", background: "linear-gradient(135deg, #FFE57F 0%, #FFB300 100%)", padding: "4px 11px", borderRadius: 20, letterSpacing: "0.3px" }}>
                  ★ Yearly Plan
                </span>
              </div>

              {/* Date + Crown icon */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 13, position: "relative" }}>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: premiumTheme ? "rgba(255,255,255,0.5)" : "#888", marginBottom: 4, letterSpacing: "0.3px" }}>Active until</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 22, color: premiumTheme ? "#fff" : "#282828", letterSpacing: "-0.3px" }}>28 Dec 2026</div>
                </div>
                <div style={{ width: 44, height: 44, background: premiumTheme ? "rgba(255,255,255,0.09)" : "#F3F0FF", border: premiumTheme ? "1px solid rgba(255,255,255,0.16)" : "1px solid #E0DAF8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" width={22} height={22} fill={premiumTheme ? "#FFD54F" : "#512DA8"}>
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
              </div>

              {/* Progress bar */}
              <div style={{ height: 5, background: premiumTheme ? "rgba(255,255,255,0.14)" : "rgba(81,45,168,0.1)", borderRadius: 3, overflow: "hidden", marginBottom: 6, position: "relative" }}>
                <div style={{ height: "100%", background: premiumTheme ? "linear-gradient(90deg, rgba(190,150,255,0.75) 0%, rgba(255,255,255,0.92) 100%)" : "linear-gradient(90deg, #b9a0f7 0%, #7B52D4 100%)", borderRadius: 3, width: "82%" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: premiumTheme ? "rgba(255,255,255,0.38)" : "#BBB" }}>Started 10 Jan 2026</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: premiumTheme ? "rgba(255,255,255,0.58)" : "#512DA8", fontWeight: 600 }}>2 months remaining</span>
              </div>

              {/* Manage Membership row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 5, marginTop: 14, paddingTop: 12, paddingBottom: 14, borderTop: premiumTheme ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.07)", position: "relative" }}>
                <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 13, color: premiumTheme ? "rgba(255,255,255,0.9)" : "#512DA8" }}>
                  Manage Membership
                </span>
                <svg viewBox="0 0 24 24" width="15" height="15" fill={premiumTheme ? "rgba(255,255,255,0.9)" : "#512DA8"}>
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </div>
            </div>

            {/* Section divider */}
            <div style={{ height: 8, background: premiumTheme ? "#f7f6ff" : "#F5F5F5", margin: "4px 0" }} />

            {/* ── Quick Settings ── */}
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 400, color: "#606060", padding: "6px 24px 4px", letterSpacing: "0.2px" }}>
              Quick Settings
            </div>

            {/* Language */}
            <SettingsRow
              icon={
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              }
              title="Language Selection"
              subtitle="Tamil (Selected)"
            />

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* Font Size */}
            <SettingsRow
              icon={
                <svg viewBox="0 0 24 24" width="26" height="26" fill="#282828">
                  <text x="1" y="19" fontFamily="sans-serif" fontSize="11" fontWeight="700">A</text>
                  <text x="10" y="21" fontFamily="sans-serif" fontSize="16" fontWeight="700">A</text>
                </svg>
              }
              title="Font Size"
              subtitle="Small"
            />

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* Sound */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 24px", cursor: "pointer" }}>
              <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>Sound</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 1 }}>{soundOn ? "On" : "Off"}</div>
              </div>
              <Toggle value={soundOn} onChange={() => setSoundOn((v) => !v)} />
            </div>

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* Notification */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 24px", cursor: "pointer" }}>
              <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>Notification</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 1 }}>{notifOn ? "On" : "Off"}</div>
              </div>
              <Toggle value={notifOn} onChange={() => setNotifOn((v) => !v)} />
            </div>

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* Premium Theme toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 24px", cursor: "pointer" }}>
              <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill={premiumTheme ? "#512DA8" : "#282828"}>
                  <path d="M12 1L9.5 6.5 4 7.27l4 3.89-.94 5.5L12 14l4.94 2.66-.94-5.5 4-3.89-5.5-.77z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>Premium Theme</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 1 }}>
                  {premiumTheme ? "Enabled" : "Normal"}
                </div>
              </div>
              <Toggle value={premiumTheme} onChange={() => setPremiumTheme((v) => !v)} />
            </div>

            {/* Section divider */}
            <div style={{ height: 8, background: premiumTheme ? "#f7f6ff" : "#F5F5F5", margin: "4px 0" }} />

            {/* ── Program & Cohorts ── */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 24px" }}>
              <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 3 }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>Program &amp; Cohorts</div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 15, color: "#512DA8", marginTop: 3 }}>
                  New Journey Towards Growth
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 2 }}>
                  Cohorts 1: March 2025 – Madurai
                </div>
              </div>
            </div>

            {/* Section divider */}
            <div style={{ height: 8, background: premiumTheme ? "#f7f6ff" : "#F5F5F5", margin: "4px 0" }} />

            {/* ── Logout ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 24px", cursor: "pointer" }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#E53935">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
              </svg>
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#E53935" }}>Logout</span>
            </div>

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* ── Delete Account ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 24px", cursor: "pointer" }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>Delete Account</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}