import Database from "better-sqlite3";

const db = new Database("data.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS readings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    deviceId TEXT,
    voltage REAL,
    current REAL,
    power REAL,
    energy REAL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
