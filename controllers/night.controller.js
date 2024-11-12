import mongoose from "mongoose";
import night from "../models/night.model.js";

export const getNightLive = async (req, res) => {
  try {
    const data = await night.find();

    const newData = []
    data.forEach((night) => {
      const { _id, name, images, description, rating, reviews } = night
      newData.push({ _id, name, images: images[0], description, rating, reviews: reviews.length })

    })



    res.json(newData);



    res.json(data);
  } catch (error) {
    console.log(error);
  }
};
