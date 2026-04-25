import { useState } from "react";

const CATEGORIES = ["All", "Leadership", "Marketing", "Finance", "Operations", "Sales"];

const COURSES_FREE = [
  {
    id: "tasks-people",
    title: "Tasks vs People — Leading & Managing",
    desc: "Learn leadership styles to manage people and tasks effectively",
    sections: "3 Sections",
    duration: "4h 20m",
    progress: 65,
    bgColor: "#C5B358",
    emoji: "⚖️",
    status: "Ongoing" as const,
  },
  {
    id: "build-team",
    title: "Build a Great Team",
    desc: "Master people assessment and build high performing teams",
    sections: "1 Section",
    duration: "2h 10m",
    progress: 30,
    bgColor: "#2E5E6E",
    emoji: "🤝",
    status: "Ongoing" as const,
  },
];

const COURSES_PREMIUM = [
  {
    id: "marketing",
    title: "Marketing 101",
    desc: "Build a strong marketing strategy to grow revenue in a buyer's market",
    sections: "1 Section",
    duration: "1h 45m",
    bgColor: "#2E6E4E",
    emoji: "📈",
  },
  {
    id: "finance",
    title: "Finance Fundamentals for SMEs",
    desc: "Understand cash flow, margins, and financial decisions that scale your business",
    sections: "2 Sections",
    duration: "3h 00m",
    bgColor: "#5E3A2E",
    emoji: "💰",
  },
  {
    id: "operations",
    title: "Operations That Scale",
    desc: "Design processes, reduce waste, and build systems that run without you",
    sections: "3 Sections",
    duration: "5h 30m",
    bgColor: "#1A3A5E",
    emoji: "⚙️",
  },
];

// ── Shared icon components ─────────────────────────────────────
const SignalIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
    <rect x="1" y="15" width="3" height="6" rx="1" />
    <rect x="6" y="11" width="3" height="10" rx="1" />
    <rect x="11" y="7" width="3" height="14" rx="1" />
    <rect x="16" y="3" width="3" height="18" rx="1" opacity="0.3" />
  </svg>
);
const WifiIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </svg>
);
const BatteryIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#000">
    <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z" />
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="#7B52D4">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
  </svg>
);
const PlayIcon = ({ size = 16, color = "#fff" }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M8 5v14l11-7z" />
  </svg>
);
const ChevronRight = ({ color = "#512DA8", size = 13 }: { color?: string; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);
const ClockIcon = ({ color = "#9E9E9E" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill={color}>
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
  </svg>
);
const SectionIcon = ({ color = "#512DA8" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill={color}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
  </svg>
);
const CrownIcon = () => (
  <svg viewBox="0 0 24 24" width="9" height="9" fill="#512DA8">
    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
  </svg>
);

// ── Course thumb ──────────────────────────────────────────────
function CourseThumb({
  bgColor,
  emoji,
  size = 58,
  opacity = 1,
}: {
  bgColor: string;
  emoji: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 14,
        overflow: "hidden",
        flexShrink: 0,
        border: "1.5px solid #F0EDFF",
        opacity,
      }}
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
        <rect width={size} height={size} rx="14" fill={bgColor} />
        <text
          x={size / 2}
          y={size / 2 + 8}
          fontSize={size * 0.45}
          textAnchor="middle"
        >
          {emoji}
        </text>
      </svg>
    </div>
  );
}

// ── Free course card ───────────────────────────────────────────
function FreeCourseCard({
  course,
}: {
  course: (typeof COURSES_FREE)[number];
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #EBEBEB",
        borderRadius: 16,
        margin: "0 16px 12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "14px 14px 13px" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
            marginBottom: 10,
          }}
        >
          <CourseThumb bgColor={course.bgColor} emoji={course.emoji} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#282828",
                lineHeight: 1.25,
                marginBottom: 4,
              }}
            >
              {course.title}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#606060",
                lineHeight: 1.4,
              }}
            >
              {course.desc}
            </div>
          </div>
          {/* Info icon */}
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              border: "1px solid #E5E5EA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="#606060">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
          </div>
        </div>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#606060",
              }}
            >
              <SectionIcon />
              {course.sections}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#606060",
              }}
            >
              <ClockIcon />
              {course.duration}
            </div>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              background: "#FEF3C7",
              color: "#D97706",
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 20,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "#D97706",
              }}
            />
            Ongoing
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ marginBottom: 10 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                color: "#9E9E9E",
              }}
            >
              Progress
            </span>
            <span
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: 12,
                color: "#512DA8",
              }}
            >
              {course.progress}%
            </span>
          </div>
          <div
            style={{
              height: 4,
              background: "#F0EDFF",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${course.progress}%`,
                borderRadius: 2,
                background: "linear-gradient(90deg, #512DA8, #7B52D4)",
              }}
            />
          </div>
        </div>

        {/* CTA */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            width: "100%",
            height: 44,
            background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
            color: "#fff",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            fontSize: 15,
            border: "none",
            borderRadius: 11,
            cursor: "pointer",
          }}
        >
          <PlayIcon />
          Continue Learning
        </button>
      </div>
    </div>
  );
}

// ── Locked course card ─────────────────────────────────────────
function LockedCourseCard({
  course,
  onUnlock,
}: {
  course: (typeof COURSES_PREMIUM)[number];
  onUnlock: () => void;
}) {
  return (
    <div
      onClick={onUnlock}
      style={{
        background: "#fff",
        border: "1px solid #EBEBEB",
        borderRadius: 16,
        margin: "0 16px 12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Frosted overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(248,246,255,0.38)",
          borderRadius: 16,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ padding: "14px 14px 13px", position: "relative", zIndex: 2 }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
            marginBottom: 10,
          }}
        >
          <CourseThumb bgColor={course.bgColor} emoji={course.emoji} opacity={0.75} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: "#606060",
                lineHeight: 1.25,
                marginBottom: 4,
              }}
            >
              {course.title}
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#9E9E9E",
                lineHeight: 1.4,
              }}
            >
              {course.desc}
            </div>
          </div>
          {/* Lock icon */}
          <div
            style={{
              width: 30,
              height: 30,
              background: "#F0EDFF",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <LockIcon />
          </div>
        </div>

        {/* Meta row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#9E9E9E",
              }}
            >
              <SectionIcon color="#C5B3F0" />
              {course.sections}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#9E9E9E",
              }}
            >
              <ClockIcon color="#C5B3F0" />
              {course.duration}
            </div>
          </div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              background: "#EDE7F6",
              color: "#512DA8",
              fontFamily: "'Lato', sans-serif",
              fontWeight: 700,
              fontSize: 10,
              padding: "3px 10px",
              borderRadius: 20,
              letterSpacing: "0.4px",
            }}
          >
            <CrownIcon />
            PREMIUM
          </div>
        </div>

        {/* Locked CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            width: "100%",
            height: 44,
            background: "#F7F6FF",
            border: "1.5px solid #C5B3F0",
            color: "#512DA8",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            borderRadius: 11,
            cursor: "pointer",
          }}
        >
          <LockIcon />
          Get Premium to Access
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showSubscribeOverlay, setShowSubscribeOverlay] = useState(false);
  const [selectedLockedCourse, setSelectedLockedCourse] = useState<
    (typeof COURSES_PREMIUM)[number] | null
  >(null);

  function handleLockedClick(course: (typeof COURSES_PREMIUM)[number]) {
    setSelectedLockedCourse(course);
    setShowSubscribeOverlay(true);
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
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ── Phone Shell ── */}
      <div
        style={{
          width: 480,
          height: 1013,
          background: "#fff",
          borderRadius: 40,
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
          border: "1.5px solid #282828",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* ══════════════════════════════
              HEADER
          ══════════════════════════════ */}
          <div style={{ background: "#f7f6ff", flexShrink: 0 }}>
            {/* Status bar */}
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
                <SignalIcon />
                <WifiIcon />
                <BatteryIcon />
              </div>
            </div>

            {/* Header bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 20px 12px",
              }}
            >
              {/* Search bar */}
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
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: "#9E9E9E",
                  }}
                >
                  Search Courses
                </span>
              </div>
              {/* Language toggle */}
              <div style={{ width: 34, height: 34 }}>
                <svg viewBox="0 0 34 34" width="34" height="34">
                  <circle cx="17" cy="17" r="14" fill="#E3DFFF" />
                  <text x="17" y="22" fontFamily="serif" fontSize="13" fontWeight="700" fill="#512DA8" textAnchor="middle">அ</text>
                  <path d="M27 14 L30 17 L27 20" stroke="#512DA8" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="30" y="22" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#512DA8" textAnchor="middle">A</text>
                </svg>
              </div>
              {/* Font icon */}
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                <path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z" />
              </svg>
              {/* Volume icon */}
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
            </div>

            {/* Category pills */}
            <div
              className="scrollbar-hide"
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                padding: "0 20px 14px",
                overflowX: "auto",
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "6px 16px",
                    borderRadius: 20,
                    border: activeCategory === cat ? "none" : "1.5px solid #E5E5EA",
                    background: activeCategory === cat ? "#512DA8" : "#fff",
                    color: activeCategory === cat ? "#fff" : "#606060",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════
              SCROLL AREA
          ══════════════════════════════ */}
          <div
            className="scrollbar-hide"
            style={{ flex: 1, overflowY: "auto", overflowX: "hidden", paddingBottom: 80 }}
          >
            {/* Page header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px 10px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: 25,
                  color: "#282828",
                }}
              >
                Courses
              </span>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  border: "1.5px solid #512DA8",
                  borderRadius: 10,
                  padding: "7px 14px",
                  background: "transparent",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 600,
                  fontSize: 13,
                  color: "#512DA8",
                  cursor: "pointer",
                }}
              >
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#512DA8">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                </svg>
                Library
                <ChevronRight />
              </button>
            </div>

            {/* ── Continue Learning card ── */}
            <div
              style={{
                margin: "0 16px 18px",
                borderRadius: 18,
                background: "linear-gradient(135deg, #2a1060 0%, #512DA8 55%, #7B52D4 100%)",
                padding: "18px 18px 16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Continue Learning
              </div>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "2px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <svg viewBox="0 0 52 52" width="52" height="52">
                    <rect width="52" height="52" rx="10" fill="#C5B358" />
                    <text x="26" y="34" fontSize="24" textAnchor="middle">⚖️</text>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#fff",
                      lineHeight: 1.3,
                      marginBottom: 4,
                    }}
                  >
                    Tasks vs People — Leading &amp; Managing with Clarity
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Section 2 of 3 · 4h 20m total
                  </div>
                </div>
              </div>
              {/* Progress */}
              <div style={{ marginTop: 12 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 5,
                  }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
                    65% complete
                  </span>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: "#fff" }}>
                    Section 2 / 3
                  </span>
                </div>
                <div
                  style={{ height: 5, background: "rgba(255,255,255,0.18)", borderRadius: 3, overflow: "hidden" }}
                >
                  <div
                    style={{ height: "100%", width: "65%", borderRadius: 3, background: "rgba(255,255,255,0.8)" }}
                  />
                </div>
              </div>
              {/* Resume button */}
              <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 10,
                    padding: "8px 16px",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Resume
                  <PlayIcon size={14} />
                </button>
              </div>
            </div>

            {/* ── Section: My Courses ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4px 24px 10px",
              }}
            >
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 16, color: "#282828" }}>
                My Courses
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9E9E9E" }}>
                2 enrolled
              </span>
            </div>

            {COURSES_FREE.map((course) => (
              <FreeCourseCard key={course.id} course={course} />
            ))}

            {/* ── Divider ── */}
            <div style={{ height: 8, background: "#f7f6ff", margin: "4px 0" }} />

            {/* ── Premium upsell banner ── */}
            <div
              style={{
                margin: "6px 16px 14px",
                borderRadius: 14,
                background: "#f7f6ff",
                border: "1.5px solid #E3DFFF",
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  background: "#EDE7F6",
                  borderRadius: 12,
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
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#282828",
                    marginBottom: 2,
                  }}
                >
                  Unlock 3 Premium Courses
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060" }}>
                  Marketing, Finance, Operations &amp; more
                </div>
              </div>
              <button
                onClick={() => setShowSubscribeOverlay(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
                  color: "#fff",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  border: "none",
                  borderRadius: 10,
                  padding: "8px 14px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Get Premium
                <ChevronRight color="#fff" size={12} />
              </button>
            </div>

            {/* ── Section: Premium Courses ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "4px 24px 10px",
              }}
            >
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 16, color: "#282828" }}>
                Premium Courses
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#9E9E9E" }}>
                3 courses
              </span>
            </div>

            {COURSES_PREMIUM.map((course) => (
              <LockedCourseCard
                key={course.id}
                course={course}
                onUnlock={() => handleLockedClick(course)}
              />
            ))}
          </div>

          {/* ══════════════════════════════
              BOTTOM NAV
          ══════════════════════════════ */}
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
                  gap: 3,
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    color: item.active ? "#512DA8" : "#606060",
                  }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* ══════════════════════════════
              SUBSCRIPTION OVERLAY
          ══════════════════════════════ */}
          {showSubscribeOverlay && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(40,40,40,0.6)",
                zIndex: 100,
                borderRadius: 40,
                display: "flex",
                alignItems: "flex-end",
              }}
              onClick={() => setShowSubscribeOverlay(false)}
            >
              <div
                style={{
                  width: "100%",
                  background: "#fff",
                  borderRadius: "24px 24px 0 0",
                  padding: "0 0 28px",
                  boxShadow: "0 -4px 24px rgba(81,45,168,0.12)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  style={{
                    width: 40,
                    height: 4,
                    background: "#E5E5EA",
                    borderRadius: 2,
                    margin: "12px auto 0",
                  }}
                />

                {/* Locked course banner */}
                {selectedLockedCourse && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      background: "#F7F6FF",
                      border: "1px solid #E3DFFF",
                      borderRadius: 14,
                      margin: "16px 16px 4px",
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: "50%",
                        overflow: "hidden",
                        flexShrink: 0,
                        border: "2px solid #E3DFFF",
                      }}
                    >
                      <svg viewBox="0 0 46 46" width="46" height="46">
                        <circle cx="23" cy="23" r="23" fill={selectedLockedCourse.bgColor} />
                        <text x="23" y="31" fontSize="22" textAnchor="middle">
                          {selectedLockedCourse.emoji}
                        </text>
                      </svg>
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 14,
                          color: "#282828",
                          lineHeight: 1.3,
                        }}
                      >
                        {selectedLockedCourse.title}
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          background: "#F7F6FF",
                          color: "#512DA8",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: 20,
                          marginTop: 4,
                          border: "1px solid #E3DFFF",
                        }}
                      >
                        🔒 Premium only
                      </div>
                    </div>
                  </div>
                )}

                {/* Sheet header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px 10px",
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
                    Get Premium Access
                  </span>
                  <button
                    onClick={() => setShowSubscribeOverlay(false)}
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
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="#512DA8">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </button>
                </div>

                {/* Plan cards */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "0 16px 14px" }}>
                  {/* Yearly */}
                  <div
                    style={{
                      borderRadius: 14,
                      padding: "14px 16px",
                      background: "linear-gradient(135deg, #2a1060 0%, #512DA8 60%, #7B52D4 100%)",
                      boxShadow: "0 4px 16px rgba(81,45,168,0.28)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>
                        Yearly Plan
                      </span>
                      <span
                        style={{
                          fontFamily: "'Lato', sans-serif",
                          fontWeight: 700,
                          fontSize: 10,
                          color: "#5D4037",
                          background: "#FCD34D",
                          padding: "3px 9px",
                          borderRadius: 20,
                        }}
                      >
                        RECOMMENDED
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 24, color: "#fff" }}>₹10,000</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>/year</span>
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
                      ₹833/month · + Applicable tax
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
                      Save ₹2,000 — 2 months free
                    </div>
                  </div>

                  {/* Monthly */}
                  <div
                    style={{
                      borderRadius: 14,
                      padding: "14px 16px",
                      background: "#fff",
                      border: "1.5px solid #E3DFFF",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#282828" }}>
                        Monthly Plan
                      </span>
                      <div
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          border: "2px solid #512DA8",
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
                      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 24, color: "#282828" }}>₹1,000</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060" }}>/month</span>
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", marginTop: 2 }}>
                      + Applicable tax · Cancel anytime
                    </div>
                  </div>
                </div>

                {/* Subscribe CTA */}
                <div style={{ padding: "0 16px" }}>
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
                      fontWeight: 800,
                      fontSize: 17,
                      border: "none",
                      borderRadius: 13,
                      cursor: "pointer",
                      boxShadow: "0 4px 14px rgba(81,45,168,0.3)",
                    }}
                  >
                    Subscribe
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="#fff">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </button>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      color: "#9E9E9E",
                      textAlign: "center",
                      marginTop: 6,
                    }}
                  >
                    ₹10,000/year · Billed annually · Cancel anytime
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
