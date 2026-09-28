import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { scanWifi, connectWifi } from "./wifi.js";
import { discoverTuya, connectTuya } from "./tuya.js";
import db from "./db.js";
import config from "./config.json" assert { type: "json" };

const app = express();
app.use(cors());
app.use(bodyParser.json());

// WIFI
app.get("/api/wifi/scan", async (req, res) => {
  const networks = await scanWifi();
  res.json(networks);
});

app.post("/api/wifi/connect", async (req, res) => {
  const { ssid, password } = req.body;
  const result = await connectWifi(ssid, password);
  res.json(result);
});

// TUYA
app.get("/api/tuya/discover", async (req, res) => {
  const devices = await discoverTuya();
  res.json(devices);
});

app.post("/api/tuya/connect", async (req, res) => {
  const { id, key, ip } = req.body;
  const result = await connectTuya(id, key, ip);
  res.json(result);
});

// START SERVER
app.listen(config.port, () => {
  console.log(`Server avviato su http://localhost:${config.port}`);
});
