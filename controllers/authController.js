
import { userData } from "../database/connect_database.js";

export const login = async (req , res ) => {
    const { email, password } = req.body;
    const user = await userData.findOne({
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
    const user = await userData.create({
        username,
        email,
        password
    })

    //check user is there or not, byscript the password
    // need to use bcrypt to hash the password

    if (!user) {
        return res.status(401).json({
            message: "User not created"
        });
    } else {
        return res.status(200).json({
            message: "User created successfully",
            data: user
        });
    }
}