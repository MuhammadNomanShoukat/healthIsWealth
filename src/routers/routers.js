import React from "react";
import { Route, Routes } from 'react-router-dom';

import NavBar from "../common/navbar/navbar.component";


import Home from "../pages/home/home.component";
import HealthProfessionals from "../pages/health-professionals/health-professionals.component";
import Blog from "../pages/blog/blog.component";

const Routers = () => {
    return(
        <>
            <NavBar />
            
            {/* App all routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/health-professionals" element={<HealthProfessionals />} />
                <Route path="/blogs" element={<Blog />} />
            </Routes>
        </>
    )
}

export default Routers;