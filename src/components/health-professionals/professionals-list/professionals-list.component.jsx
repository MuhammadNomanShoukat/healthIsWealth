import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faGlobeAmericas, faCommentDots, faPhoneAlt, faHeart } from '@fortawesome/free-solid-svg-icons'

import Card_Img from "../../../assets/images/bowers.png";
import Ad_Img from "../../../assets/images/ads.jpg";

import "./professionals-list.style.scss";

const ProfessionalsList = () => {
    return(
        <section id="professionals_list">
            <Container fluid>
                <Container>
                    <div className="professionals-list-content">
                        <Row>
                            <Col lg={9}>
                                <div class="list-wrapper">
                                    <div class="card-wrapper">
                                        <div class="card-content">
                                            <Row>
                                                <Col lg={3}>
                                                    <div class="other-info-wrapper">
                                                        <div class="other-content">
                                                            <div class="img">
                                                                <img src={Card_Img} />
                                                            </div>
                                                            <div class="rating">
                                                                <div class="star-wrapper">
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star checked"></span>
                                                                <span class="fa fa-star"></span>
                                                                </div>
                                                                <div class="rating-count">
                                                                <span>3.0</span>
                                                                </div>
                                                            </div>
                                                            <div class="reviews">
                                                                <span>4 Reviews</span>
                                                            </div>
                                                            <div class="favorite">
                                                                <a href=""><span><FontAwesomeIcon icon={faHeart} /> Favorite</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={9}>
                                                    <div class="basic-info-wrapper">
                                                        <div class="info-content">
                                                            <div class="heading">
                                                                <a href="detail.html">
                                                                <h2>Bowers family chiropractor</h2>
                                                                </a>
                                                            </div>
                                                            <div class="tags">
                                                                <span class="tag">Chiroprator</span>
                                                            </div>
                                                            <div class="location">
                                                                <div class="location-icon">
                                                                    <FontAwesomeIcon icon={faMapMarker} />
                                                                </div>
                                                                <div class="address">
                                                                <p>509 Cottage Grove Rd</p>
                                                                <p>(2 more locations)</p>
                                                                </div>
                                                            </div>
                                                            <div class="contact-tags">
                                                                <div class="tag">
                                                                <a href="" title="Phone">
                                                                    <FontAwesomeIcon icon={faPhoneAlt} />
                                                                <span>Phone</span>
                                                                </a>
                                                                </div>
                                                                <div class="tag">
                                                                <a href="" title="Map">
                                                                    <FontAwesomeIcon icon={faMapMarker} />
                                                                <span>Map</span>
                                                                </a>
                                                                </div>
                                                                <div class="tag">
                                                                <a href="" title="Website">
                                                                    <FontAwesomeIcon icon={faGlobeAmericas} />
                                                                <span>Website</span>
                                                                </a>
                                                                </div>
                                                            </div>
                                                            <div class="view-profile">
                                                                <div class="profile-link">
                                                                <a href="detail.html">view profile for full details</a>
                                                                </div>
                                                                <div class="chat-now">
                                                                <a href="#" title="Chat Now">
                                                                    <p>CHAT NOW</p>
                                                                    <FontAwesomeIcon icon={faCommentDots} />
                                                                </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div class="ads-wrapper">
                                    <div class="ads-content">
                                        <img src={Ad_Img} alt="" />
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

export default ProfessionalsList;