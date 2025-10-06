import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Book",
  password: "Arunwebdev",
  port: 5432,
});
