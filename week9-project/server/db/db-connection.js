import dotenv from "dotenv";
import pg from "pg";
const { Pool } = pg;
dotenv.config();

const db = new Pool({
  connectionString: process.env.DATABASE_URI,
});

export default db;
