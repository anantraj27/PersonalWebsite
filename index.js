import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
const { Pool } = pkg;

import path from "path";
import bcrypt from "bcrypt"
import session from "express-session"
import passport from "passport"
import { dirname } from "path";
import { fileURLToPath } from "url";
import { Strategy } from "passport-local"; ///  importing local
import GoogleStrategy from "passport-google-oauth2"
import env from "dotenv" /// library for usieng process.env.  name 




const app = express();
const port = process.env.PORT || 3000;
const saltRound = 10;

env.config(); /// for acessing  process.env from .env file   


// function check (req,res,next){
//  console.log(req.body)

//   next();
// }

// app.use(check)
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const dir_name = dirname(fileURLToPath(import.meta.url))



app.use(session(
  {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60*60
    }

  }
))

app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  // console.log("---- NEW REQUEST ----");
  // console.log("sessionID:", req.sessionID);
  // console.log("session:", req.session);
  //  console.log("session.passport:", req.session?.passport);
  // console.log("req.user:", req.user);
  // console.log("isAuthenticated:", req.isAuthenticated?.());
  next();
});

// const db = new pg.Client({
//   port: 5236,
//   password: "AnAnT27",
//   database: "LOGIN",
//   host: "localhost",
//   user: "postgres"
// });
// db.connect();
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});


// db.connect();
db.on("connect", () => {
  console.log("Connected to database");
});

db.on("error", (err) => {
  console.error("DB ERROR:", err);
});


// console.log(dir_name + "/public/index.html")
// const data = await db.query("SELECT * FROM LOGIN")
// console.log(data)

app.get("/secret", (req, res) => {
  if (req.isAuthenticated()) {
    res.sendFile(dir_name + "/public/Animation_dom/index.html")
  }
  else {
    res.redirect("/signin");
    console.log(req.isAuthenticated())

  }
})
app.get("/", (req, res) => {

  res.sendFile(dir_name + "/public/first.html")
})


app.get("/signin", (req, res) => {
  res.sendFile(dir_name + "/public/signin.html")
})
app.get("/signup", (req, res) => {
  res.sendFile(dir_name + "/public/signup.html")
})


app.get("/auth/google", passport.authenticate('google', {
  scope: ['profile', 'email'],

}))
app.get('/auth/google/secret', passport.authenticate("google", {   ///   authentication   method btana ka liya ,
  successRedirect: "/secret",
  failureRedirect: "/signin"

}))

app.post('/signin', passport.authenticate("local", {   ///   authentication   method btana ka liya ,
  successRedirect: "/secret",
  failureRedirect: "/signin"

}))

app.post('/signup', async (req, res) => {
  try {



    const name = req.body.Name;
    const email = req.body.Email
    console.log(email)
    const signUppassword = req.body.password
    console.log(name, email, signUppassword)


    bcrypt.hash(signUppassword, saltRound, async (err, hash) => {

      if (err) {
        console.log("Error occured :", err)
      }
      else {
        const submit = await db.query("INSERT INTO LOGIN (name,email,password) VALUES ($1 , $2 ,$3)", [name, email, hash])
        res.sendFile(dir_name + "/public/Animation_dom/index.html")

      }

    })


  }
  catch (error) {
    res.send(" already sign up  with this email... ")
  }

})
passport.use('local', new Strategy(
  {/// by default  wo chhta hai kii body mej hamko , req.body.username and req.body.password  field hona chahiye , if nhi then btanna ka liya kii yeh khojo ... uska jagah 
    usernameField: "Email",   // 👈 YEH btana ka liya kii userb=name ka jagah yeh khojo  req body seh... 
    passwordField: "password"
  }, (async function verify(Email, password, cb) {
    const result = await db.query("SELECT * FROM LOGIN WHERE  email = $1", [Email,]);
    if (result.rows.length > 0) {
      const user = result.rows[0]
      const storedPassword = result.rows[0].password;
      bcrypt.compare(password, storedPassword, (err, result) => {

        if (err) {
          return cb(err);
        }
        else {

          if (result) {
            return cb(null, user)
          }
          else {
            return cb(null, false)
          }

        }
      })


    }
    else {
      return cb('user not found')
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
    const result = await db.query("SELECT * FROM LOGIN WHERE  email = $1", [profile.email]);
    if (result.rows.length === 0) {

      const newuser = await db.query("INSERT INTO LOGIN (email,password) VALUES ($1,$2)", [profile.email, 'google'])
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
  cb(null, user)
})

passport.deserializeUser((user, cb) => {
  cb(null, user)
})

app.listen(port, () => {
  // console.log(`app is listining on ${port} port `)
})
