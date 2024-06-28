const bcrypt = require('bcryptjs');
const userModel = require('../../models/userModel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide email");
        }
        if (!password) {
            throw new Error("Please provide password");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
                role: user.role // Include additional user data in token if needed
            };

            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });

            const tokenOption = {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production' // Set secure based on environment
            };

            res.cookie("token", token, tokenOption).status(200).json({
                message: "Login successfully",
                success: true,
                data: { token }
            });

        } else {
            throw new Error("Please check Password");
        }

    } catch (err) {
        console.error("Error during sign in:", err); // Log detailed error for debugging
        res.status(500).json({
            message: "Sign-in failed. Please try again later.", // Generic message to client
            error: true,
            success: false
        });
    }
}

module.exports = userSignInController;
