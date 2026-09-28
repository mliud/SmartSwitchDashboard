import React from "react";
import WifiPanel from "./components/WifiPanel.jsx";
import TuyaPanel from "./components/TuyaPanel.jsx";
import Dashboard from "./components/Dashboard.jsx";

export default function App() {
  return (
    <>
      <h1>SmartSwitch Dashboard</h1>
      <WifiPanel />
      <TuyaPanel />
      <Dashboard />
    </>
  );
}
