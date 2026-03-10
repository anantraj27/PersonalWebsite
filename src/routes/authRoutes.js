import express from 'express';

import { signupController } from '../controller/authController.js';
import passport from 'passport';
const router = express.Router();

router.post('/signup', signupController);

router.get(
    '/auth/google',

    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);
router.get(
    '/auth/google/secret',
    passport.authenticate('google', {
        successRedirect: '/secret',
        failureRedirect: '/signin',
    })
);
// router.post('/signin', (req, res, next) => {

//   passport.authenticate('local', (err, user, info) => {

//     if (err) {
//       return res.status(500).json({
//         success:false,
//         message:"Server error"
//       });
//     }

//     if (!user) {
//       return res.status(401).json({
//         success:false,
//         message: info.message || "Invalid credentials"
//       });
//     }

//     req.logIn(user, (err) => {

//       if (err) {
//         return res.status(500).json({
//           success:false,
//           message:"Login failed"
//         });
//       }

//       return res.json({
//         success:true,
//         message:"Login successful"
//       });

//     });

//   })(req, res, next);

// });
router.post('/signin', (req, res) => {
    console.log("Body aaya:", req.body);
    res.json({ message: "Data received", data: req.body });
});
export default router;
