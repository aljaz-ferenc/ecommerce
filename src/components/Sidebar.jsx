import "./Sidebar.css";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { Navigate, useNavigate} from "react-router";
import { Link} from "react-router-dom";

export default function Sidebar() {
  const sidebarRef = useRef()
  const categories = useSelector((state) => state.store);
const navigate = useNavigate()


  return (
    <div className="sidebar">
      <Link onClick={() => navigate('../electronics')} className="sidebar__category" >Electronics</Link>
      <Link onClick={() => history.push('../clothing')} className="sidebar__category">Clothing</Link>
      <Link onClick={() => history.push('../beauty')} className="sidebar__category">Beauty</Link>
      <Link to='../sports' className="sidebar__category">Sports</Link>
      <Link to='../home and garden' className="sidebar__category">Home and Garden</Link>
      <Link to='../books' className="sidebar__category">Books</Link>
    </div>
  );
}
