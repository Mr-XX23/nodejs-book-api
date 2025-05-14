import express from 'express';

import { login, register, logout } from '../controllers/authController.js';

const router = express.Router();

// login
router.route('/getLogin').post(login);

// register
router.route('/register').post(register);

// logout
router.route('/logout').get(logout);


