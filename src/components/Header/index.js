import React from "react";
import "./styles.scss";
import { Avatar, Grid } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import logo from "assets/img/logo.png";
const Header = () => {
  return (
    <Grid container>
      <Grid item md={12} className="header">
        <div className="welcome-text">
          <div className="welcome-text-items">
            <span>Free Delivery:</span>
            <span>Take advantage of our time to save evnet</span>
          </div>
          <div className="welcome-text-items">
            <span>Free Returns *</span>
            <span>Satisfaction guaranteed</span>
          </div>
        </div>
        <div className="user">
          <Avatar
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
            className="avatar"
          />
          <i className="bx bx-chevron-down"></i>
        </div>
      </Grid>
      {/* Header Bottom */}
      <Grid item md={12} className="header-bottom">
        <div className="middel-inner">
          <form className="search">
            <div>
              <input placeholder="Search entire store here..." type="input" />
              <i className="bx bx-search"></i>
            </div>
          </form>
          <div className="header-bottom__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="cart">
            <div>
              <i className="bx bx-cart-alt"></i>
              <span>2 Item(S)</span>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item md = {12} className = "navigation">
          <NavLink to  = "/" exact activeClassName = "navigation--active">Home</NavLink>
          <NavLink to  = "/shop" activeClassName = "navigation--active">Shop</NavLink>
          <NavLink to  = "/aboutus" activeClassName = "navigation--active">About Us</NavLink>
          <div className = "sub-menu" activeClassName = "navigation--active">
              <div>
                  Pages <i className="bx bx-chevron-down"></i>
              </div>
          </div>
          <NavLink to  = "/blog" activeClassName = "navigation--active">Blog</NavLink>
          <NavLink to  = "/contactus" activeClassName = "navigation--active">Contact Us</NavLink>
      </Grid>
    </Grid>
  );
};

export default Header;
