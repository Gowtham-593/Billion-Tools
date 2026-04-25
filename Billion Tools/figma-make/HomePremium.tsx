import { useState } from "react";

export default function HomePremium() {
  const [memberState, setMemberState] = useState<"expiring" | "renewed">("expiring");

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
          {/* Scroll Area */}
          <div
            className="scrollbar-hide"
            style={{
              flex: 1,
              overflowY: "auto",
              overflowX: "hidden",
              paddingBottom: 108,
            }}
          >
            {/* Header */}
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
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="#000">
                    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                  </svg>
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
                    letterSpacing: -0.3,
                  }}
                >
                  BillionTools
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                  <div style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                      <path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
                    </svg>
                  </div>
                  <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                  </div>
                  <div style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96a7.26 7.26 0 0 0-1.62-.94l-.36-2.54A.484.484 0 0 0 14 2h-4c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.477.477 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h4c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Content */}
            <div
              style={{
                padding: "0 30px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                paddingTop: 0,
                marginTop: 0,
              }}
            >
              {/* Welcome Card */}
              <div
                style={{
                  background: "linear-gradient(145.64deg, #1E0F41 15.83%, #42238B 84.17%)",
                  borderRadius: 16,
                  padding: 16,
                  display: "flex",
                  gap: 8,
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 600,
                        fontSize: 21,
                        color: "#fff",
                      }}
                    >
                      Welcome,
                    </span>
                    <span style={{ fontSize: 20 }}>👋</span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 600,
                      fontSize: 21,
                      color: "#fff",
                    }}
                  >
                    Arjun
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#fff",
                    }}
                  >
                    Poornatha Partnering Entrepreneurs Private Limited
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    alignSelf: "stretch",
                    flexShrink: 0,
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      width: 49,
                      height: 50,
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: "#E3DFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#512DA8",
                    }}
                  >
                    A
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        background: "linear-gradient(135deg,#f9d764,#f4a600)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 13,
                      }}
                    >
                      ⭐
                    </div>
                    <span
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 600,
                        fontSize: 21,
                        color: "#fff",
                      }}
                    >
                      5568
                    </span>
                  </div>
                </div>
              </div>

              {/* Membership Widget — togglable */}
              {memberState === "expiring" ? (
                <div
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                    position: "relative",
                    overflow: "hidden",
                    background: "#FFFBEB",
                    border: "1.5px solid #FCD34D",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: "#EDE7F6",
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#512DA8">
                      <path d="M5 16L3 5l5.5 5L12 2l3.5 8L21 5l-2 11H5zm0 3a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2H5z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#512DA8" }}>
                        Premium Member
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          background: "#EDE7F6",
                          color: "#512DA8",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          fontWeight: 500,
                          padding: "2px 8px",
                          borderRadius: 20,
                        }}
                      >
                        Yearly
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="#B45309">
                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                      </svg>
                      <span
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 13,
                          color: "#B45309",
                        }}
                      >
                        Expires in 1 month
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        color: "#78716C",
                        lineHeight: 1.4,
                      }}
                    >
                      Renew to keep access to all premium features
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                    <button
                      onClick={() => setMemberState("renewed")}
                      style={{
                        display: "inline-block",
                        background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                        color: "#fff",
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 700,
                        fontSize: 12,
                        textAlign: "center",
                        padding: "8px 14px",
                        borderRadius: 10,
                        border: "none",
                        whiteSpace: "nowrap",
                        cursor: "pointer",
                      }}
                    >
                      Renew Now
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    padding: "14px 16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                    position: "relative",
                    overflow: "hidden",
                    background: "#F0FDF4",
                    border: "1.5px solid #86EFAC",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      background: "#DCFCE7",
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#15803D">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#512DA8" }}>
                        Premium Member
                      </span>
                      <span
                        style={{
                          display: "inline-block",
                          background: "#DCFCE7",
                          color: "#15803D",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          fontWeight: 500,
                          padding: "2px 8px",
                          borderRadius: 20,
                        }}
                      >
                        Yearly
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="#15803D">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 13,
                          color: "#15803D",
                        }}
                      >
                        Plan Renewed!
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        color: "#3F3F46",
                        lineHeight: 1.4,
                      }}
                    >
                      Active until 28 Dec 2027
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                    <button
                      onClick={() => setMemberState("expiring")}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 12,
                        color: "#512DA8",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      View →
                    </button>
                  </div>
                </div>
              )}

              {/* Divider */}
              <div style={{ height: 0.5, background: "#d6d6d6" }} />

              {/* Quote Card */}
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 16,
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.25)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 300,
                    borderRadius: 16,
                    background: "linear-gradient(135deg,#E3DFFF 0%,#c5bcf5 100%)",
                    position: "relative",
                    overflow: "visible",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg viewBox="0 0 320 260" width="290" height="235">
                    <ellipse cx="100" cy="120" rx="55" ry="65" fill="#c5bcf5" />
                    <ellipse cx="220" cy="120" rx="55" ry="65" fill="#b0a6ef" />
                    <circle cx="100" cy="80" r="26" fill="#e8d5c4" />
                    <circle cx="220" cy="80" r="26" fill="#d4bfa8" />
                    <circle cx="160" cy="42" r="18" fill="#f9d764" opacity="0.9" />
                    <rect x="154" y="58" width="12" height="8" rx="2" fill="#e8b800" />
                    <circle cx="126" cy="55" r="5" fill="#E3DFFF" opacity="0.8" />
                    <circle cx="138" cy="46" r="4" fill="#E3DFFF" opacity="0.7" />
                    <circle cx="194" cy="55" r="5" fill="#E3DFFF" opacity="0.8" />
                    <circle cx="182" cy="46" r="4" fill="#E3DFFF" opacity="0.7" />
                    <path d="M72 148 Q60 165 50 175" stroke="#e8d5c4" strokeWidth="10" strokeLinecap="round" fill="none" />
                    <path d="M128 148 Q140 165 150 175" stroke="#e8d5c4" strokeWidth="10" strokeLinecap="round" fill="none" />
                    <path d="M192 148 Q180 165 170 175" stroke="#d4bfa8" strokeWidth="10" strokeLinecap="round" fill="none" />
                    <path d="M248 148 Q260 165 270 175" stroke="#d4bfa8" strokeWidth="10" strokeLinecap="round" fill="none" />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      bottom: -25,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 50,
                      height: 50,
                      background: "#fff",
                      borderRadius: 25,
                      boxShadow: "0px 4px 8px rgba(0,0,0,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 2,
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="#512DA8">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 16,
                    paddingTop: 10,
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 600,
                      fontSize: 21,
                      color: "#282828",
                      textAlign: "center",
                    }}
                  >
                    Horses Don't Run at the Same Speed
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
                    <button
                      style={{
                        background: "#512DA8",
                        color: "#fff",
                        border: "none",
                        borderRadius: 13,
                        padding: 12,
                        width: "100%",
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 600,
                        fontSize: 17,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                      }}
                    >
                      Read More
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </button>
                    <button
                      style={{
                        background: "#fff",
                        color: "#512DA8",
                        border: "1px solid #512DA8",
                        borderRadius: 13,
                        padding: 12,
                        width: "100%",
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 600,
                        fontSize: 17,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                      }}
                    >
                      Thoughts History
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="#512DA8">
                        <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Continue Learning Card */}
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  style={{
                    height: 170,
                    background: "linear-gradient(135deg,#E3DFFF 0%,#beb3f0 100%)",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <svg viewBox="0 0 340 170" width="100%">
                    <rect x="0" y="0" width="340" height="170" fill="#c5bcf5" />
                    <rect x="60" y="20" width="220" height="130" rx="10" fill="#fff" opacity="0.9" />
                    <rect x="68" y="28" width="204" height="106" rx="6" fill="#E3DFFF" />
                    <circle cx="170" cy="81" r="24" fill="#512DA8" opacity="0.9" />
                    <polygon points="163,72 163,90 182,81" fill="#fff" />
                    <rect x="150" y="150" width="40" height="8" rx="4" fill="#a09be0" />
                    <rect x="130" y="158" width="80" height="6" rx="3" fill="#a09be0" />
                    <circle cx="285" cy="80" r="16" fill="#e8c9a0" />
                    <rect x="272" y="96" width="26" height="30" rx="8" fill="#9c8de6" />
                  </svg>
                  <div
                    style={{
                      position: "absolute",
                      right: 16,
                      bottom: 12,
                      background: "#606060",
                      color: "#fff",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 16,
                      padding: "4px 8px",
                      borderRadius: 6,
                    }}
                  >
                    Video
                  </div>
                </div>
                <div
                  style={{
                    background: "#fff",
                    padding: 16,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 600,
                        fontSize: 21,
                        color: "#282828",
                      }}
                    >
                      Elevator Pitch
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        color: "#606060",
                      }}
                    >
                      Section 1 of 6
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div
                        style={{
                          flex: 1,
                          height: 4,
                          background: "#CECECE",
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: "75.58%",
                            background: "linear-gradient(178.95deg, #512DA8 18.42%, #926AF3 100%)",
                            borderRadius: 2,
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 16,
                          color: "#606060",
                          whiteSpace: "nowrap",
                        }}
                      >
                        75%
                      </span>
                    </div>
                  </div>
                  <button
                    style={{
                      background: "#4CAF50",
                      color: "#fff",
                      border: "none",
                      borderRadius: 13,
                      padding: 12,
                      width: "100%",
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 600,
                      fontSize: 17,
                      cursor: "pointer",
                    }}
                  >
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>

            {/* Suggested Reels Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginTop: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 30px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 600,
                    fontSize: 21,
                    color: "#282828",
                  }}
                >
                  Suggested reels
                </span>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 4,
                    display: "flex",
                    alignItems: "center",
                    color: "#606060",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#606060">
                    <circle cx="12" cy="5" r="1.8" />
                    <circle cx="12" cy="12" r="1.8" />
                    <circle cx="12" cy="19" r="1.8" />
                  </svg>
                </button>
              </div>

              {/* Reels Horizontal Scroll */}
              <div
                className="scrollbar-hide"
                style={{
                  display: "flex",
                  gap: 12,
                  overflowX: "auto",
                  padding: "4px 30px 6px",
                }}
              >
                {/* Reel 1 */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 185,
                    height: 280,
                    borderRadius: 16,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(165deg, #7c5cbf 0%, #3a1f7a 60%, #1e0f41 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.25,
                    }}
                  >
                    <svg viewBox="0 0 48 48" width="52" height="52">
                      <circle cx="24" cy="24" r="24" fill="#fff" />
                      <polygon points="19,16 19,32 36,24" fill="#512DA8" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "28px 10px 10px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                      zIndex: 1,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        color: "#fff",
                        lineHeight: 1.35,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Leadership Mindset for Entrepreneurs
                    </p>
                  </div>
                </div>

                {/* Reel 2 */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 185,
                    height: 280,
                    borderRadius: 16,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(165deg, #5c4aaa 0%, #2e1876 60%, #180c3a 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.25,
                    }}
                  >
                    <svg viewBox="0 0 48 48" width="52" height="52">
                      <circle cx="24" cy="24" r="24" fill="#fff" />
                      <polygon points="19,16 19,32 36,24" fill="#512DA8" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "28px 10px 10px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                      zIndex: 1,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        color: "#fff",
                        lineHeight: 1.35,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      5 Ways to Scale Your Business
                    </p>
                  </div>
                </div>

                {/* Reel 3 */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 185,
                    height: 280,
                    borderRadius: 16,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(165deg, #8a69ce 0%, #4a2d96 60%, #261160 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.25,
                    }}
                  >
                    <svg viewBox="0 0 48 48" width="52" height="52">
                      <circle cx="24" cy="24" r="24" fill="#fff" />
                      <polygon points="19,16 19,32 36,24" fill="#512DA8" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "28px 10px 10px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                      zIndex: 1,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        color: "#fff",
                        lineHeight: 1.35,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Building Your Personal Brand
                    </p>
                  </div>
                </div>

                {/* Reel 4 */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 185,
                    height: 280,
                    borderRadius: 16,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(165deg, #6b4fc0 0%, #35208a 60%, #1c0e4a 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.25,
                    }}
                  >
                    <svg viewBox="0 0 48 48" width="52" height="52">
                      <circle cx="24" cy="24" r="24" fill="#fff" />
                      <polygon points="19,16 19,32 36,24" fill="#512DA8" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "28px 10px 10px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                      zIndex: 1,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        color: "#fff",
                        lineHeight: 1.35,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Women in Business: Success Stories
                    </p>
                  </div>
                </div>

                {/* Reel 5 */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 185,
                    height: 280,
                    borderRadius: 16,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(165deg, #9578d8 0%, #5236a0 60%, #2a176a 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.25,
                    }}
                  >
                    <svg viewBox="0 0 48 48" width="52" height="52">
                      <circle cx="24" cy="24" r="24" fill="#fff" />
                      <polygon points="19,16 19,32 36,24" fill="#512DA8" />
                    </svg>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "28px 10px 10px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                      zIndex: 1,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        fontSize: 12,
                        color: "#fff",
                        lineHeight: 1.35,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      Team Collaboration Strategies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Content */}
            <div
              style={{
                padding: "0 30px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                marginTop: 24,
              }}
            >
              {/* Divider */}
              <div style={{ height: 0.5, background: "#d6d6d6" }} />

              {/* Ask a Query Card */}
              <div
                style={{
                  background: "#E3DFFF",
                  borderRadius: 16,
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.25)",
                }}
              >
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      flexShrink: 0,
                      background: "#512DA8",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 500,
                        fontSize: 17,
                        color: "#282828",
                      }}
                    >
                      Ask a Query
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        color: "#606060",
                      }}
                    >
                      Have questions or feedback? Let us know!
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    background: "#512DA8",
                    color: "#fff",
                    border: "none",
                    borderRadius: 13,
                    padding: 12,
                    width: "100%",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 600,
                    fontSize: 17,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                  Send Query
                </button>
              </div>

              {/* Divider */}
              <div style={{ height: 0.5, background: "#d6d6d6" }} />

              {/* Profile Status Card */}
              <div
                style={{
                  borderRadius: 16,
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 16,
                  minHeight: 354,
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.25)",
                  background: "linear-gradient(134.80deg, #512DA8 18.42%, #926AF3 100%)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        background: "#fff",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="#512DA8">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 600,
                        fontSize: 21,
                        color: "#fff",
                        flex: 1,
                      }}
                    >
                      Profile Status
                    </span>
                  </div>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 8,
                      padding: "16px 8px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 16,
                        color: "#512DA8",
                        marginBottom: 16,
                      }}
                    >
                      90% Completed
                    </div>
                    <div
                      style={{
                        height: 8,
                        background: "#E5E5E4",
                        borderRadius: 4,
                        overflow: "hidden",
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "85.53%",
                          background: "#8AD143",
                          borderRadius: 4,
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="#4CAF50">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>
                          Personal Information
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="#4CAF50">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>
                          Company Information
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <svg viewBox="0 0 24 24" width="24" height="24">
                          <circle cx="12" cy="12" r="10" stroke="#606060" strokeWidth="2" fill="none" />
                        </svg>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>
                          Profile Picture
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    background: "#fff",
                    color: "#512DA8",
                    border: "1px solid #512DA8",
                    borderRadius: 13,
                    padding: 12,
                    width: "100%",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 600,
                    fontSize: 17,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  Complete Profile
                </button>
              </div>
            </div>
          </div>

          {/* NavBar */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "#fff",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                borderTop: "1px solid #E3DFFF",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.25)",
                padding: "8px 30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "3px 0",
                }}
              >
                {/* Home - active */}
                <a
                  href="#"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    cursor: "pointer",
                    minWidth: 45,
                    textDecoration: "none",
                  }}
                >
                  <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="#512DA8">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#512DA8" }}>Home</span>
                </a>

                {/* Reels */}
                <a
                  href="#"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    cursor: "pointer",
                    minWidth: 45,
                    textDecoration: "none",
                  }}
                >
                  <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="#282828">
                      <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Reels</span>
                </a>

                {/* Courses */}
                <a
                  href="#"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    cursor: "pointer",
                    minWidth: 45,
                    textDecoration: "none",
                  }}
                >
                  <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="#282828" strokeWidth="1.5" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Courses</span>
                </a>

                {/* Library */}
                <a
                  href="#"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    cursor: "pointer",
                    minWidth: 45,
                    textDecoration: "none",
                  }}
                >
                  <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="#282828" strokeWidth="1.5" fill="none">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Library</span>
                </a>

                {/* Tools */}
                <a
                  href="#"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    cursor: "pointer",
                    minWidth: 45,
                    textDecoration: "none",
                  }}
                >
                  <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" stroke="#282828" strokeWidth="1.5" fill="none">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Tools</span>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                padding: "4px 30px",
                height: 25,
                background: "#fff",
              }}
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#282828">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
              </svg>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 9, color: "#282828" }}>Billiont Tools 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
