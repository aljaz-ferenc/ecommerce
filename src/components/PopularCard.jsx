import { Link } from "react-router-dom";
import "./PopularCard.css";

export default function PopularCard({ name, image, price, category, id }) {
  // console.log(name, category, 'popular')
  return (
    <Link to={`product/${name}`} className="popular-card">
      <span className="popular-card__title">{name}</span>
      <img src={`../../data/images/${image}`} alt="" />
      <span className="popular__price">Price: {price}</span>
    </Link>
  );
}
