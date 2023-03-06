import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>The page you're looking for doesn't exist 😭</h1>
      <Link to="/">Go back...</Link>
    </div>
  );
}
