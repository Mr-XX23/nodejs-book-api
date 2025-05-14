import { models } from '../database/connect_database.js';

export const start = (req, res) => {
    res.json({
        message: "Welcome to the Book API"
    });
}

export const fetchBook = async (req, res) => {
    const fetchBook = await models.bookData.findAll();
    res.json({
        message: "Books fetched successfully",
        data: fetchBook
    });
}

export const addBook = async (req, res) => {
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
    await models.bookData.create({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre
    });
    res.json({
        message: "Book added successfully"
    });
}

export const deleteBook = async (req, res) => {
    const { id } = req.params;
    await models.bookData.destroy({
        where: { id }
    });
    res.json({
        message: "Book deleted successfully"
    });
}

export const updateBook = async (req, res) => {
    const { id } = req.params;
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
    await models.bookData.update({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre
    }, {
        where: { id }
    });
    res.json({
        message: "Book updated successfully"
    });
}

export const fetchBookById = async (req, res) => {
    const { id } = req.params;

    // Can be done
    // const fetchBook = await bookData.findOne({
    //     where: { id }
    // });

    const fetchSingleBook = await models.bookData.findByPk(id);
    if (!fetchSingleBook) {
        return res.status(404).json({
            message: "Book not found"
        });
    }
    res.json({
        message: "Book fetched successfully",
        data: fetchSingleBook
    });
}