import mongoose from "mongoose";
import food from "../models/food.model.js";

export const getFoods = async (req, res) => {
    try {
        const data = await food.find()
        const newData = []

    
        
        data.forEach((food) => {
            const { _id, name, images, category, description, rating, reviews } = food
    
            
            newData.push({ _id, name, images: images[0], category, description, rating, reviews: reviews.length })

        })



        res.json(newData);
    } catch (error) {
        console.log(error);

    }
};