import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

function Header({ title }) {
  return (
    <header className="p-5 bg-blue-500 text-white text-center text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow">
          <Link to={"/"}>{title}</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link id="cart" to={"/cart"}>
            Cart
          </Link>
        </div>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </header>
  );
}

export default Header;
