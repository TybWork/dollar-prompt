import express from 'express'
import { postSellerData } from '../controllers/seller.controller.js';
import multerFunc from '../middlewares/multer.middle.js';
import { isSeller } from '../middlewares/verifyToken.middle.js';

export const sellerRoutes = express.Router();
sellerRoutes.post('/postdata', multerFunc, postSellerData)