import mongoose from "mongoose";
import excursion from "../models/excursion.model.js";

export const getExcursions = async (req, res) => {
    try {
        const data = await excursion.find()
        const newData = []
        data.forEach((excurs) => {
            const { _id, name, images, category, description, rating, reviews } = excurs
            newData.push({ _id, name, images: images[0], category, description, rating, reviews:reviews.length })

        })

        
        res.json(newData);
    } catch (error) {
        console.log(error);

    }
};