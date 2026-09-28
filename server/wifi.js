import wifi from "node-wifi";

wifi.init({ iface: null });

export async function scanWifi() {
  return await wifi.scan();
}

export async function connectWifi(ssid, password) {
  try {
    await wifi.connect({ ssid, password });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}
