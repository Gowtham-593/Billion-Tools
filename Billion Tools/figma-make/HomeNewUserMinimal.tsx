export default function HomeNewUserMinimal() {
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
                  <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                  <div style={{ width: 34, height: 34, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                      <path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
                    </svg>
                  </div>
                  <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96a7.26 7.26 0 0 0-1.62-.94l-.36-2.54A.484.484 0 0 0 14 2h-4c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.477.477 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h4c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
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
                      fontSize: 16,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    Poornatha Partnering Entrepreneurs Private Limited
                  </div>
                </div>
                {/* Avatar */}
                <div
                  style={{
                    width: 49,
                    height: 50,
                    borderRadius: "50%",
                    background: "#E3DFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#512DA8",
                    flexShrink: 0,
                  }}
                >
                  A
                </div>
              </div>

              {/* Membership Prompt */}
              <div
                style={{
                  background: "#f7f6ff",
                  border: "1.5px solid #E3DFFF",
                  borderRadius: 16,
                  padding: 16,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: "0px 1px 3px rgba(0,0,0,0.06)",
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
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#512DA8">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: "#282828",
                    }}
                  >
                    Get Full Access
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: "#606060",
                    }}
                  >
                    Unlock all courses, reels and tools
                  </div>
                </div>
                <button
                  style={{
                    background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                    color: "#fff",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    padding: "9px 16px",
                    borderRadius: 13,
                    border: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  View Plans
                </button>
              </div>

              {/* Divider */}
              <div style={{ height: 0.5, background: "#d6d6d6" }} />

              {/* What's Included */}
              <div
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 600,
                  fontSize: 21,
                  color: "#282828",
                }}
              >
                What's included
              </div>

              {/* Benefit List */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {/* Benefit: Courses */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "0 0 16px",
                    borderBottom: "0.5px solid #e8e8e8",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "#E3DFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#512DA8">
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 500, fontSize: 17, color: "#282828" }}>
                      200+ Courses
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", lineHeight: 1.45 }}>
                      Deep-dive programs on sales, leadership, finance, and operations — built for entrepreneurs.
                    </div>
                  </div>
                </div>

                {/* Benefit: Reels */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "16px 0",
                    borderBottom: "0.5px solid #e8e8e8",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "#E3DFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#512DA8">
                      <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 500, fontSize: 17, color: "#282828" }}>
                      Daily Business Reels
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", lineHeight: 1.45 }}>
                      Bite-sized video lessons from founders — learn something new in 60 seconds, every day.
                    </div>
                  </div>
                </div>

                {/* Benefit: Tools */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "16px 0",
                    borderBottom: "0.5px solid #e8e8e8",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "#E3DFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#512DA8">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 500, fontSize: 17, color: "#282828" }}>
                      Business Tools
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", lineHeight: 1.45 }}>
                      Templates, calculators, and pitch frameworks ready to use — save hours of prep work.
                    </div>
                  </div>
                </div>

                {/* Benefit: Ask an Expert */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    paddingTop: 16,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "#E3DFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#512DA8">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 500, fontSize: 17, color: "#282828" }}>
                      Ask an Expert
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", lineHeight: 1.45 }}>
                      Submit business questions and get answers from experienced mentors and founders.
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: 0.5, background: "#d6d6d6" }} />

              {/* Pricing Card */}
              <div
                style={{
                  borderRadius: 16,
                  border: "1.5px solid #E3DFFF",
                  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "20px 20px 16px",
                    borderBottom: "0.5px solid #E3DFFF",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span
                      style={{
                        fontFamily: "'Lato', sans-serif",
                        fontWeight: 600,
                        fontSize: 21,
                        color: "#282828",
                      }}
                    >
                      Annual Membership
                    </span>
                    <span
                      style={{
                        background: "#E3DFFF",
                        color: "#512DA8",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        fontWeight: 500,
                        padding: "4px 10px",
                        borderRadius: 20,
                        letterSpacing: 0.4,
                      }}
                    >
                      Best Value
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 19, color: "#282828" }}>₹</span>
                    <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 25, color: "#282828" }}>6,999</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#606060" }}>&nbsp;/ year</span>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060" }}>
                    Just ₹583 per month &nbsp;·&nbsp; Save ₹5,000 vs monthly
                  </span>
                </div>
                <div
                  style={{
                    padding: "16px 20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <button
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
                      fontWeight: 700,
                      fontSize: 17,
                      border: "none",
                      borderRadius: 13,
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(81,45,168,0.3)",
                    }}
                  >
                    Start My Membership
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </button>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: "#606060",
                      textAlign: "center",
                    }}
                  >
                    Cancel anytime &nbsp;·&nbsp; Secure payment &nbsp;·&nbsp; Instant access
                  </div>
                </div>
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
              borderTop: "0.5px solid #e0e0e0",
              boxShadow: "0px -1px 3px rgba(0,0,0,0.08)",
              zIndex: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "stretch", padding: "0 8px" }}>
              {/* Home - active */}
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
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#512DA8" }}>Home</span>
              </a>

              {/* Reels */}
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
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#606060">
                    <path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#606060" }}>Reels</span>
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

              {/* Tools */}
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
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#606060" }}>Tools</span>
              </a>
            </div>

            {/* Copyright */}
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
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#606060" }}>Billiont Tools 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
