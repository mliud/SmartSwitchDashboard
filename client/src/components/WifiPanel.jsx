import React, { useState } from "react";

export default function WifiPanel() {
  const [networks, setNetworks] = useState([]);

  async function scan() {
    const res = await fetch("http://localhost:3000/api/wifi/scan");
    setNetworks(await res.json());
  }

  return (
    <div>
      <h2>WiFi</h2>
      <button onClick={scan}>Scansiona reti</button>
      <ul>
        {networks.map(n => (
          <li key={n.ssid}>{n.ssid} - {n.signal_level}</li>
        ))}
      </ul>
    </div>
  );
}
