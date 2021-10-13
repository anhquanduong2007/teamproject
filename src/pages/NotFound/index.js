import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
const NotFound = (props) => {
  const { classes } = props;
  return (
    <Grid container className= {classes.notFoud_page}>
      <Grid item md={10} className = {classes.notFoud_page_body}>
        <h1>404 Error Page</h1>
        <section className={classes["error-container"]}>
          <span className={classes["four"]}>
            <span className={classes["screen-reader-text"]}>4</span>
          </span>
          <span className={classes["zero"]}>
            <span className={classes["screen-reader-text"]}>0</span>
          </span>
          <span className={classes["four"]}>
            <span className={classes["screen-reader-text"]}>4</span>
          </span>
        </section>
        <div className={classes["zoom-area"]}>
           <div>Look like you're lost</div>
           <div>the page you are looking for not avaible!</div>
        </div>
        <div className={classes["link-container"]}>
          <Link to="/home" className={classes["more-link"]}>
            Back to home page
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};
NotFound.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(NotFound);
