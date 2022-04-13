import React from "react";
import { Col, Row, Container } from "react-bootstrap";

import "./copyright.style.scss";


const CopyRight = () => {
    return(
        <section id="copyright">
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div class="copyright-wrapper">
                                <div class="copyright text-center">
                                    <p>Copyright &copy; All rights reserved by <a href="#">Health is wealth</a>.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default CopyRight;