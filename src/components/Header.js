import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

const Header = () => {
  // In my understanding here we have created a custom hook
  // This hook holds the state of a particular property
  // In this items in the cart.
  // This hook is sort of like a global state that can be called
  // In any component whatsoever. So no prop drilling.
  // Earlier we were creating states in a particular components and then
  // later used to pass it down to children component if needed.
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      {/* Logo in the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      {/* Search bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links on the right */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Potion</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2st link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3st link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      {/* Basket icon with a dynamic number */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* Shopping basket icon */}
          <ShoppingBasketIcon />
          {/* Number of items in the basket */}
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Header;
