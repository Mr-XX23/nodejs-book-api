import express from 'express';

import { fetchBook, addBook, deleteBook, updateBook, fetchBookById } from '../controllers/bookController.js';

// router.route('/books').get(fetchBook);

// router.route('/books').post(addBook);

// router.route('/book/:id').delete(deleteBook);

// router.route('/book/:id').patch(updateBook);

const router = express.Router();

// New methods
router.route('/books').get(fetchBook).post(addBook);
router.route('/books/:id').delete(deleteBook).patch(updateBook).get(fetchBookById);


export default router; 