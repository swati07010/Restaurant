import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import products from "./Productlist";

function Nav({ initialItems }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    setSearchTerm(e.target.value);
  };

  const exactMatch =
    Array.isArray(products) &&
    products.find(
      (product) => product.name.toLowerCase() === searchTerm.toLowerCase()
    );

  return (
    <div className="decoration">
      <img
        className="logo"
        src="https://i.ytimg.com/vi/AUml2IgSFCQ/maxresdefault.jpg"
        alt="Logo"
      />
      <ul className="nav-ul">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>{" "}
        </li>{" "}
        <li>
          <Link to="/manu">Menu</Link>{" "}
        </li>{" "}
        <li>
          <Link to="/review">Review</Link>{" "}
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link className="bi bi-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>{" "}
        <li>
          <Link to="/signup">SignUp</Link>{" "}
        </li>
      </ul>

      {/* Conditionally render the exact match */}
      {exactMatch && (
        <div>
          <ul>
            <li key={exactMatch.id}>
              <img
                className="imge"
                src={exactMatch.image}
                alt={exactMatch.name}
              />
              <div>Name: {exactMatch.name}</div>
              <div>Price: ${exactMatch.price}</div>
              <div>Review: {exactMatch.review}</div>
              {/* Add other details as needed */}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
