import React, { useEffect } from "react";
import "./CategoryCard.css";
import cat0 from "../images/categories/cat0.webp";
import cat1 from "../images/categories/cat1.webp";
import cat2 from "../images/categories/cat2.webp";
import cat3 from "../images/categories/cat3.webp";
import cat4 from "../images/categories/cat4.webp";
import cat5 from "../images/categories/cat5.webp";

import { useDispatch } from "react-redux";
import { categoryActions } from "../store/CategorySlice";
import { Navigate, useNavigate } from "react-router";
import { redirect } from "react-router";
import { getCategories } from "../../supabase/supabase";

const images = [cat0, cat1, cat2, cat3, cat4, cat5];

const CategoryCard = ({ name, id, text, loading, countLoaded }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCategory() {
    dispatch(categoryActions.setCategory({ name, text }));
    navigate(`/${name}`);
  }

  return (
    <div style={{display: loading ? 'none' : 'block'}} className="category-card" onClick={handleCategory}>
      <span className="category-card__title">{name.toUpperCase()}</span>
      <img onLoad={countLoaded} className="category-card__img" src={images[id - 1]} alt="product" />
    </div>
  );
};

export default CategoryCard;
