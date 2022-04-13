import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./clients.style.scss";

import c1 from "../../../assets/images/c1.png";
import c2 from "../../../assets/images/c2.png";
import c3 from "../../../assets/images/c3.png";
import c4 from "../../../assets/images/c4.png";
import c5 from "../../../assets/images/c5.png";
import c6 from "../../../assets/images/c6.png";
import c7 from "../../../assets/images/c7.png";


const Clients = () => {
    return(
        <section id="clients">
            <Container fluid>
                <Container>
                    <div className="clients-content">
                        <Row>
                            <Col lg={12}>
                                <div class="clients-wrapper">
                                    <div class="clients">
                                        <div class="heading">
                                            <h1>Clients</h1>
                                            <h2>Testimonials</h2>
                                        </div>
                                        <div class="map">
                                            <div class="clients-imgs">
                                                <div class="client1">
                                                    <img src={c1} class="c-img-1"/>
                                                </div>
                                                <div class="client2">
                                                    <img src={c2} class="c-img-2"/>
                                                </div>
                                                <div class="client3">
                                                    <img src={c3} class="c-img-3"/>
                                                </div>
                                                <div class="client4">
                                                    <img src={c4} class="c-img-4"/>
                                                </div>
                                                <div class="client5">
                                                    <img src={c5} class="c-img-5"/>
                                                </div>
                                                <div class="client6">
                                                    <img src={c6} class="c-img-6"/>
                                                </div>
                                                <div class="client7">
                                                    <img src={c7} class="c-img-7"/>
                                                </div>
                                            </div>
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

export default Clients;