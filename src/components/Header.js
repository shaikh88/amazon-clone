import React,{useState} from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { db } from "../services/firebase";
import {Link} from 'react-router-dom';

function Header({ cart,setProducts,setSearch,search }) {


// just to prevent page re-load

  const runquery=(e)=> {
    e.preventDefault();
    console.log(search);
    console.log("effect has run");
  }



  return (
    <div className="header">
      <div className="header__option">
        <h3 className="header__optionLineTwo">NOT</h3>
      </div>
      <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      <form className="header__search" onSubmit={runquery}>
        <input
          className="header__searchInput"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <SearchIcon
          type="submit"
          onSubmit={(e) => e.preventDefault()}
          className="header__searchIcon"
        />
      </form>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            {cart}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
