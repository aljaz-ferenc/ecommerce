import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { getCategoryItems, getCategory } from "../../supabase/supabase";
import "./Category.css";

export default function Category() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState()
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getCategoryItems(params.category).then((items) => {
      setItems(items);
    })
    getCategory(params.category).then(cat => setCategory(cat[0]))

  }, []);


  return (
    <div className="products__layout">
      <Sidebar />
      <div className="products">
        <div className="products__top">
          <h2 className="products__heading">
            {category && category.category.toUpperCase()}
          </h2>
          <p className="category__text">{category && category.description}</p>
        </div>
        <div className="products__list">
          <div className="products__items">
            {items &&
              items.map((item) => (
                <ProductCard
                  key={item.name}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
