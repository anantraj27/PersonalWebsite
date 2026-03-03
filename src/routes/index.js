import express from 'express';
import authRoutes from './authRoutes.js';
import notesRoutes from './noteRoutes.js';
import pageRoutes from './pageRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);//“Mount authRoutes at the path /auth.”

router.use('/notes', notesRoutes);
router.use( '/',pageRoutes);

export default router;
//Or more clearly:
// “Attach the authRoutes router so that any request
//  starting with /auth is handled by it.”