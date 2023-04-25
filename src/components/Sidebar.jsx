import "./Sidebar.css";
import {useNavigate } from "react-router";
import { Link} from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  function redirect(path) {
    navigate(path);
    history.push();
  }

  return (
    <div className="sidebar">
      <Link
        onClick={() => redirect("/electronics")}
        className="sidebar__category"
      >
        Electronics
      </Link>
      <Link onClick={() => redirect("/clothing")} className="sidebar__category">
        Clothing
      </Link>
      <Link onClick={() => redirect("/beauty")} className="sidebar__category">
        Beauty
      </Link>
      <Link onClick={() => redirect("/sports")} className="sidebar__category">
        Sports
      </Link>
      <Link
        onClick={() => redirect("/home and garden")}
        className="sidebar__category"
      >
        Home and Garden
      </Link>
      <Link onClick={() => redirect("/books")} className="sidebar__category">
        Books
      </Link>
    </div>
  );
}
