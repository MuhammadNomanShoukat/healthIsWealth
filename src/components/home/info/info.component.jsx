import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./info.style.scss";

import infoImg from "../../../assets/images/info.png";

const Info = () => {
    return(
        <section id="information">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div class="information-content">
                            <div class="information-wrapper">
                                <div class="information d-md-flex flex-lg-row flex-xs-column">
                                    <Row>
                                        <Col lg={3}>
                                            <div class="info-img">
                                                <img src={infoImg} class="img-fluid" alt="" />
                                            </div>
                                        </Col>
                                        <Col lg={9} className="d-flex align-items-center">
                                            <div className="info-text text-center">
                                                <p>Finally a program designed for the health and wellness Industry to capture the Special Populations and Special Needs market. Find and 
                                                talk to the Medical, Therapy, Fitness and Wellness Professionals in your area all across United States.</p>
                                            </div>
                                        </Col>
                                    </Row>  
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}

export default Info;