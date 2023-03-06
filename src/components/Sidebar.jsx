import "./Sidebar.css";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { Navigate, useNavigate} from "react-router";
import { Link, NavLink} from "react-router-dom";
import Category from "../pages/Category";

export default function Sidebar() {
  const sidebarRef = useRef()
  const categories = useSelector((state) => state.store);
const navigate = useNavigate()

function redirect (path){
  navigate(path)
  history.push()
}

console.log(Link)

  return (
    <div className="sidebar">
      <Link onClick={() => redirect('/electronics')}className="sidebar__category" >Electronics</Link>
      <Link onClick={() => redirect('/clothing')} className="sidebar__category">Clothing</Link>
      <Link onClick={() => redirect('/beauty')} className="sidebar__category">Beauty</Link>
      <Link onClick={() => redirect('/sports')} className="sidebar__category">Sports</Link>
      <Link onClick={() => redirect('/home and garden')} className="sidebar__category">Home and Garden</Link>
      <Link onClick={() => redirect('/books')} className="sidebar__category">Books</Link>
    </div>
  );
}
