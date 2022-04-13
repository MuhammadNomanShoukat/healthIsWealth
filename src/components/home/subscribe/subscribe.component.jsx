import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "./subscribe.style.scss";

import blog1 from "../../../assets/images/blog1.png";

const Subscribe = () => {
    return(
        <section id="subscribe">
            <Container fluid>
                <Container>
                    <div className="subscribe-content">
                        <Row>
                            <Col lg={12}>
                                <div class="subscribe-wrapper">
                                    <div class="subscribe">
                                        <div class="heading">
                                            <h5 class="label">Get Notified</h5>
                                            <h2 class="heading1">Subscribe To Our Newsletter</h2>
                                            <h3 class="heading2">We send only once a month</h3>
                                        </div>
                                        <div class="form">
                                            <form>
                                                <div class="">
                                                    <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></div>
                                                        </div>
                                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Your email" />
                                                    </div>
                                                </div>
                                                <button class="btn btn-success" type="submit">
                                                    <FontAwesomeIcon icon={faPaperPlane} /> Subscribe
                                                </button>
                                            </form>
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

export default Subscribe;