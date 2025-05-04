
// importing express 
import express from 'express';

// initializing express server
const app = express();

app.use(express.json());

import bookRoute from './routes/bookRoute.js';

// app.get('/getBooks', fetchBook)

// app.post('/addBooks', addBook)

// app.delete('/deleteBook/:id', deleteBook)

// app.patch('/updateBook/:id', updateBook)

app.use('/api', bookRoute)

// listening to the server on port 8000
app.listen(8000, function () {
    console.log('Server is running on port 8000');
})
