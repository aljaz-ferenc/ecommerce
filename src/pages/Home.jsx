import Banner from "../components/Banner";
import Slider from "../components/Slider";

import { useEffect, useState } from "react";
import { storeActions } from "../store/StoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../supabase/supabase";

import "./Home.css";
import CategoryCard from "../components/CategoryCard";
import MostPopular from "../components/MostPopular";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((cats) => setCategories(cats));
  }, []);

  return (
    <div className="home">
      <div className="categories-list">
        {categories &&
          categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.category}
              text={category.description}
              id={category.id}
            />
          ))}
      </div>
      <MostPopular title="Most Popular" />
      <MostPopular title="Great Deals" />
    </div>
  );
}
