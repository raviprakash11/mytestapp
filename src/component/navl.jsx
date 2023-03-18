import React from "react";
import { Link } from "react-router-dom";

function testNav() {
  return(
    <div>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blogs">Blog</Link>
    <Link to="/contact">Contact</Link>
  </div>
  );
}

export default testNav;