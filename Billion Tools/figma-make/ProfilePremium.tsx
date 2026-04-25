import { useState } from "react";

type MemberState = "active" | "expiring" | "expired";

/* ── Shared sub-components ── */

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="#606060"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
);

const LockIcon = ({ color = "#9E9E9E" }: { color?: string }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill={color}><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="#A3E635"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
);

const SettingsRow = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 24px", cursor: "pointer" }}>
    <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icon}</div>
    <div style={{ flex: 1 }}><div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#282828" }}>{label}</div></div>
    <ChevronRight />
  </div>
);

const Divider = () => <div style={{ height: 0.5, background: "#E5E5EA", margin: "0 24px" }} />;
const DividerSection = () => <div style={{ height: 8, background: "#f7f6ff", margin: "4px 0" }} />;

const RenewalCards = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    {/* Yearly */}
    <div style={{
      borderRadius: 14, padding: "14px 16px", cursor: "pointer", position: "relative",
      background: "linear-gradient(135deg, #2a1060 0%, #512DA8 60%, #7B52D4 100%)",
      boxShadow: "0 4px 16px rgba(81,45,168,0.3)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>Yearly Plan</span>
        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 10, color: "#5D4037", background: "#FCD34D", padding: "3px 9px", borderRadius: 20, letterSpacing: 0.4 }}>RECOMMENDED</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 24, color: "#fff" }}>₹10,000</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>/year</span>
      </div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>₹833/month · + Applicable tax</div>
      <div style={{ display: "inline-block", background: "rgba(255,255,255,0.18)", color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 11, padding: "3px 9px", borderRadius: 20, marginTop: 8 }}>
        Save ₹2,000 — 2 months free
      </div>
    </div>
    {/* Monthly */}
    <div style={{ borderRadius: 14, padding: "14px 16px", cursor: "pointer", background: "#fff", border: "1.5px solid #E3DFFF" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#282828" }}>Monthly Plan</span>
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 3 }}>
        <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 900, fontSize: 24, color: "#282828" }}>₹1,000</span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060" }}>/month</span>
      </div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060", marginTop: 2 }}>+ Applicable tax · Cancel anytime</div>
    </div>
  </div>
);

/* ── State: Active ── */
function ActiveState() {
  return (
    <>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#606060", padding: "10px 24px 4px", letterSpacing: 0.6, textTransform: "uppercase" }}>
        Membership
      </div>
      {/* Active membership card */}
      <div style={{ margin: "8px 16px 0", borderRadius: 16, overflow: "hidden" }}>
        <div style={{
          background: "linear-gradient(140deg, #2a1060 0%, #512DA8 55%, #7B52D4 100%)",
          padding: "18px 18px 20px", position: "relative",
        }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 130, height: 130, background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 20, padding: "4px 12px", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: "#fff", letterSpacing: 0.5 }}>
              <span style={{ width: 7, height: 7, background: "#A3E635", borderRadius: "50%", flexShrink: 0 }} />
              Premium Member
            </span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.12)", padding: "3px 10px", borderRadius: 20 }}>Yearly Plan</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,0.6)"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>Valid till</span>
            <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 15, color: "#fff" }}>28 Dec 2026</span>
          </div>
          <div style={{ height: 4, background: "rgba(255,255,255,0.18)", borderRadius: 2, marginTop: 12, overflow: "hidden" }}>
            <div style={{ height: "100%", background: "rgba(255,255,255,0.75)", borderRadius: 2, width: "82%" }} />
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 5, textAlign: "right" }}>
            10 months used · 2 months remaining
          </div>
          <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 12px", marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
            {["Premium Courses", "Expert Tools & Frameworks", "Dedicated Learning Path", "Curated Activities"].map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <CheckIcon />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ height: 4 }} />
      <DividerSection />

      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#606060", padding: "10px 24px 4px", letterSpacing: 0.6, textTransform: "uppercase" }}>
        Support
      </div>
      <SettingsRow icon={<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#606060" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="1" fill="#606060" stroke="none"/></svg>} label="Help & Support" />
      <Divider />
      <SettingsRow icon={<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#606060" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>} label="Terms & Conditions" />
      <Divider />
      <SettingsRow icon={<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#606060" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>} label="Privacy Policy" />
      <Divider />
      <SettingsRow icon={<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#606060" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>} label="Refund Policy" />
      <DividerSection />
      <LogoutRow />
    </>
  );
}

/* ── State: Expiring Soon ── */
function ExpiringState() {
  return (
    <>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#606060", padding: "10px 24px 4px", letterSpacing: 0.6, textTransform: "uppercase" }}>
        Membership
      </div>

      {/* Expiring warning card */}
      <div style={{ background: "#FFFBEB", border: "1.5px solid #FCD34D", borderRadius: 16, padding: "16px 18px", margin: "8px 16px 0" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: 20, padding: "4px 12px", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: "#92400E", letterSpacing: 0.4, whiteSpace: "nowrap" }}>
              <svg viewBox="0 0 24 24" width="11" height="11" fill="#D97706"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
              Ending Soon
            </span>
          </div>
          <div style={{ width: 36, height: 36, background: "#512DA8", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFD54F"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>
          </div>
        </div>
        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 17, color: "#282828", marginBottom: 3 }}>Your Premium Plan is Ending</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", lineHeight: 1.45 }}>
          Your Yearly plan expires on <strong style={{ color: "#D97706", fontWeight: 600 }}>28 Dec 2026</strong>. Renew now to keep accessing all your courses, tools, and your learning path without interruption.
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FEF3C7", border: "1px solid #FCD34D", borderRadius: 8, padding: "7px 12px", fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#92400E", marginTop: 10, width: "100%" }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#B45309"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
          <span><strong style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#B45309" }}>24 days</strong> remaining on your current plan</span>
        </div>
      </div>

      {/* What you will lose */}
      <div style={{ background: "#fff", border: "1px solid #E3DFFF", borderRadius: 14, padding: "12px 14px", margin: "12px 16px 0" }}>
        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#282828", marginBottom: 10 }}>What stops working after expiry</div>
        {[
          {
            icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="#512DA8"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>,
            label: "Premium Courses",
            sub: "Structured learning paths for SME growth stages",
          },
          {
            icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="#512DA8"><path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14z"/></svg>,
            label: "Expert Tools & Frameworks",
            sub: "Decision templates, operational checklists",
          },
          {
            icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="#512DA8"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>,
            label: "Dedicated Learning Path",
            sub: "Personalised journey aligned to your business stage",
          },
        ].map((item, i, arr) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", borderBottom: i < arr.length - 1 ? "0.5px solid #F0F0F0" : "none" }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: "#F7F6FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#282828", flex: 1 }}>
              {item.label}
              <span style={{ display: "block", fontSize: 12, color: "#606060", marginTop: 1 }}>{item.sub}</span>
            </div>
            <LockIcon />
          </div>
        ))}
      </div>

      {/* Renewal plan cards */}
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 17, color: "#282828", marginBottom: 12 }}>Choose your renewal plan</div>
        <RenewalCards />
      </div>

      {/* Renew CTA */}
      <button style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        width: "calc(100% - 32px)", margin: "14px 16px 0", height: 52,
        background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
        color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 17,
        border: "none", borderRadius: 13, cursor: "pointer",
        boxShadow: "0 4px 14px rgba(81,45,168,0.3)",
      }}>
        Renew Now
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
      </button>

      <div style={{ height: 16 }} />
      <DividerSection />

      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#606060", padding: "10px 24px 4px", letterSpacing: 0.6, textTransform: "uppercase" }}>
        Support
      </div>
      <SettingsRow icon={<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#606060" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="1" fill="#606060" stroke="none"/></svg>} label="Help & Support" />
      <DividerSection />
      <LogoutRow />
    </>
  );
}

/* ── State: Expired ── */
function ExpiredState() {
  return (
    <>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#606060", padding: "10px 24px 4px", letterSpacing: 0.6, textTransform: "uppercase" }}>
        Membership
      </div>

      {/* Expired card */}
      <div style={{ background: "#F9F9F9", border: "1.5px solid #E5E5EA", borderRadius: 16, padding: "16px 18px", margin: "0 16px 4px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F3F3F3", border: "1px solid #D0D0D0", borderRadius: 20, padding: "4px 12px", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 12, color: "#606060" }}>
            <span style={{ width: 7, height: 7, background: "#9E9E9E", borderRadius: "50%" }} />
            Plan Expired
          </span>
          <LockIcon color="#9E9E9E" />
        </div>
        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 17, color: "#282828", marginBottom: 4 }}>Your Premium plan has expired</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#606060", lineHeight: 1.45 }}>
          You no longer have access to premium courses, expert tools, and your learning path. Renew to pick up right where you left off.
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#9E9E9E", marginTop: 10 }}>Expired on 28 Dec 2026 · Yearly Plan</div>
      </div>

      {/* Locked features */}
      <div style={{ margin: "12px 16px 0", background: "#F9F9F9", border: "1px solid #E5E5EA", borderRadius: 14, padding: "12px 14px" }}>
        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#282828", marginBottom: 10 }}>Locked — Premium only</div>
        {[
          { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="#9E9E9E"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>, label: "Premium Courses" },
          { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="#9E9E9E"><path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14z"/></svg>, label: "Expert Tools & Frameworks" },
          { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="#9E9E9E"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>, label: "Dedicated Learning Path" },
          { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="#9E9E9E"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>, label: "Curated Activities" },
        ].map((item, i, arr) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: i < arr.length - 1 ? "0.5px solid #F0F0F0" : "none", opacity: 0.6 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: "#F0F0F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#606060", flex: 1 }}>{item.label}</span>
            <LockIcon color="#C0C0C0" />
          </div>
        ))}
      </div>

      {/* Renewal plan cards */}
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 17, color: "#282828", marginBottom: 12 }}>Renew your membership</div>
        <RenewalCards />
      </div>

      {/* Renew CTA */}
      <button style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        width: "calc(100% - 32px)", margin: "14px 16px 0", height: 52,
        background: "linear-gradient(135deg, #512DA8 0%, #7B52D4 100%)",
        color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 17,
        border: "none", borderRadius: 13, cursor: "pointer",
        boxShadow: "0 4px 14px rgba(81,45,168,0.3)",
      }}>
        Renew Membership
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#fff"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
      </button>

      <div style={{ height: 16 }} />
      <DividerSection />

      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#606060", padding: "10px 24px 4px", letterSpacing: 0.6, textTransform: "uppercase" }}>
        Support
      </div>
      <SettingsRow icon={<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#606060" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r="1" fill="#606060" stroke="none"/></svg>} label="Help & Support" />
      <DividerSection />
      <LogoutRow />
    </>
  );
}

/* ── Logout Row ── */
function LogoutRow() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 24px", cursor: "pointer" }}>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="#E53935"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
      <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 17, color: "#E53935" }}>Log Out</span>
    </div>
  );
}

/* ════════════════════════════════════════
   Main Component
════════════════════════════════════════ */
export default function ProfilePremium() {
  const [memberState, setMemberState] = useState<MemberState>("active");

  const stateConfig: Record<MemberState, { label: string; activeBg: string; activeColor: string }> = {
    active:   { label: "Active",   activeBg: "#512DA8", activeColor: "#fff" },
    expiring: { label: "Expiring", activeBg: "#D97706", activeColor: "#fff" },
    expired:  { label: "Expired",  activeBg: "#606060", activeColor: "#fff" },
  };

  return (
    <div style={{
      background: "#e8e8e8",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "32px 0 48px",
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Phone Shell */}
      <div style={{
        width: 480,
        height: 1013,
        background: "#ffffff",
        borderRadius: 40,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
        border: "1.5px solid #282828",
      }}>
        {/* Screen */}
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>

          {/* ── Header ── */}
          <div style={{ background: "#f7f6ff", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 26px 4px" }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, fontSize: 16, color: "#000" }}>9:41</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#000"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#000"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 30px 16px" }}>
              <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 800, fontSize: 21, color: "#512DA8", letterSpacing: -0.3 }}>
                Billion<span style={{ color: "#F16623" }}>T</span>ools
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#282828" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </div>
                <div style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#282828"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96a7.26 7.26 0 0 0-1.62-.94l-.36-2.54A.484.484 0 0 0 14 2h-4c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.477.477 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h4c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
                </div>
              </div>
            </div>
          </div>

          {/* ── Scrollable Content ── */}
          <div className="scrollbar-hide" style={{ flex: 1, overflowY: "auto", overflowX: "hidden", paddingBottom: 30 }}>

            {/* Back Row */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "16px 24px 4px", cursor: "pointer", width: "fit-content" }}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="#282828"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Back</span>
            </div>

            <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 25, color: "#282828", padding: "4px 24px 16px" }}>Profile</div>

            {/* User Hero */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "0 24px 16px" }}>
              <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2.5px solid #E3DFFF" }}>
                <svg viewBox="0 0 64 64" width="64" height="64">
                  <circle cx="32" cy="32" r="32" fill="#c5bcf5"/>
                  <ellipse cx="32" cy="22" rx="15" ry="16" fill="#3d2b1f"/>
                  <circle cx="32" cy="27" r="13" fill="#e8c9a0"/>
                  <rect x="24" y="39" width="16" height="10" rx="5" fill="#e8c9a0"/>
                  <ellipse cx="32" cy="59" rx="20" ry="12" fill="#7c6bb5"/>
                  <path d="M10 64 Q12 48 32 45 Q52 48 54 64Z" fill="#2e2060"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 21, color: "#282828" }}>Tanisha</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#606060", marginTop: 2 }}>tanisha@example.com</div>
              </div>
              <button style={{
                marginLeft: "auto", display: "flex", alignItems: "center", gap: 5,
                background: "#F7F6FF", border: "1px solid #E3DFFF", borderRadius: 10,
                padding: "7px 12px", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: "#512DA8",
                cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0,
              }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#512DA8"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                Edit
              </button>
            </div>

            <Divider />
            <div style={{ height: 14 }} />

            {/* ── State Toggle (inside phone) ── */}
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              margin: "0 16px 4px",
              background: "#f7f6ff",
              borderRadius: 12,
              padding: "8px 10px",
              border: "1px solid #E3DFFF",
            }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, color: "#9E9E9E", letterSpacing: 0.6, textTransform: "uppercase", whiteSpace: "nowrap", marginRight: 2 }}>
                State:
              </span>
              {(["active", "expiring", "expired"] as MemberState[]).map((s) => {
                const isActive = memberState === s;
                const cfg = stateConfig[s];
                return (
                  <button
                    key={s}
                    onClick={() => setMemberState(s)}
                    style={{
                      flex: 1,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "6px 8px",
                      borderRadius: 8,
                      border: "none",
                      cursor: "pointer",
                      background: isActive ? cfg.activeBg : "#e8e8f0",
                      color: isActive ? cfg.activeColor : "#9E9E9E",
                      transition: "background 0.15s, color 0.15s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {cfg.label}
                  </button>
                );
              })}
            </div>

            {/* ── State Content ── */}
            {memberState === "active"   && <ActiveState />}
            {memberState === "expiring" && <ExpiringState />}
            {memberState === "expired"  && <ExpiredState />}

          </div>{/* /scroll-area */}

          {/* ── NavBar ── */}
          <div style={{ background: "#fff", borderTop: "1px solid #E3DFFF", boxShadow: "0px 1px 3px rgba(0,0,0,0.25)", padding: "8px 30px", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "3px 0" }}>
              {/* Home */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", minWidth: 45 }}>
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#282828"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Home</span>
              </div>
              {/* Reels */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", minWidth: 45 }}>
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#282828"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Reels</span>
              </div>
              {/* Courses */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", minWidth: 45 }}>
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="#282828" strokeWidth="1.5" fill="none"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Courses</span>
              </div>
              {/* Library */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", minWidth: 45 }}>
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" stroke="#282828" strokeWidth="1.5" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#282828" }}>Library</span>
              </div>
              {/* Profile — active */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer", minWidth: 45 }}>
                <div style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="#512DA8"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: "#512DA8" }}>Profile</span>
              </div>
            </div>
          </div>

        </div>{/* /screen */}
      </div>{/* /phone */}
    </div>
  );
}
