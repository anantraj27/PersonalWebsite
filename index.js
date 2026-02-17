import express from "express";

import db from "./src/db";
import router from "./src/routes";

import bcrypt from "bcrypt"
import session from "express-session"
import passport from "passport"

import { Strategy } from "passport-local"; ///  importing local
import GoogleStrategy from "passport-google-oauth2"
import env from "dotenv" /// library for usieng process.env.  name 




const app = express();
const port = process.env.PORT || 3000;




env.config(); /// for acessing  process.env from .env file   

// function check (req,res,next){
//  console.log(req.body)

//   next();
// }
// app.use(check)
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(
  {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60
    }

  }
))

app.use(passport.initialize());
app.use(passport.session());


app.use((req, res, next) => {
  console.log("---- NEW REQUEST ----");
  // console.log("sessionID:", req.sessionID);
  console.log("session:", req.session);
  // console.log("session.passport:", req.session.passport);
  // console.log("req.user:", req.user);
  // console.log("isAuthenticated:", req.isAuthenticated);
  next();
});
app.use(router)


passport.use('local', new Strategy(
  {/// by default  wo chhta hai kii body mej hamko , req.body.username and req.body.password  field hona chahiye , if nhi then btanna ka liya kii yeh khojo ... uska jagah 
    usernameField: "Email",   // 👈 YEH btana ka liya kii userb=name ka jagah yeh khojo  req body seh... 
    passwordField: "password"
  }, (async function verify(Email, password, cb) {
    try {

      const result = await db.query("SELECT * FROM LOGIN WHERE  email = $1", [Email,]);
      if (result.rows.length === 0) {

        return cb(null, false, { message: "Enter Email is not related to password" })
      }

      if (result.rows.length > 0) {
        const user = result.rows[0]
        const storedPassword = result.rows[0].password;

        bcrypt.compare(password, storedPassword, (err, result) => {

          if (err) {
            return cb(err);
          }
          else {
            if (!result) {
              return cb(null, false, { message: "Wrong password" });
            }
            if (result) {
              return cb(null, user)
            }
            else {
              return cb(null, false)
            }

          }
        })


      }
    } catch (error) {
      cb(error)
    }







  })))

// console.log("ID:", process.env.GOOGLE_CLIENT_ID);
// console.log("SECRET:", process.env.GOOGLE_CLIENT_SECRET);

passport.use("google", new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "https://personalwebsite-1-9nzz.onrender.com/auth/google/secret",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"

}, async (accessToken, refreshToken, profile, cb) => {
  // console.log(profile);
  try {
    const result = await db.query("SELECT * FROM login WHERE  email = $1", [profile.email]);
    if (result.rows.length === 0) {

      const newuser = await db.query("INSERT INTO login (email,password) VALUES ($1,$2)", [profile.email, 'google'])
      cb(null, newuser.rows[0])

    }
    else {
      cb(null, result.rows[0])
    }
  }
  catch (err) {
    cb(err)
  }

}))
passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

passport.deserializeUser((user, cb) => {
  cb(null, user)
})

app.listen(port, () => {
  console.log(`app is listining on ${port} port `)
})
