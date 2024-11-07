// backend/routes/carrier.route.js
import express from 'express';
import { addCandidate } from '../controllers/carrier.controller.js';
import upload from '../middleware/upload.js'; // Use the configured upload middleware

const router = express.Router();

// Use upload.single('resume') middleware in the route to handle file upload
router.post('/carrier', upload.single('resume'), addCandidate);

export default router;
