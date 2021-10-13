import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import { Grid } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "./style.css";
import SwiperCore, {
  Pagination,
  EffectFade,
  Autoplay,
  Navigation,
} from "swiper";
import banner1 from "assets/img/slider4.jpg";
import banner2 from "assets/img/slider5.jpg";
import banner3 from "assets/img/slider6.jpg";
SwiperCore.use([EffectFade, Pagination, Autoplay, Navigation]);
const Banner = (props) => {
  const { classes } = props;
  return (
    <Grid item md={12} className = {classes.slide}>
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        effect={"fade"}
      >
        <SwiperSlide>
          <div
            className={classes.slider}
            style={{ backgroundImage: `url(${banner1})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={classes.slider}
            style={{ backgroundImage: `url(${banner2})` }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={classes.slider}
            style={{ backgroundImage: `url(${banner3})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
};
Banner.propTypes = {
  classes: PropTypes.object,
};
export default withStyles(styles)(Banner);
