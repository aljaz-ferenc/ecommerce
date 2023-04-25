import Banner from "../components/Banner";
import Slider from "../components/Slider";
import ClipLoader from "react-spinners/ClipLoader";

import { useEffect, useState } from "react";
import { getCategories } from "../../supabase/supabase";

import "./Home.css";
import CategoryCard from "../components/CategoryCard";
import MostPopular from "../components/MostPopular";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [counter, setCounter] = useState(0)
  const [loading, setLoading] = useState(true)

  function countLoaded(){
    setCounter(prevCount => prevCount + 1)
  }

  useEffect(() => {
    if(counter === 6){
      setLoading(false)
    }
  }, [counter])

  useEffect(() => {
    getCategories().then((cats) => setCategories(cats));
  }, []);


  return (
    <div className="home">
      <div className="categories-list">
        {loading &&  <h3>Loading...</h3>}
        {categories && 
          categories.map((category) => (
            <CategoryCard
            countLoaded={countLoaded}
            loading={loading}
            key={category.id}
            name={category.category}
            text={category.description}
            id={category.id}
            />
            ))}
      </div>
      <MostPopular loading={loading} title="Most Popular" />
      <MostPopular loading={loading} title="Great Deals" />
    </div>
  );
}
