import "./Banner.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Banner() {
  const cart = useSelector(state => state.cart)

  const numOfItems = cart.reduce((acc, el) => {
    return acc + +el.amount
  }, 0)

  return (
    <div className="banner">
      <span>Logo</span>
      <div className="search__container">
        <input className="search__input" type="text" placeholder="Search..." />
        <SearchIcon
        className="search__btn"
        color="green"
        />
      </div>
      <Link to='cart' className="banner__cart">
        <span>Cart ({numOfItems})</span>
        <ShoppingCartCheckoutSharpIcon
        color="primary"
        />
        </Link>
    </div>
  );
}
