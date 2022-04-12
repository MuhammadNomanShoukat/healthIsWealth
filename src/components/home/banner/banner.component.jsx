import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import FilterForm from "./filter-form/filter-form.component";

import "./banner.style.scss";

const Banner = () => {
    return(
        <section id="banner">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="banner-wrapper">
                            <div className="banner-content">
                                <div className="banner-heading">
                                    <h1>Find the Medical, Therapy, Fitness and Wellness Professional in your area</h1>
                                </div>
                                <FilterForm  />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;