import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./survey.style.scss";

import blog1 from "../../../assets/images/blog1.png";

const Survey = () => {
    return(
        <section id="survey">
            <Container fluid>
                <Container>
                    <div className="survey-content">
                        <Row>
                            <Col lg={12}>
                            <div class="survey-wrapper">
                                <div class="survey">
                                    <div class="heading">
                                        <div class="heading1">
                                            <h3>Survey</h3>
                                        </div>
                                        <div class="heading2">
                                            <h2>If you were able to choose a time frame outside normal business hours (8:00 am to 5:00 pm), which times would be more convenient for you and/or your family.</h2>
                                        </div>
                                    </div>
                                    <div class="form">
                                        <form>
                                        <div class="form-fields">
                                            <div class="form-check mb-4">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked />
                                                <label class="form-check-label" for="inlineRadio1">7:00 am to 8:00 am</label>
                                            </div>
                                            <div class="form-check mb-4">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label class="form-check-label" for="inlineRadio1">7:00 am to 8:00 am</label>
                                            </div>
                                            <div class="form-check mb-4">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                                <label class="form-check-label" for="inlineRadio1">7:00 am to 8:00 am</label>
                                            </div>
                                        </div>
                                        <button type='submit' class="btn btn-success">Submit</button>
                                        </form>
                                    </div>
                                    <div class="view-result">
                                        <p>
                                            Submit your answer to view the results
                                        </p>
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

export default Survey;