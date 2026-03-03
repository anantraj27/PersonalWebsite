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
router.post(
    '/signin',
    passport.authenticate('local', {
        failureRedirect: '/signin',
        successRedirect: '/secret',
    })
);
export default router;
