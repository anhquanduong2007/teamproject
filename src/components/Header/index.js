import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Box, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import logo from "assets/img/logo.png";
const Header = (props) => {
  const { classes } = props;
  return (
    <Grid container>
      <Grid container item md={12} className={classes.header_welcome}>
        <Grid item md={7} className={classes.welcome_text}>
          <p>
            <span>Free Delivery: </span>Take advantage of our time to save event
          </p>
          <p>
            <span> Free Returns* </span>Satisfaction guaranteed
          </p>
        </Grid>
        <Grid item md={5} className={classes.acount}>
          <Box component="div">
            My Account <i className="bx bx-chevron-down"></i>
          </Box>
        </Grid>
      </Grid>
      <Grid container item md={12} className={classes.header_main}>
        <Grid item md={12} className={classes.header_content}>
          <div className={classes.header_main_item}>
            <div>
              <input placeholder="Search entire store here..." type="text" />
              <i className="bx bx-search"></i>
            </div>
          </div>
          <div className={classes.header_main_item}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.header_main_item}>
            <div>
              <i className="bx bxs-shopping-bags"></i>
              <div>0 Item(S)</div>
            </div>
          </div>
        </Grid>
        <Grid item md={10} className={classes.navigation}>
          <NavLink to="/home" exact activeClassName={classes.active}>
            Home
          </NavLink>
          <NavLink to="/shop" activeClassName={classes.active}>
            Shop
          </NavLink>
          <NavLink to="/aboutUs" activeClassName={classes.active}>
            About Us
          </NavLink>
          <div className={classes.sub_menu}>
            <div>
              Pages <i className="bx bx-chevron-down"></i>
            </div>
          </div>
          <NavLink to="/blog" activeClassName={classes.active}>
            Blog
          </NavLink>
          <NavLink to="contactUs" activeClassName={classes.active}>
            Contact Us
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
};
Header.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Header);
