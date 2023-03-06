import "./Banner.css";
import ShoppingCartCheckoutSharpIcon from "@mui/icons-material/ShoppingCartCheckoutSharp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { searchActions } from "../store/SearchSlice";
import { getAllItems } from "../../supabase/supabase";
import { useNavigate } from "react-router-dom";
import spinner from "../icons/search-spinner.svg";
import logo from '../icons/vite.svg'

export default function Banner() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  let searchResults = [];
  let items = [];
  const [searchInput, setSearchInput] = useState("");
  const [searching, setSearching] = useState(false);
  const dispatch = useDispatch();

  const numOfItems = cart.reduce((acc, el) => {
    return acc + +el.amount;
  }, 0);

  function getSearch(e) {
    if (searchInput === "" || !searchInput) return;
    getAllItems()
      .then((data) => items.push(data))
      .then(filterItems)
      .then(setSearching(false))
  }

  function filterItems() {
    searchResults = [];
    items[0].map((item) => {
      if (item.name.toLowerCase().includes(searchInput.trim().toLowerCase())) {
        searchResults.push(item);
      }
    });
    dispatch(searchActions.setSearch(searchResults));
    setSearching(false);
    navigate("/search-results");
  }

  function handleInput(e) {
    setSearchInput(e.target.value);
    if (searchInput) {
      setSearching(true);
    }
  }

  useEffect(() => {
    if (searchInput === "") {
      setSearching(false);
      return;
    }
    const timeout = setTimeout(() => {
      getSearch();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

  return (
    <div className="banner">
      <Link className="logo" to="/">
        <img className="logo__image" src={logo} alt="logo" />
        <span className="logo__text">Store</span>
      </Link>
      <form className="search__container" action="">
        <input
          onChange={handleInput}
          className="search__input"
          type="text"
          placeholder="Search..."
        />
        {searching && <img src={spinner} alt="" />}
      </form>
      <Link to="cart" className="banner__cart">
        <span className="cart-text">Cart</span>
        <span> ({numOfItems})</span>
        <ShoppingCartCheckoutSharpIcon color="primary" />
      </Link>
    </div>
  );
}
