import express from 'express';
import { isAdmin } from '../middlewares/verifyToken.middle.js';
import getUsers from '../controllers/admin.controller.js'

export const adminRoutes = express.Router();

adminRoutes.get('/getuser', isAdmin, getUsers);