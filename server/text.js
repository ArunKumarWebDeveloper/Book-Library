import dotenv from "dotenv";
dotenv.config();
import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function testDB() {
  try {
    const res = await pool.query("SELECT current_database(), current_user");
    console.log("✅ Connected successfully:", res.rows[0]);
  } catch (err) {
    console.error("❌ Connection failed:", err);
  } finally {
    pool.end();
  }
}

testDB();