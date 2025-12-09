// import React from 'react';

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import Featured from "./Featured/Featured";
import TestIimonial from "./Shared/TestIimonial/TestIimonial";

const Home = () => {
    return (
        <div>
             <Helmet>
            <title>Bistro Boss | Home</title>
             </Helmet>
           <Banner></Banner>
           <Category></Category>
           <PopulerMenu></PopulerMenu>
           <Featured></Featured>
           <TestIimonial></TestIimonial>
        </div>
    );
};

export default Home;