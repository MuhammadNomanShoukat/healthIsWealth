import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./health_blogs.style.scss";

import blog1 from "../../../assets/images/blog1.png";
import blog2 from "../../../assets/images/blog2.png";

const HealthBlogs = () => {
    return(
        <section id="health_blogs">
            <Container fluid>
                <Container>
                    <div className="blog-content">
                        <Row>
                            <Col lg={12}>
                                <div className="heading-wrapper">
                                    <div className="heading">
                                        <h1>Health Blogs</h1>
                                        <p>See the developments that have occurred to Skillines in the world</p>
                                    </div>
                                </div>
                            </Col>
                        </Row> 
                        <Row>
                            <Col lg={6}>
                                <div className="blog-wrapper">
                                    <div className="blog-card">
                                        <div className="card-img">
                                            <img src={blog1} />
                                        </div>
                                        <div className="details">
                                            <p className="card-label">Featured Blog</p>
                                            <p className="card-title">The Importance of In-Person Addiction and Alcoholism Treatment During the COVID 19 Pandemic</p>
                                            <p className="card-desc">Originally coming from America, Black Friday is the day after Thanks giving which sees.</p>
                                            <a href="#">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="blog-list-wrapper">
                                    <div className="blog-card">
                                        <div className="card-img">
                                            <img src={blog2} />
                                            <p className="card-label">NEWS</p>
                                        </div>
                                        <div className="details">
                                            <p className="card-title">Depression, Anxiety, and Substance Abuse on the Rise During the Pandemic </p>
                                            <p className="card-desc">Originally coming from America, Black Friday is the day after Thanks giving which sees.</p>
                                        </div>
                                    </div>
                                    <div className="blog-card">
                                        <div className="card-img">
                                            <img src={blog2} />
                                            <p className="card-label">NEWS</p>
                                        </div>
                                        <div className="details">
                                            <p className="card-title">Depression, Anxiety, and Substance Abuse on the Rise During the Pandemic </p>
                                            <p className="card-desc">Originally coming from America, Black Friday is the day after Thanks giving which sees.</p>
                                        </div>
                                    </div>
                                    <div className="blog-card">
                                        <div className="card-img">
                                            <img src={blog2} />
                                            <p className="card-label">NEWS</p>
                                        </div>
                                        <div className="details">
                                            <p className="card-title">Depression, Anxiety, and Substance Abuse on the Rise During the Pandemic </p>
                                            <p className="card-desc">Originally coming from America, Black Friday is the day after Thanks giving which sees.</p>
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

export default HealthBlogs;