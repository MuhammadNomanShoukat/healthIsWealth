import React from "react";

import { Link } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import "./navbar.styles.scss";

import NavLogo from "../../assets/images/header-logo.png";

const NavBar = () => {
    return(
        <div className="nav-wrapper">
            <Container>
                <Row>
                    <Col lg={12}>
                        <Navbar expand="lg" className="p-0">
                            <Container fluid className="p-0">
                                <Navbar.Brand href="#home" className="py-2">
                                    <img
                                        src={NavLogo}
                                        className="d-inline-block align-top nav-logo"
                                        alt="React Bootstrap logo"
                                    />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse className="justify-content-end" id="navbarScroll">
                                <Nav
                                    className=" my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Link to="/" className="nav-link">Home</Link>
                                    <Link to="/health-professionals" className="nav-link">Health Professionals</Link>
                                    <Link to="/blogs" className="nav-link">Blog</Link>
                                    <Link to="/" className="nav-link">Surveys</Link>
                                    <Link to="/" className="nav-link">Videos</Link>
                                    <Link to="/" className="nav-link">How It Works</Link>
                                    {/* <Link to="/" className="nav-link">Health Products</Link>
                                    <Link to="/" className="nav-link">Contact Us</Link> */}
                                    <Link to="/" className="nav-link green-text">Login</Link>
                                    <Link to="/" className="nav-link green-bg">Sign Up</Link>
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NavBar;