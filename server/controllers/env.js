import Mongoose from 'mongoose';
import dotenv from 'dotenv';

export const getGoogleAuthAPIKey = async (req, res) => {
    try {
        const APIKey = await process.env.GoogleClientID;
        res.status(200).json(APIKey);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};