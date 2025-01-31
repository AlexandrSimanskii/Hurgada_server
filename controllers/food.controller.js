import mongoose from "mongoose";
import food from "../models/food.model.js";

export const getFoods = async (req, res) => {
  console.log(req.query);

  try {
    const startIndex = Number(req.query.page) || 0;
    const limit = Number(req.query.limit) || 6;
    const categoryFilter = req.query.category
      ? req.query.category.toLowerCase()
      : "";

    const data = await food.find();
    const totalCount = data.length; 

    const filteredData = data
      .filter(
        (food) =>
          !categoryFilter || food.category.toLowerCase() === categoryFilter
      )
      .map(({ _id, name, images, category, description, rating, reviews }) => ({
        _id,
        name,
        images: images.length > 0 ? images[0] : null,
        category,
        description,
        rating,
        reviews: reviews.length,
      }));

    const filteredCount = filteredData.length; // Количество записей после фильтрации

    const paginatedData = filteredData.slice(startIndex, startIndex + limit);

    res.json({
      totalCount,
      filteredCount,
      startIndex,
      limit,
      data: paginatedData,
    });
  } catch (error) {
    console.error("Ошибка при получении списка еды:", error);
    res.status(500).json({
      message: "Ошибка при получении списка еды",
      error: error.message,
    });
  }
};

export const getFoodCategories = async (req, res) => {
  try {
    const data = await food.distinct("category");
    res.json(data);
  } catch (error) {
    res.json("error");
  }
};
