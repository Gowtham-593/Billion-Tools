import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Settings from "../figma-make/Settings";
import SettingsPremium from "../figma-make/SettingsPremium";
import ManageMembershipV2 from "../figma-make/ManageMembershipV2";

function App() {
  const [page, setPage] = useState<"settings-free" | "settings-premium" | "membership">("settings-free");

  if (page === "settings-free") return <Settings />;
  if (page === "membership") return <ManageMembershipV2 onBack={() => setPage("settings-premium")} />;
  return <SettingsPremium onManageMembership={() => setPage("membership")} />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
