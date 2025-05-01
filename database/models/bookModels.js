
// This file defines the model for the books table in the database
const booksModel  = ( sequelize, DataTypes ) => {
    const Book = sequelize.define("book", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        bookName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        bookAuthor : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        bookGenre : {
            type : DataTypes.STRING,
            allowNull : false,
        },
    })

    return Book;
}

export default booksModel;