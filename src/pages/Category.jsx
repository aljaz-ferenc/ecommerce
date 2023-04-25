import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { getCategoryItems, getCategory } from "../../supabase/supabase";
import "./Category.css";

export default function Category() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true);
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    getCategoryItems(params.category).then((items) => {
      setItems(items);
    });
    getCategory(params.category).then((cat) => setCategory(cat[0]));
  }, []);

  function count() {
    setLoadCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    if (loadCount == items.length) {
      setIsloading(false);
    }
  }, [loadCount, items]);

  return (
    <>
          {isLoading && <h3 className="loading-text">Loading...</h3>}
      <div className="products__layout">
        <div className="products">
          <div className="products__top">
            <h2 className="products__heading">
              {category && category.category.toUpperCase()}
            </h2>
            <p className="category__text">{category && category.description}</p>
          </div>
          {isLoading || (
            <div
              style={{
                display: isLoading ? "none" : "block",
                opacity: isLoading ? 0 : 1,
              }}
              className="products__list"
            >
              <div className="products__items">
                {items &&
                  items.map((item) => (
                    <ProductCard
                      count={count}
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
          )}
        </div>
      </div>
    </>
  );
}
