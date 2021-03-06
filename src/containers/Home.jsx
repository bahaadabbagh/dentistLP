import React from 'react';
import Navbar from "../components/navbar";
import HomeCarousel from "../components/HomeCarousel";
import CallToAction from "../components/callToAction";
import SellingPoints from '../components/sellingPoints';
import Services from '../components/services';
import Testimonials from "../components/Testimonials";
import Form from "../components/Form";
import Footer from "../components/footer"

export default function Home() {
    return (
        <div>
           <Navbar />
           <HomeCarousel /> 
           <CallToAction />
           <SellingPoints />
           <Services />
           <Testimonials />
           <Form />
           <Footer />
        </div>
    )
}
