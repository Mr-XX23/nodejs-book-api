

// This file defines the user model for the database using Sequelize ORM.
const userModel = ( Sequelize, DataTypes) => {
    const User = Sequelize.define('user', {
        username : {
            type : DataTypes.STRING,
            allowNull : true,
            unique : true,
        },
        email: {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true,
        },
        password: {
            type : DataTypes.STRING,
            allowNull : false,
        },
    })
    return User;
}

export default userModel;