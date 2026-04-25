import { useState } from "react";

export default function Settings() {
  const [sound, setSound] = useState(true);
  const [notification, setNotification] = useState(true);

  return (
    <div
      style={{
        background: "#e8e8e8",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "32px 0 48px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Phone Shell */}
      <div
        style={{
          width: 480,
          height: 1013,
          background: "#ffffff",
          borderRadius: 40,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
          border: "1.5px solid #282828",
        }}
      >
        {/* Screen */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* ── Header ── */}
          <div style={{ background: "#f7f6ff", flexShrink: 0 }}>
            {/* Status Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 26px 4px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#000",
                }}
              >
                9:41
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                {/* Signal */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
                  <rect x="1" y="15" width="3" height="6" rx="1" />
                  <rect x="6" y="11" width="3" height="10" rx="1" />
                  <rect x="11" y="7" width="3" height="14" rx="1" />
                  <rect x="16" y="3" width="3" height="18" rx="1" opacity="0.3" />
                </svg>
                {/* WiFi */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </svg>
                {/* Battery */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
                  <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
                </svg>
              </div>
            </div>

            {/* Header Bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 30px 16px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 800,
                  fontSize: 21,
                  color: "#512DA8",
                  letterSpacing: "-0.3px",
                }}
              >
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
                {/* Font Size */}
                <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                    <path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
                  </svg>
                </div>
                {/* Sound */}
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

          {/* ── Scroll Area ── */}
          <div
            className="scrollbar-hide"
            style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              paddingBottom: 30,
            }}
          >
            {/* Back Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "16px 24px 4px",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#282828">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>
                Back
              </span>
            </div>

            {/* Page Title */}
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: 25,
                color: "#282828",
                padding: "6px 24px 12px",
              }}
            >
              Settings
            </div>

            {/* ── General Section ── */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: "#606060",
                padding: "6px 24px 4px",
                letterSpacing: "0.2px",
              }}
            >
              General
            </div>

            {/* Profile Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "12px 24px 14px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
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
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#282828",
                  }}
                >
                  Tanisha
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "#606060",
                    marginTop: 2,
                  }}
                >
                  tanisha@example.com
                </div>
              </div>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#606060">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>

            {/* Divider */}
            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* ── Go Premium Card ── */}
            <div
              style={{
                margin: "14px 16px 6px",
                borderRadius: 16,
                overflow: "hidden",
                background: "#fff",
                border: "1px solid #E2C84E",
                cursor: "pointer",
                boxShadow: "0 2px 16px rgba(168,128,0,0.13)",
              }}
            >
              {/* Warm cream-gold header zone */}
              <div style={{ background: "linear-gradient(135deg, #FFFEF5 0%, #FEF6D0 100%)", padding: "14px 16px 14px", borderBottom: "1px solid #EDD875" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#FDE68A", borderRadius: 6, padding: "3px 9px", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 10, color: "#7A5200", letterSpacing: "0.7px", textTransform: "uppercase" }}>
                      Free Plan
                    </span>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 17, color: "#1C1200", marginTop: 7, letterSpacing: "-0.2px", lineHeight: 1.2 }}>
                      Grow faster with Premium
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#806010", marginTop: 3 }}>
                      From <strong style={{ color: "#1C1200" }}>₹1,000/mo</strong>&ensp;·&ensp;Save 17% on yearly
                    </div>
                  </div>
                  {/* Crown icon tile — dark amber */}
                  <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, #A07800 0%, #7A5200 100%)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 3px 10px rgba(120,90,0,0.32)" }}>
                    <svg viewBox="0 0 24 24" width={22} height={22} fill="#FEF3C7">
                      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Benefits grid — white body */}
              <div style={{ padding: "12px 16px 14px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 8px" }}>
                {[
                  "Unlimited premium courses",
                  "New content added weekly",
                  "Learn anytime, at your pace",
                  "All business tools & templates",
                  "Unlimited expert Q&A",
                  "Cancel anytime",
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                    <svg viewBox="0 0 24 24" width={14} height={14} fill="#A07800" style={{ flexShrink: 0, marginTop: 1 }}>
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#3A2C00", lineHeight: 1.35 }}>{b}</span>
                  </div>
                ))}
              </div>

              {/* CTA row — dark amber button */}
              <div style={{ padding: "0 16px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, height: 44, background: "linear-gradient(135deg, #A07800 0%, #7A5200 100%)", color: "#FEF3C7", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, borderRadius: 11, cursor: "pointer", boxShadow: "0 4px 14px rgba(120,90,0,0.28)" }}>
                  Upgrade to Premium
                  <svg viewBox="0 0 24 24" width={15} height={15} fill="#FEF3C7">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Section Divider */}
            <div style={{ height: 8, background: "#f7f6ff", margin: "4px 0" }} />

            {/* ── Quick Settings Section ── */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: "#606060",
                padding: "6px 24px 4px",
                letterSpacing: "0.2px",
              }}
            >
              Quick Settings
            </div>

            {/* Language Row */}
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
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>
                  Language Selection
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 1 }}>
                  Tamil (Selected)
                </div>
              </div>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#606060">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* Font Size Row */}
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
                <svg viewBox="0 0 24 24" width="26" height="26" fill="#282828">
                  <text x="1" y="19" fontFamily="sans-serif" fontSize="11" fontWeight="700">A</text>
                  <text x="10" y="21" fontFamily="sans-serif" fontSize="16" fontWeight="700">A</text>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>
                  Font Size
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 1 }}>
                  Small
                </div>
              </div>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#606060">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </div>

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* Sound Row */}
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
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>
                  Sound
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 1 }}>
                  {sound ? "On" : "Off"}
                </div>
              </div>
              {/* Toggle */}
              <div
                onClick={() => setSound(!sound)}
                style={{
                  position: "relative",
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
                    background: sound ? "#512DA8" : "#ccc",
                    borderRadius: 29,
                    transition: "background 0.2s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: 23,
                    height: 23,
                    left: sound ? "auto" : 3,
                    right: sound ? 3 : "auto",
                    top: 3,
                    background: "white",
                    borderRadius: "50%",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                    transition: "left 0.2s, right 0.2s",
                  }}
                />
              </div>
            </div>

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* Notification Row */}
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
                <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>
                  Notification
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", marginTop: 1 }}>
                  {notification ? "On" : "Off"}
                </div>
              </div>
              {/* Toggle */}
              <div
                onClick={() => setNotification(!notification)}
                style={{
                  position: "relative",
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
                    background: notification ? "#512DA8" : "#ccc",
                    borderRadius: 29,
                    transition: "background 0.2s",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    width: 23,
                    height: 23,
                    left: notification ? "auto" : 3,
                    right: notification ? 3 : "auto",
                    top: 3,
                    background: "white",
                    borderRadius: "50%",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                    transition: "left 0.2s, right 0.2s",
                  }}
                />
              </div>
            </div>

            {/* Section Divider */}
            <div style={{ height: 8, background: "#f7f6ff", margin: "4px 0" }} />

            {/* ── Program & Cohorts ── */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "14px 24px",
              }}
            >
              <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 3 }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>
                  Program &amp; Cohorts
                </div>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    color: "#512DA8",
                    marginTop: 3,
                  }}
                >
                  New Journey Towards Growth
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "#606060",
                    marginTop: 2,
                  }}
                >
                  Cohorts 1: March 2025 – Madurai
                </div>
              </div>
            </div>

            {/* Section Divider */}
            <div style={{ height: 8, background: "#f7f6ff", margin: "4px 0" }} />

            {/* ── Logout ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 24px",
                cursor: "pointer",
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#E53935">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
              </svg>
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                  color: "#E53935",
                }}
              >
                Logout
              </span>
            </div>

            <div style={{ height: "0.5px", background: "#E5E5EA", margin: "0 24px" }} />

            {/* ── Delete Account ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: "14px 24px",
                cursor: "pointer",
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                  color: "#282828",
                }}
              >
                Delete Account
              </span>
            </div>
          </div>
          {/* end scroll area */}
        </div>
        {/* end screen */}
      </div>
      {/* end phone */}
    </div>
  );
}
