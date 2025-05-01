// importing express 
import express from 'express';

// initializing express server
const app = express();
app.use(express.json());

// import database connection file 
import './database/connect_database.js'
import { bookData } from './database/connect_database.js';


app.get('/getBooks', async (req, res) => {

    const fetchBook = await bookData.findAll();
    res.json({
        message : "Books fetched successfully",
        data : fetchBook
    })

})


app.post('/addBooks', async (req, res) => { 
    // console.log(req.body);
    const { bookName, bookPrice, bookAuthor, bookGenre } = await req.body;
    await bookData.create({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre
    })
    res.json({
        message : "Book added successfully",
    })

})


app.delete('/deleteBook/:id', (req, res) => {

    res.json({
        message : "Book deleted successfully",
    })

})

app.patch('/updateBook/:id', (req, res) => {

    res.json({
        message : "Book updated successfully",
    })

})


postgresql://postgres.evsbarecfzapqnjttngb:rohan@5293!00@aws-0-us-east-2.pooler.supabase.com:6543/postgres

// listening to the server on port 8000
app.listen(8000, function () {
    console.log('Server is running on port 8000');
})
