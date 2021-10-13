import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
const BannerSection = (props) => {
  const { classes, data } = props;
  return (
    <Grid container className={classes.banner_section}>
      {data.map((item) => {
        return (
          <Grid
            key={item.img}
            item
            md={data.length > 2 ? 4 : data.length > 1 ? 6 : 12}
            className={classes.banner_area}
          >
            <Link>
              <img src={item.img} alt={item.img} />
              <Box component="div" className={classes.border_img}></Box>
            </Link>
            {
              item.title ? ( 
                  <Box component="div" className={classes.banner_content}>
                  <h1>{item.title}</h1>
                  <Link>Discover Now</Link>
                </Box>
              ) : <></>
            }
          </Grid>
        );
      })}
    </Grid>
  );
};
BannerSection.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array,
};
export default withStyles(styles)(BannerSection);
