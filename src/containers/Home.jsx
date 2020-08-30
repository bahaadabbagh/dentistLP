import React from 'react';
import Navbar from "../components/navbar";
import HomeCarousel from "../components/HomeCarousel";
import CallToAction from "../components/callToAction";
import SellingPoints from '../components/sellingPoints';
import Services from '../components/services';
import Testimonials from "../components/Testimonials"

export default function Home() {
    return (
        <div>
           <Navbar />
           <HomeCarousel /> 
           <CallToAction />
           <SellingPoints />
           <Services />
           <Testimonials />
        </div>
    )
}
