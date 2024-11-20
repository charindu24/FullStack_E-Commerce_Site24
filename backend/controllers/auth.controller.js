import { redis } from "../lib/redis.js"; // Import Redis instance for token storage
import User from "../models/user.model.js"; // Import User model for database operations
import jwt from "jsonwebtoken"; // Import JSON Web Token for token generation and verification


// Function to generate access and refresh tokens for a user
const generateTokens = (userId) => {
    // Generate access token with 15 minutes expiration
    const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
    });

    // Generate refresh token with 7 days expiration
    const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
    });

    // Return both tokens
    return { accessToken, refreshToken };
};

// Function to store refresh token in Redis with a 7-day expiration
const storeRefreshToken = async (userId, refreshToken) => {
    await redis.set(`refresh_token:${userId}`, refreshToken, "EX", 7 * 24 * 60 * 60); // Set key as "refresh_token:<userId>"
};

// Function to set cookies for access and refresh tokens
const setCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken", accessToken, {
        httpOnly: true, // Prevents JavaScript access to cookie to prevent XSS attacks
        secure: process.env.NODE_ENV === "production", // Use secure flag in production only
        sameSite: "strict", // Helps prevent CSRF attacks by allowing same-site requests only
        maxAge: 15 * 60 * 1000, // Set max age for access token to 15 minutes
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true, // Prevents JavaScript access to cookie to prevent XSS attacks
        secure: process.env.NODE_ENV === "production", // Use secure flag in production only
        sameSite: "strict", // Helps prevent CSRF attacks by allowing same-site requests only
        maxAge: 7 * 24 * 60 * 60 * 1000, // Set max age for refresh token to 7 days
    });
};

// Signup controller function to handle user registration
export const signup = async (req, res) => {
    const { email, password, name } = req.body; // Extract email, password, and name from request body
    try {
        // Check if a user with the provided email already exists
        const userExists = await User.findOne({ email });

        // If user already exists, send 400 response with an error message
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user in the database
        const user = await User.create({ name, email, password });

        // Generate access and refresh tokens for the authenticated user
        const { accessToken, refreshToken } = generateTokens(user._id);
        await storeRefreshToken(user._id, refreshToken); // Store refresh token in Redis

        // Set access and refresh tokens as cookies in the response
        setCookies(res, accessToken, refreshToken);

        // Send success response with user data (excluding password)
        res.status(201).json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: error.message });
    }
};

//Login controller function to handle user login
export const login = async (req, res) => {
    
    try {
        
        const {email, password} = req.body
        const user = await User.findOne({email})

        if (user && (await user.comparePassword(password))) {
            const { accessToken, refreshToken } = generateTokens(user._id);


            await storeRefreshToken(user._id, refreshToken)
            setCookies(res.accessToken, refreshToken)

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

// Logout controller function (currently sends a placeholder response)
export const logout = async (req, res) => {
    try {
        const refresh_token = req.cookies.refreshToken;
        if (refresh_token) {
            const decoded = jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET);
            await redis.del(`refresh_token:${decoded.userId}`)
        }
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        res.json({ message: "Logged out Successfully"});

    } catch (error) {
        
        res.status(500).json({ message: "Server error", error: error.message});
        
    }
    
};

export const refreshToken = async(req,res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) {
            return res.status(401).json({ message: " no refresh token provided" });
        }
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const storedToken = await redis.get(`refresh_Token:${decoded.userId}`);  
        if (storedToken !== refreshToken) {
            return res.status(401).json({ message: "Invalid refresh token" });

        }
        const accessToken = jwt.sign({ userId: decoded.userId}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
        res.cookie("accessToken", accessToken, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === "production", 
            samsite: "strict", 
            maxAge: 15 * 60 * 1000 });

            res.json({message: "Token refreshed successfully" });
    } catch (error) {
        console.log("Error in refreshToken controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message});
        
    }
};

export const getProfile = async function (req, res) {
    try {
        res.json(req.user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
    
}


