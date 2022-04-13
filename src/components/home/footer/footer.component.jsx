import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "./footer.style.scss";

import truthSocial from "../../../assets/images/truth-social.png";
import facebook from "../../../assets/images/facebook.png";
import instagram from "../../../assets/images/instagram.png";
import twitter from "../../../assets/images/twiter.png";
import youtube from "../../../assets/images/youtube.png";


const Footer = () => {
    return(
        <section id="footer">
            <Container fluid>
                <Container>
                    <div className="footer-content">
                        <Row>
                            <Col lg={5}>
                                <div className="section1-wrapper">
                                    <div className="content">
                                        <div className="contact-details">
                                            <p className="contact-details-info">
                                                Finally a program designed for the health and wellness industry to capture the special Populations and Special Needs market. Find and talk to the Medical, Therapy, Fitness and Wellness Professionals in your area all across United States.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="section2-wrapper">
                                    <div className="content">
                                        <h3>Navigation</h3>
                                        <div className="list1">
                                            <ul>
                                                <li>
                                                    <a href="#">Health Professional</a>
                                                </li>
                                                <li>
                                                    <a href="#">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="#">Videos</a>
                                                </li>
                                                <li>
                                                    <a href="#">Surveys</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="section3-wrapper">
                                    <div className="content">
                                        <div className="list2">
                                            <ul>
                                                <li>
                                                    <a href="#">About us</a>
                                                </li>
                                                <li>
                                                    <a href="#">Contact us</a>
                                                </li>
                                                <li>
                                                    <a href="#">Terms of Use</a>
                                                </li>
                                                <li>
                                                    <a href="#">How it Works</a>
                                                </li>
                                                <li>
                                                    <a href="#">Privacy Policy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className="section4-wrapper">
                                    <div className="content">
                                        <div className="social-icon">
                                            <div className="social-icon1">
                                                <a href="#"><img src={truthSocial} /></a>
                                            </div>
                                            <div className="social-icon1">
                                                <a href="#"><img src={facebook} /></a>
                                            </div>
                                            <div className="social-icon2">
                                                <a href="#"><img src={instagram} /></a>
                                            </div>
                                            <div className="social-icon3">
                                                <a href="#"><img src={twitter} /></a>
                                            </div>
                                            <div className="social-icon4">
                                                <a href="#"><img src={youtube} /></a>
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

export default Footer;