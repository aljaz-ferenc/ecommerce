import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import './SearchResults.css'

export default function SearchResults() {
  const items = useSelector((state) => state.search);

  return (
    <div className="search-results">
      {items[0] &&
        items[0].map(item => (
            <ProductCard
              key={item.id}
              title={item.name}
              description={item.description}
              price={item.price.slice(1)}
              image={item.image}
              id={item.id}
            />
        ))}
    </div>
  );
}
