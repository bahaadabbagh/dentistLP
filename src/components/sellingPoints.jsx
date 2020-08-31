import React from 'react';
import technology from  "../images/technology.jpg";
import goldenRule from  "../images/goldenRule.jpg";
import dedicated  from "../images/dedicated.jpg";
import { Row } from 'react-bootstrap';

export default function sellingPoints() {
    return (
        <div className="sellingPoints">
            <div className="sellingPointsText">
           <h3 className="sellingPointsHero"> SAY HELLO FROM MEDITEX CENTER </h3>
            <h5><br/>Our doctors and staff at Meditex will provide the very best patient care possible<br/> and offer it in a timely manner.</h5>
            </div>
           <img src={technology} alt="technology" className="sellingPointsCards" />
           <img src={goldenRule} alt="golden rule" className="sellingPointsCards" />
           <img src={dedicated} alt="dedicated proffesionals" className="sellingPointsCards" />
        </div>
    )
}
