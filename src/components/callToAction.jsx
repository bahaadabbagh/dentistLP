import React from 'react';
import call from "../images/bookcall.jpg";
import bookMail from "../images/bookmail.jpg";
import openHours from "../images/openhours.jpg"

export default function callToAction() {
    return (
        <div className="callToAction">
           <a href="#"> <img src={call} alt="call"width="40%"/></a>
           <a href="#"> <img src={bookMail} alt="mail" width="25%" /> </a>
           <a href="#"> <img src={openHours} alt="openHours" width="25%" /> </a>
        </div>
    )
}
