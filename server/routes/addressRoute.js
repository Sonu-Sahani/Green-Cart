import express from 'express';
import authUser from '../middlewares/authUser.js';
import { addAdress, getAddress } from '../controllers/addressController.js';
import { get } from 'mongoose';
import e from 'express';

const addressRouter = express.Router();

addressRouter.post('/add', authUser, addAdress);
addressRouter.post('/get', authUser, getAddress);

export default addressRouter;