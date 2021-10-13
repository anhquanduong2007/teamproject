import React from 'react'
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import { Grid } from '@material-ui/core';
import Banner from "components/Banner";
import BannerSection from "components/BannerSection";
import ProductListHome from "components/ProductListHome";
import Banner4 from "assets/img/banner8.jpg";
import Banner5 from "assets/img/banner9.jpg";
import Banner6 from "assets/img/banner10.jpg";
import Banner7 from "assets/img/banner11.jpg";
import Banner8 from "assets/img/banner12.jpg";
const Home = (props) => {
    const data1 = [
        {
            img: Banner4,
        },
        {
            img: Banner5,
        },
        {
            img: Banner6,
        }
    ];
    const data2 = [
        {
            img: Banner7,
            title: "Handbag Men’s Collection"
        },
        {
            img: Banner8,
            title: "Sneaker Men’s Collection"
        },
    ]
    const {classes} = props;
    return (
        <Grid container>
            <Banner/>
            <BannerSection data = {data1}/>
            <ProductListHome/>
            <BannerSection data = {data2}/>
        </Grid>
    )
};
Home.propTypes = {
    classes: PropTypes.object,
}
export default withStyles(styles)(Home);
