import { Link } from "react-router-dom";
import "./PopularCard.css";

export default function PopularCard({ name, image, price, category, id }) {
  // console.log(name, category, 'popular')
  return (
    <Link to={`product/${name}`} className="popular-card">
      <span className="popular-card__title">{name}</span>
      <img src={`https://hbrtheedcngbriamntkr.supabase.co/storage/v1/object/public/images/${image}`} alt="product" />
      <span className="popular__price">Price: {price}</span>
    </Link>
  );
}
