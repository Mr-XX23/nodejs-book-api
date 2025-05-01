
// This file defines the model for the books table in the database
const booksModel  = ( sequelize, DataTypes ) => {
    const Boook = sequelize.define("book", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        bookName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        BookPrice : {
            type : DataTypes.INTEGER,
            allowNull : false,
        },
        BookAuthor : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        BookGenre : {
            type : DataTypes.STRING,
            allowNull : false,
        },
    })

    return Boook;
}

export default booksModel;