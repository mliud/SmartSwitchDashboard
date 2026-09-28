import TuyAPI from "tuyapi";

export async function discoverTuya() {
  return []; // placeholder, discovery avanzata dopo
}

export async function connectTuya(id, key, ip) {
  const device = new TuyAPI({ id, key, ip });

  await device.find();
  await device.connect();

  const status = await device.get();
  return { ok: true, status };
}
