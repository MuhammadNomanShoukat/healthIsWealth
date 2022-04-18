import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./heading.style.scss";

const Heading = () => {
    return(
        <section id="heading">
            <Container fluid>
                <Container>
                    <div className="heading-content">
                        <Row>
                            <Col lg={12}>
                                <div className="page-heading-wrapper">
                                    <div className="heading-content">
                                        <h2>Health Professionals</h2>
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

export default Heading;