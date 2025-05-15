
import { models } from '../database/connect_database.js';

export const login = async (req , res ) => {
    const { email, password } = req.body;
    const user = await models.userData.findOne({
        where : {
            email,
            password
        }
    })

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    } else {
        return res.status(200).json({
            message: "Login successful",
            data: user
        });
    }
}

export const register = async (req , res ) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    try {
        const user = await models.userData.create({
            username,
            email,
            password
        });
        return res.status(200).json({
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).json({
            message: "User not created",
            error: error.message
        });
    }
}