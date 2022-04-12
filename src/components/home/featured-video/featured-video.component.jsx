import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./featured-video.style.scss";

import blog1 from "../../../assets/images/blog1.png";

const FeaturedVideo = () => {
    return(
        <section id="featured">
            <Container fluid>
                <Container>
                    <div className="featured-content">
                        <Row>
                            <Col lg={6}>
                                <div className="featured-detail-wrapper">
                                    <div className="featured">
                                        <div className="heading">
                                            <h2>Featured Video</h2>
                                        </div>
                                        <div className="desc">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </div>
                                        <div className="link">
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="featured-video-wrapper">
                                    <div className="featured-video">
                                        <div className="img">
                                            <iframe className="featured-iframe" src="https://www.youtube.com/embed/HndV87XpkWg" 
                                            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                                            encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                            </iframe>
                                        </div>
                                        <div className="link-2">
                                            <a href="#">View All Videos <i className="fa fa-angle-right ml-2" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
        </section>
    )
}

export default FeaturedVideo;