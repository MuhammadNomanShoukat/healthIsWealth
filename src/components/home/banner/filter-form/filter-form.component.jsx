import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons'

import "./filter-form.style.scss";

const FilterForm = () => {
    return(
        <div className="banner-filter-form">
            <div className="search">
                <div className="search-form">
                <form>
                    <div className="profession">
                    <label for="exampleFormControlInput1" className="form-label">I want to search</label><br />
                    <select className="form-control chosen-dropdown" name="">
                        <option value="1">Health Professionals</option>
                        <option value="2">Blogs</option>
                        <option value="2">Surveys</option>
                        <option value="3">Videos</option>
                    </select>
                    </div>
                    <div className="category">
                    <label for="exampleFormControlInput1" className="form-label">Select Category</label><br />
                    <select className="form-control chosen-dropdown" name="">
                        <option value="">Dentist, Fitness,  etc.</option>
                        <option value="1">Dentist</option>
                        <option value="2">Fitness</option>
                    </select>
                    </div>
                    <div className="location">
                    <label for="exampleFormControlInput1" className="form-label">Location</label>
                    <input type="email" className="form-control" id="search_location" placeholder="Type your location" />
                    <FontAwesomeIcon icon={faCrosshairs} />
                    </div>
                    <button type="submit">Search</button>
                </form>
                </div>
            </div>
            <div class="advance-search">
                <a href="#" >Advanced Search</a>
            </div>
        </div>
    )
}

export default FilterForm;