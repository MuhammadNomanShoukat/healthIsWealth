import React from "react";

import Banner from "../../components/home/banner/banner.component";
import Info from "../../components/home/info/info.component";
import Category from "../../components/home/category/category.component";
import HealthBlogs from "../../components/home/health_blogs/health_blogs.component";
import FeaturedVideo from "../../components/home/featured-video/featured-video.component";
import Survey from "../../components/home/survey/survey.component";
import Clients from "../../components/home/clients/clients.component";
import Subscribe from "../../components/home/subscribe/subscribe.component";
import Footer from "../../components/home/footer/footer.component";

import "./home.styles.scss";

const Home = () => {
    return(
        <>
            <Banner />
            <Info />
            <Category />
            <HealthBlogs />
            <FeaturedVideo />
            <Survey />
            <Clients />
            <Subscribe />
            <Footer />
        </>
    )
}

export default Home;