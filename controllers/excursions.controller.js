import mongoose from "mongoose";
import excursion from "../models/excursion.model.js";

export const getExcursions = async (req, res) => {
  const startIndex = Number(req.query.page) || 0;
  const limit = Number(req.query.limit) || 6;
  const categoryFilter = req.query.category
    ? req.query.category.toLowerCase()
    : "";

  try {
    const data = await excursion.find();


    const totalCount = data.length;
    const newData = [];

    const filteredData = data
      .filter(
        (exc) =>
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
    console.log(error);
  }
};

export const getExcursionsCategories = async (req, res) => {
  try {
    const data = await excursion.distinct("category");
    res.json(data);
  } catch (error) {
    res.json("error");
  }
};
