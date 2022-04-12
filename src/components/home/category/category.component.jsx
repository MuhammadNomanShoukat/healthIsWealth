import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faDumbbell, faTooth, faPersonRunning, faEarListen, faUniversalAccess } from '@fortawesome/free-solid-svg-icons'

import "./category.style.scss";

import infoImg from "../../../assets/images/info.png";

const Category = () => {
    return(
        <section id="category">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div class="category-wrapper">
                            <div class="category">
                                <div>
                                    <h4>Browse Healthcare Professionals by Category</h4>
                                </div>
                                <div class="category-list"> 
                                    <ul class="d-sm-flex flex-xs-column py-lg-4">
                                        <li>
                                        <div class="icon-block">
                                            <div class="icon-wrapper">
                                            <span class="icon"><FontAwesomeIcon icon={faStethoscope} /></span>
                                            </div>
                                            <div class="icon-link">
                                            <a href='#'>Medical Doctors</a>
                                            </div>
                                        </div>
                                        </li>
                                        <li>
                                        <div class="icon-block">
                                            <div class="icon-wrapper">
                                            <span class="icon"><FontAwesomeIcon icon={faDumbbell} /></span>
                                            </div>
                                            <div class="icon-link">
                                            <a href='#'>Fitness</a>
                                            </div>
                                        </div>
                                        </li>
                                        <li>
                                        <div class="icon-block">
                                            <div class="icon-wrapper">
                                            <span class="icon"><FontAwesomeIcon icon={faUniversalAccess} /></span>
                                            </div>
                                            <div class="icon-link">
                                            <a href='#'>Chiropractor</a>
                                            </div>
                                        </div>
                                        </li>
                                        <li>
                                        <div class="icon-block">
                                            <div class="icon-wrapper">
                                            <span class="icon"><FontAwesomeIcon icon={faTooth} /></span>
                                            </div>
                                            <div class="icon-link">
                                            <a href='#'>Dentists</a>
                                            </div>
                                        </div>
                                        </li>
                                        <li>
                                        <div class="icon-block">
                                            <div class="icon-wrapper">
                                            <span class="icon"><FontAwesomeIcon icon={faPersonRunning} /></span>
                                            </div>
                                            <div class="icon-link">
                                            <a href='#'>Wellness</a>
                                            </div>
                                        </div>
                                        </li>
                                        <li>
                                        <div class="icon-block">
                                            <div class="icon-wrapper">
                                            <span class="icon"><FontAwesomeIcon icon={faEarListen} /></span>
                                            </div>
                                            <div class="icon-link">
                                            <a href='#'>Educator</a>
                                            </div>
                                        </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="text-center view-link">
                                    <a href="#">View All Specialities</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}

export default Category;