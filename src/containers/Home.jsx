import React from 'react';
import Navbar from "../components/navbar";
import HomeCarousel from "../components/HomeCarousel";
import CallToAction from "../components/callToAction";
import SellingPoints from '../components/sellingPoints';

export default function Home() {
    return (
        <div>
           <Navbar />
           <HomeCarousel /> 
           <CallToAction />
           <SellingPoints />
        </div>
    )
}
