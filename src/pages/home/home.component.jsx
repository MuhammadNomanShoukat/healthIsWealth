import React from "react";

import Banner from "../../components/home/banner/banner.component";
import Info from "../../components/home/info/info.component";
import Category from "../../components/home/category/category.component";
import HealthBlogs from "../../components/home/health_blogs/health_blogs.component";
import FeaturedVideo from "../../components/home/featured-video/featured-video.component";

import "./home.styles.scss";

const Home = () => {
    return(
        <>
            <Banner />
            <Info />
            <Category />
            <HealthBlogs />
            <FeaturedVideo />
        </>
    )
}

export default Home;