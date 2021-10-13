import { Box, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import styles from "./styles";
import ProductHome from "components/ProductHome";
const ProductListHome = (props) => {
  const { classes } = props;
  const { path, url } = useRouteMatch();
  return (
    <Grid container className={classes.prodcut__list_home}>
      <Grid item md={10} className={classes.prodcut__list_content}>
        <h1>Sản phẩm của chúng tôi</h1>
        <h6>Các sản phẩm thiết kế hiện đại,mới nhất</h6>
        <Box component="div">
          <NavLink to={`${url}`} exact>
            Women's
          </NavLink>
          <NavLink to={`${url}/men`}>Men's</NavLink>
          <NavLink to={`${url}/kid`}>Kid's</NavLink>
          <NavLink to={`${url}/shoes`}>Shoes</NavLink>
        </Box>
      </Grid>
      <Switch>
        <Route exact path={path} component={ProductHome} />
        <Route path={`${path}/:category`} component={ProductHome} />
      </Switch>
    </Grid>
  );
};
ProductListHome.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(ProductListHome);
