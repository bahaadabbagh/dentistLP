import React from 'react';
import Navbar from "../components/navbar";
import HomeCarousel from "../components/HomeCarousel";
import CallToAction from "../components/callToAction";

export default function Home() {
    return (
        <div>
           <Navbar />
           <HomeCarousel /> 
           <CallToAction />
        </div>
    )
}
