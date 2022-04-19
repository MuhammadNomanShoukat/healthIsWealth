import React from "react";

import Heading from "../../components/health-professionals/heading/heading.component";
import Filters from "../../components/health-professionals/filters/filters.component";
import ProfessionalsList from "../../components/health-professionals/professionals-list/professionals-list.component";

import "./health-professionals.styles.scss";

const HealthProfessionals = () => {
    return(
        <>
            <Heading />
            <Filters />
            <ProfessionalsList />
        </>
    )
}

export default HealthProfessionals;