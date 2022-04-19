import React from "react";
import { Col, Row, Container, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import "./filters.style.scss";

const Filters = () => {
    return(
        <section id="filters">
            <Container fluid>
                <Container>
                    <div className="filters-content">
                        <Row>
                            <Col lg={12}>
                                <div className="search-filters">
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value="">Category</option>
                                            <option value="1">Chiropractors</option>
                                            <option value="2">Dentist</option>
                                            <option value="3">Educators</option>
                                            <option value="4">Health Product Suppliers</option>
                                            <option value="5">Therapist</option>
                                            <option value="6">Fitness</option>
                                            <option value="7">Medical Doctors</option>
                                            <option value="8">Medical Special Populations</option>
                                            <option value="9">Wellness</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value="">Sub Category</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value="">State</option>
                                            <option value="Alaska" stateid="&quot;AK&quot;">Alaska</option>
                                            <option value="Alabama" stateid="&quot;AL&quot;">Alabama</option>
                                            <option value="Arkansas" stateid="&quot;AR&quot;">Arkansas</option>
                                            <option value="Arizona" stateid="&quot;AZ&quot;">Arizona</option>
                                            <option value="California" stateid="&quot;CA&quot;">California</option>
                                            <option value="Colorado" stateid="&quot;CO&quot;">Colorado</option>
                                            <option value="Connecticut" stateid="&quot;CT&quot;">Connecticut</option>
                                            <option value="Washington,D.C" stateid="&quot;DC&quot;">Washington,D.C</option>
                                            <option value="Delaware" stateid="&quot;DE&quot;">Delaware</option>
                                            <option value="Florida" stateid="&quot;FL&quot;">Florida</option>
                                            <option value="Georgia" stateid="&quot;GA&quot;">Georgia</option>
                                            <option value="Hawaii" stateid="&quot;HI&quot;">Hawaii</option>
                                            <option value="Iowa" stateid="&quot;IA&quot;">Iowa</option>
                                            <option value="Idaho" stateid="&quot;ID&quot;">Idaho</option>
                                            <option value="Illinois" stateid="&quot;IL&quot;">Illinois</option>
                                            <option value="Indiana" stateid="&quot;IN&quot;">Indiana</option>
                                            <option value="Kansas" stateid="&quot;KS&quot;">Kansas</option>
                                            <option value="Kentucky" stateid="&quot;KY&quot;">Kentucky</option>
                                            <option value="Louisiana" stateid="&quot;LA&quot;">Louisiana</option>
                                            <option value="Massachusetts" stateid="&quot;MA&quot;">Massachusetts</option>
                                            <option value="Maryland" stateid="&quot;MD&quot;">Maryland</option>
                                            <option value="Maine" stateid="&quot;ME&quot;">Maine</option>
                                            <option value="Michigan" stateid="&quot;MI&quot;">Michigan</option>
                                            <option value="Minnesota" stateid="&quot;MN&quot;">Minnesota</option>
                                            <option value="Missouri" stateid="&quot;MO&quot;">Missouri</option>
                                            <option value="Mississippi" stateid="&quot;MS&quot;">Mississippi</option>
                                            <option value="Montana" stateid="&quot;MT&quot;">Montana</option>
                                            <option value="North Carolina" stateid="&quot;NC&quot;">North Carolina</option>
                                            <option value="North Dakota" stateid="&quot;ND&quot;">North Dakota</option>
                                            <option value="Nebraska" stateid="&quot;NE&quot;">Nebraska</option>
                                            <option value="New Hampshire" stateid="&quot;NH&quot;">New Hampshire</option>
                                            <option value="New Jersey" stateid="&quot;NJ&quot;">New Jersey</option>
                                            <option value="New Mexico" stateid="&quot;NM&quot;">New Mexico</option>
                                            <option value="Nevada" stateid="&quot;NV&quot;">Nevada</option>
                                            <option value="New York" stateid="&quot;NY&quot;">New York</option>
                                            <option value="Ohio" stateid="&quot;OH&quot;">Ohio</option>
                                            <option value="Oklahoma" stateid="&quot;OK&quot;">Oklahoma</option>
                                            <option value="Oregon" stateid="&quot;OR&quot;">Oregon</option>
                                            <option value="Pennsylvania" stateid="&quot;PA&quot;">Pennsylvania</option>
                                            <option value="Rhode Island" stateid="&quot;RI&quot;">Rhode Island</option>
                                            <option value="South Carolina" stateid="&quot;SC&quot;">South Carolina</option>
                                            <option value="South Dakota" stateid="&quot;SD&quot;">South Dakota</option>
                                            <option value="Tennessee" stateid="&quot;TN&quot;">Tennessee</option>
                                            <option value="Texas" stateid="&quot;TX&quot;">Texas</option>
                                            <option value="Utah" stateid="&quot;UT&quot;">Utah</option>
                                            <option value="Virginia" stateid="&quot;VA&quot;">Virginia</option>
                                            <option value="Vermont" stateid="&quot;VT&quot;">Vermont</option>
                                            <option value="Washington" stateid="&quot;WA&quot;">Washington</option>
                                            <option value="Wisconsin" stateid="&quot;WI&quot;">Wisconsin</option>
                                            <option value="West Virginia" stateid="&quot;WV&quot;">West Virginia</option>
                                            <option value="Wyoming" stateid="&quot;WY&quot;">Wyoming</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option value="">City</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" className="form-control" placeholder="Zip Code" />
                                    </div>
                                    <div className="form-group">
                                        <label className="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                        <InputGroup>
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><FontAwesomeIcon icon={faSearch} /></div>
                                            </div>
                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Search by name" />
                                        </InputGroup>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-success filter-btn">Search</button>
                                    </div>
                                </div>
                                <div class="total-count">
                                    <div class="count-content">
                                        <p>Results: 3580</p>
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

export default Filters;