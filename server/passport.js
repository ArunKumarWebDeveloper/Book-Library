import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import pkg from "pg";


const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

passport.use(
  new GoogleStrategy(
    {
    clientID: '893780842545-gh4ucfsfdfqgejpqiviieunhjd3iiijk.apps.googleusercontent.com',
    clientSecret: 'YOUR_CLIENT_SECRET',
    callbackURL: 'http://localhost:5173/auth/google/callback', // must match Google Console
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
      if (result.rows.length === 0) {
        await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, "GOOGLE_USER"]);
      }
      done(null, profile);
    }
  )
);

export default passport;
