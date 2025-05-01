// importing express 
import express from 'express';

// initializing express server
const app = express();

// import database connection file 
import './database/connect_database.js'


app.get('/getBooks', (req, res) => {
    
    res.json({
        message : "Books fetched successfully",
    })

})


app.post('/addBook', (req, res) => {

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
