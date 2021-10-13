import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
const Footer = (props) => {
  const { classes } = props;
  return (
    <Grid container justifyContent="center" className={classes.footer}>
      <Grid container item md={9} className = {classes.footer_top}>
        <Grid item md={2} className={classes.widgets_container}>
          <h3>Information</h3>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            className={classes.footer_menu}
          >
            <Link>About Us</Link>
            <Link>Delivery Information</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
            <Link>Contact Us</Link>
            <Link>Returns</Link>
          </Box>
        </Grid>
        <Grid item md={2} className={classes.widgets_container}>
          <h3>Extras</h3>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            className={classes.footer_menu}
          >
            <Link>Brands</Link>
            <Link>Gift Certificates</Link>
            <Link>Affiliate</Link>
            <Link>Specials</Link>
            <Link>Site Map</Link>
            <Link>My Account</Link>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          className={`${classes.widgets_container} ${classes.contact_us}`}
        >
          <h3>Contact Us</h3>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            className={classes.footer_contact}
          >
            <p>
              Address: 6688 Princess Road, London, Greater London BAS 23JK, UK
            </p>
            <p>
              Phone: <span>(+012) 800 456 789 - 987</span>
            </p>
            <p>Email: demo@example.com</p>
          </Box>
          <Box
            component="div"
            display="flex"
            justifyContent="flex-start"
            className={classes["contact_us-icon"]}
          >
            <Link>
              {" "}
              <i className="bx bxl-twitter"></i>
            </Link>
            <Link>
              {" "}
              <i className="bx bxl-google-plus"></i>
            </Link>
            <Link>
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link>
              <i className="bx bxl-youtube"></i>
            </Link>
          </Box>
        </Grid>
        <Grid item md={4} className={classes.widgets_container}>
          <h3>Join Our Newsletter Now</h3>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            className={classes["newleter-content"]}
          >
            <p>
              Exceptional quality. Ethical factories. Sign up to enjoy free U.S.
              shipping and returns on your first order.
            </p>
            <input type="text" placeholder="Enter your email address here..." />
            <button>SUBSCRIBE!</button>
          </Box>
        </Grid>
      </Grid>
      <Grid container item md={11} className = {classes.footer_bottom}>
          <Grid item md = {6} className = {classes.copyright_area}>
            <p>@2021 Mede with ❤️ By <span>Nhóm 8</span></p>
          </Grid>
          <Grid item md = {6} className = {classes.footer_custom_links}>
            <Link>Order History</Link>
            <Link>Wish List</Link>
            <Link>Newsletter</Link>
          </Grid>
      </Grid>
    </Grid>
  );
};
Footer.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Footer);
