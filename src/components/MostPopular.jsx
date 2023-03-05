import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PopularCard from "./PopularCard";
import "./MostPopular.css";
import { getAllItems } from "../../supabase/supabase";

export default function MostPopular({title}) {
  // const categories = useSelector((state) => state.store);
  const [mostPopular, setMostPopular] = useState([]);
 const randNums = []

 for(let i = 0; i < 5; i++){
   randNums.push(Math.floor(Math.random() * 60))
 }

useEffect(() => {
  getAllItems().then(items => {
    const randItems = [items[randNums[0]], items[randNums[1]], items[randNums[2]], items[randNums[3]], items[randNums[4]]]
    setMostPopular(randItems)
  })
}, [])


  return (
    <div className="popular">
      <h2 className="popular__heading">{title}</h2>
      <div className="popular__container">
        {mostPopular.length > 0 &&
          mostPopular.map((item) => (
            <PopularCard key={Math.random()} id={item.id} category={item.category} name={item.name} image={item.image} price={item.price} />
          ))}
      </div>
    </div>
  );
}
