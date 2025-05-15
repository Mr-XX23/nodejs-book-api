
// importing express 
import express from 'express';

// initializing express server
const app = express();

app.use(express.json());

import bookRoute from './routes/bookRoute.js';
import authRoute from './routes/authRoute.js';

// app.get('/getBooks', fetchBook)

// app.post('/addBooks', addBook)

// app.delete('/deleteBook/:id', deleteBook)

// app.patch('/updateBook/:id', updateBook)

app.use('/api', bookRoute)
app.use('/api', authRoute)

// listening to the server on port 8000
app.listen(8000, function () {
    console.log('Server is running on port 8000');
})
