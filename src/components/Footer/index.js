import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <Grid container justifyContent="center" className="footer">
      <Grid container item md={9} className="footer-top">
        <Grid item md={2} className="widgets-container">
          <h3>Infomation</h3>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            className="widgets-container__menu"
          >
            <Link>About Us</Link>
            <Link>Delivery Information</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms & Conditions</Link>
            <Link>Contact Us</Link>
            <Link>Returns</Link>
          </Box>
        </Grid>
        <Grid item md={2} className="widgets-container">
          <h3>Extras</h3>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            className="widgets-container__menu"
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
          className="widgets-container widgets-container-contact-us"
        >
          <h3>Contact Us</h3>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            className="footer-contact"
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
            className="contact-us-icon"
          >
            <Link>
              <i className="bx bxl-twitter"></i>
            </Link>
            <Link>
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
        <Grid item md={4} className="widgets-container">
          <h3>Join Our Newsletter Now</h3>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            className="newleter-content"
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
      <Grid container item md={9} className="footer-bottom">
        <Grid item md={6} className="copyright-area">
          <p>
            @2021 Mede with ❤️ By <span>Nhóm 8</span>
          </p>
        </Grid>
        <Grid item md={6} className="footer-custom-links">
          <Link>Order History</Link>
          <Link>Wish List</Link>
          <Link>Newsletter</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
