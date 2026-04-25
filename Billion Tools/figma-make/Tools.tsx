import { useState } from "react";

type ToolKey = "business-plan" | "roi";

interface ToolData {
  name: string;
  desc: string;
  icon: React.ReactNode;
}

const TOOLS: Record<ToolKey, ToolData> = {
  "business-plan": {
    name: "Business Plan Generator",
    desc: "Create a professional business plan in minutes",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#512DA8">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-2 8H7v-2h4v2zm2-4H7v-2h6v2zm1-6H7V9h7v2z" />
      </svg>
    ),
  },
  roi: {
    name: "ROI Calculator",
    desc: "Calculate return on investment for your projects",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#512DA8">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
      </svg>
    ),
  },
};

const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="#fff">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
  </svg>
);

const CrownBadge = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: "linear-gradient(135deg, #FFF8DC 0%, #FFF0A0 100%)",
      border: "1px solid #F5C842",
      color: "#7A5000",
      fontFamily: "'Lato', sans-serif",
      fontWeight: 700,
      fontSize: 10,
      padding: "3px 8px",
      borderRadius: 20,
      letterSpacing: "0.5px",
      whiteSpace: "nowrap",
    }}
  >
    <svg viewBox="0 0 24 24" width="9" height="9" fill="#7A5000">
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
    </svg>
    PREMIUM
  </span>
);

export default function Tools() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeTool, setActiveTool] = useState<ToolKey | null>(null);

  const openSheet = (key: ToolKey) => {
    setActiveTool(key);
    setSheetOpen(true);
  };

  const closeSheet = () => {
    setSheetOpen(false);
  };

  const tool = activeTool ? TOOLS[activeTool] : null;

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
          {/* ── Scroll Area ── */}
          <div
            className="scrollbar-hide"
            style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              paddingBottom: 108,
            }}
          >
            {/* ── Header ── */}
            <div
              style={{
                background: "#f7f6ff",
                paddingBottom: 24,
                flexShrink: 0,
              }}
            >
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
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  {/* WiFi */}
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="#000">
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                  </svg>
                  {/* Battery */}
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="#000">
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
                  padding: "8px 30px 0",
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
                  BillionTools
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
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
                  {/* Settings */}
                  <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96a7.26 7.26 0 0 0-1.62-.94l-.36-2.54A.484.484 0 0 0 14 2h-4c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.477.477 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h4c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Content ── */}
            <div
              style={{
                padding: "24px 30px 0",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              {/* Page Heading */}
              <div>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 25,
                    color: "#282828",
                  }}
                >
                  Business Tools
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    color: "#606060",
                    marginTop: 4,
                  }}
                >
                  Powerful tools to help you grow your business
                </div>
              </div>

              {/* ── Tool 1: EMI Calculator (Unlocked) ── */}
              <div
                style={{
                  borderRadius: 16,
                  border: "1.5px solid #E3DFFF",
                  padding: 16,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
                  background: "#fff",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#E3DFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="#512DA8">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25S13.24 11.25 12 11.25 9.75 10.24 9.75 9s1.01-2.25 2.25-2.25zM17 17H7v-.75c0-1.66 2.69-2.5 5-2.5s5 .84 5 2.5V17z" />
                  </svg>
                </div>
                {/* Body */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: 17,
                        color: "#282828",
                      }}
                    >
                      EMI Calculator
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        color: "#606060",
                        lineHeight: 1.4,
                      }}
                    >
                      Plan your loan repayments with ease using our EMI Calculator
                    </div>
                  </div>
                  <button
                    style={{
                      alignSelf: "flex-end",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "#4CAF50",
                      color: "#fff",
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      padding: "9px 18px",
                      borderRadius: 13,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="#fff">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Start
                  </button>
                </div>
              </div>

              {/* ── Tool 2: Business Plan Generator (Locked / Premium) ── */}
              <div
                onClick={() => openSheet("business-plan")}
                style={{
                  borderRadius: 16,
                  border: "1.5px solid #D5CFFF",
                  padding: 16,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
                  background: "#f9f8ff",
                  cursor: "pointer",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#F0F0F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="#9E9E9E">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-2 8H7v-2h4v2zm2-4H7v-2h6v2zm1-6H7V9h7v2z" />
                  </svg>
                </div>
                {/* Body */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 17,
                          color: "#282828",
                        }}
                      >
                        Business Plan Generator
                      </span>
                      <CrownBadge />
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        color: "#606060",
                        lineHeight: 1.4,
                      }}
                    >
                      Create a professional business plan in minutes
                    </div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); openSheet("business-plan"); }}
                    style={{
                      alignSelf: "flex-end",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                      color: "#fff",
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      padding: "9px 18px",
                      borderRadius: 13,
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 3px 10px rgba(81,45,168,0.3)",
                    }}
                  >
                    <LockIcon />
                    Unlock
                  </button>
                </div>
              </div>

              {/* ── Tool 3: ROI Calculator (Locked / Premium) ── */}
              <div
                onClick={() => openSheet("roi")}
                style={{
                  borderRadius: 16,
                  border: "1.5px solid #D5CFFF",
                  padding: 16,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
                  background: "#f9f8ff",
                  cursor: "pointer",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "#F0F0F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="#9E9E9E">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                  </svg>
                </div>
                {/* Body */}
                <div
                  style={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 17,
                          color: "#282828",
                        }}
                      >
                        ROI Calculator
                      </span>
                      <CrownBadge />
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        color: "#606060",
                        lineHeight: 1.4,
                      }}
                    >
                      Calculate return on investment for your projects
                    </div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); openSheet("roi"); }}
                    style={{
                      alignSelf: "flex-end",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                      color: "#fff",
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      padding: "9px 18px",
                      borderRadius: 13,
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 3px 10px rgba(81,45,168,0.3)",
                    }}
                  >
                    <LockIcon />
                    Unlock
                  </button>
                </div>
              </div>
            </div>
            {/* end content-pad */}
          </div>
          {/* end scroll-area */}

          {/* ── NavBar ── */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "#fff",
              borderTop: "0.5px solid #e0e0e0",
              boxShadow: "0px -1px 3px rgba(0,0,0,0.08)",
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "stretch", padding: "0 8px" }}>

              {/* Home */}
              <a
                href="#"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: "10px 0 8px",
                  textDecoration: "none",
                }}
              >
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="#606060" strokeWidth="1.5" fill="none">
                    <path d="M3 12L12 3l9 9" />
                    <path d="M9 21V12h6v9" />
                    <path d="M3 12v9h18v-9" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#606060" }}>Home</span>
              </a>

              {/* Courses */}
              <a
                href="#"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: "10px 0 8px",
                  textDecoration: "none",
                }}
              >
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="#606060" strokeWidth="1.5" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#606060" }}>Courses</span>
              </a>

              {/* Library */}
              <a
                href="#"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: "10px 0 8px",
                  textDecoration: "none",
                }}
              >
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="#606060" strokeWidth="1.5" fill="none">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#606060" }}>Library</span>
              </a>

              {/* Tools — active */}
              <a
                href="#"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  padding: "10px 0 8px",
                  textDecoration: "none",
                }}
              >
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#512DA8">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#512DA8" }}>Tools</span>
              </a>

            </div>
            {/* Footer copy */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                padding: "5px 0 8px",
                borderTop: "0.5px solid #f0f0f0",
              }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#606060">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#606060" }}>
                Billiont Tools 2025
              </span>
            </div>
          </div>

          {/* ── Premium Upsell Sheet ── */}
          {/* Overlay */}
          {sheetOpen && (
            <div
              onClick={closeSheet}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(40,40,40,0.5)",
                zIndex: 100,
                backdropFilter: "blur(3px)",
                WebkitBackdropFilter: "blur(3px)",
              }}
            />
          )}

          {/* Sheet */}
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
              boxShadow: "0 -4px 24px rgba(81,45,168,0.14)",
              overflow: "hidden",
              transform: sheetOpen ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.36s cubic-bezier(0.32, 0.72, 0, 1)",
            }}
          >
            {/* Handle */}
            <div
              style={{
                width: 36,
                height: 4,
                background: "#D0CAEA",
                borderRadius: 2,
                margin: "12px auto 0",
                flexShrink: 0,
              }}
            />

            {/* Sheet Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px 0",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: 19,
                  color: "#282828",
                }}
              >
                {tool ? `Unlock ${tool.name}` : "Unlock Premium Tool"}
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

            {/* Tool Preview Row */}
            {tool && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  margin: "16px 20px 0",
                  padding: 14,
                  background: "#f9f8ff",
                  borderRadius: 13,
                  border: "1px solid #E3DFFF",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#E3DFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {tool.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: "#282828",
                    }}
                  >
                    {tool.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 13,
                      color: "#606060",
                      marginTop: 2,
                    }}
                  >
                    {tool.desc}
                  </div>
                </div>
              </div>
            )}

            {/* Divider */}
            <div style={{ height: "0.5px", background: "#e8e8e8", margin: "18px 20px 0" }} />

            {/* Pricing */}
            <div style={{ padding: "16px 20px 0" }}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#606060",
                  letterSpacing: "0.6px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Annual Membership
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 4 }}>
                <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 19, color: "#282828" }}>₹</span>
                <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 25, color: "#282828" }}>6,999</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#606060" }}>&nbsp;/ year</span>
              </div>
              <span
                style={{
                  display: "inline-block",
                  background: "#E3DFFF",
                  color: "#512DA8",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 20,
                  marginTop: 4,
                }}
              >
                Save ₹5,000 &nbsp;·&nbsp; Just ₹583/month
              </span>
            </div>

            {/* Feature List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "14px 20px 0" }}>
              {[
                "All business tools unlocked",
                "200+ courses & daily reels",
                "Unlimited expert Q&A queries",
              ].map((feat) => (
                <div key={feat} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "#E3DFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="#512DA8">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#282828" }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              style={{
                margin: "18px 20px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "calc(100% - 40px)",
                height: 54,
                background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                color: "#fff",
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: 17,
                border: "none",
                borderRadius: 13,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(81,45,168,0.35)",
              }}
            >
              Get Premium Access
              <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
            </button>

            {/* Fine Print */}
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                color: "#606060",
                textAlign: "center",
                padding: "10px 20px 22px",
                lineHeight: 1.5,
              }}
            >
              Cancel anytime &nbsp;·&nbsp; Secure payment &nbsp;·&nbsp; Instant access
            </div>
          </div>
          {/* end sheet */}
        </div>
        {/* end screen */}
      </div>
      {/* end phone */}
    </div>
  );
}
