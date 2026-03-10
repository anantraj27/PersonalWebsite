import express from 'express';
import {
    homePage,
    signinPage,
    signupPage,
    secretPage,
    adminPage,
    notes,
} from '../controller/pagecontroller.js';

import { authenticateUser } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/',authenticateUser, secretPage);
router.get('/signin', signinPage);
router.get('/signup', signupPage);
router.get('/secret', authenticateUser, secretPage);
router.get('/admin', adminPage);
router.get('/notes', authenticateUser, notes);

export default router;
