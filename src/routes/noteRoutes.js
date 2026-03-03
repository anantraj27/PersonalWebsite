import { getNotes, editNotes, addNotes } from '../controller/noteController.js';
import { authenticateUser } from '../middleware/authMiddleware.js';
import express from 'express';
const router = express.Router();

router.post('/add', authenticateUser, addNotes);
router.put('/edit', authenticateUser, editNotes);
router.get('/getNotes', authenticateUser, getNotes);
export default router;
