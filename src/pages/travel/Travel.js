import React from "react";
import TravelMap from "./TravelMap";
import WorldMap from "./WorldMap";
import "./Travel.css";

import travelData from './travelData.json';
import oldTravelData from './oldTravelData.json';

class Travel extends React.Component {
  
    render() {
      return (
        <div>
          <h1 className="section-title">Travel</h1>
          <WorldMap />
          <div>
            <div className="divider-banner"><h1>FUTURE TRIPS</h1></div>
            <TravelMap travelData={travelData} />
            <div className="divider-banner"><h1>PAST TRIPS</h1></div>
            <TravelMap travelData={oldTravelData} />
          </div>

        </div>
      );
    }
  }
  
  export default Travel;