import express from 'express';

import { login, register } from '../controllers/authController.js';

const router = express.Router();

// login
router.route('/getLogin').post(login);

// register
router.route('/register').post(register);

// logout
// router.route('/logout').get(logout);


export default router;

