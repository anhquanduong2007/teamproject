import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "./style.css";
import product18 from "assets/img/product18.jpg";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
const ProductHome = (props) => {
  const { classes } = props;
  return (
    <Grid item md={10} className = "product_area">
      <Swiper navigation={true} slidesPerView={4} spaceBetween = {30} loop={true}>
        <SwiperSlide>
          <Grid container >
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container>
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container>
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
     
         
        </SwiperSlide>
        <SwiperSlide>
          <Grid container >
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
     
         
        </SwiperSlide>
        <SwiperSlide>
          <Grid container >
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item md={12}>
              <img
                src={product18}
                alt={product18}
                style={{ maxWidth: "100%" }}
              />
              <h6>fafafafaf</h6>
              <h6>60.000</h6>
            </Grid>
          </Grid>
     
         
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
};
ProductHome.propTypes = {
  classes: PropTypes.object,
};

export default withStyles()(ProductHome);
