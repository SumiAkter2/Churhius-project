import React from "react";
import "./HomePage2.css";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import logo from "../../images/logo2.png";
import Banner from "./Banner";
const Homepage2 = () => {
  return (
    <div>
      <div className="Nav-container">
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>

        <nav className="nav-link">
          <ul>
            <li>HOME</li>
            <li>Pages</li>
            <li>Event</li>
            <li>Features</li>
            <li>Gallery</li>
            <li>Block</li>
            <li>Shop</li>
          </ul>
        </nav>
        <div className="nav-link">
          <ul>
            <li>
              <CiSearch size="25px" />
            </li>
            <li>
              <HiOutlineShoppingCart size="20px"  />
            </li>
            <li>
              <button className="nav-btn">GIVE</button>
            </li>
          </ul>
        </div>
          </div>
          <Banner/>
    </div>
  );
};

export default Homepage2;
