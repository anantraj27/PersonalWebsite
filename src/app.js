import express from 'express';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import { RedisStore } from "connect-redis";
import routes from './routes/index.js';
import './config/passport.js'; // only imports strategies
import { createClient } from "redis";
import cors from "cors";





dotenv.config();

const app = express();

/* ------------------ BASIC MIDDLEWARE ------------------ */
app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ------------------ SESSION ------------------ */
const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

await redisClient.connect();

const redisStore = new RedisStore({
  client: redisClient
});
app.set("trust proxy", 1);
app.use(
  session({
    store: redisStore,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: true,
      sameSite: "lax"
    }
  })
);

/* ------------------ PASSPORT ------------------ */

app.use(passport.initialize());
app.use(passport.session());

/* ------------------ ROUTES ------------------ */

app.use('/', routes);

export default app;

/*
Key Features of app.use()

    Middleware Definition: app.use() 
    is used to define middleware that executes on every request,
    regardless of the HTTP method (GET, POST, PUT, DELETE, etc.).
    Path Pattern Matching: app.use() can be used to define middleware
    that runs only for specific URL paths. If no path is specified, 
    it applies to all routes.
    Order Matters: The order in which app.use() 
    is called affects the order in which middleware functions are executed.
    Global Middleware: It is often used to set up global middleware like
    logging, body parsing, authentication, or error handling.


*/
