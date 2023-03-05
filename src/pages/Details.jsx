import { Navigate, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCategoryItems, getSpecificItem } from "../../supabase/supabase";
import "./Details.css";
import { Link } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";

export default function Details() {
  const [item, setItem] = useState();
  const [similarItems, setSimilarItems] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const [wasAdded, setWasAdded] = useState(false);

  useEffect(() => {
    getSpecificItem(params.product)
      .then((item) => {
        setItem(item);
        getCategoryItems(item[0].category).then((items) => {
          const similar = [];
          let i = 0;
          while (similar.length < 2) {
            if (similar.some((el) => item.id === el.id)) {
              return;
            } else {
              similar.push(items[i]);
            }
            i++;
          }
          setSimilarItems(similar);
        });
      })
      .catch((err) => navigate("*"));
  }, []);

  function handleAddToCart() {
    setWasAdded(true);
    setTimeout(() => {
      setWasAdded(false);
    }, 2500);
  }

  return (
    <>
      <div
        style={{ height: wasAdded && 2 + "rem", color: wasAdded && "#fff" }}
        className="added"
      >
        Item has been added to cart
      </div>
      <div className="product">
        {similarItems && (
          <img
            className="product__image"
            src={`https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/${item[0].image}`}
            alt=""
          />
        )}
        <div className="product__text">
          {similarItems && <div className="product__name">{item[0].name}</div>}
          {similarItems && (
            <div className="product__description">{item[0].description}</div>
          )}
          {similarItems && (
            <div className="product__price">Price: {item[0].price}</div>
          )}
          <AddToCartButton item={item} handleAddToCart={handleAddToCart} />
        </div>
        <div className="also-bought__container">
          <h2 className="bought-together__heading">
            Frequently bought together:
          </h2>
          <div className="similar-items">
            {similarItems && (
              <div
                onClick={() => navigate(`/product/${similarItems[0].name}`)}
                className="also-bought"
              >
                {similarItems && (
                  <img
                    className="also-bought__image"
                    src={`https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/${similarItems[0].image}`}
                    alt=""
                  />
                )}
                <Link
                  to={`/product/${similarItems[0].name}`}
                  className="also-bought__text"
                >
                  {similarItems && <h3>{similarItems[0].name}</h3>}
                  {similarItems && <div>{similarItems[0].description}</div>}
                  {similarItems && <div>${similarItems[0].price}</div>}
                </Link>
              </div>
            )}
            {similarItems && (
              <Link
                to={`/product/${similarItems[1].name}`}
                className="also-bought"
              >
                {similarItems && (
                  <img
                    className="also-bought__image"
                    src={`https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/${similarItems[1].image}`}
                    alt=""
                  />
                )}
                <div className="also-bought__text">
                  {similarItems && <h3>{similarItems[1].name}</h3>}
                  {similarItems && <div>{similarItems[1].description}</div>}
                  {similarItems && <div>${similarItems[1].price}</div>}
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
