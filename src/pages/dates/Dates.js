import React from "react";
import DateMap from "./DateMap";
import dateJSON from './dates.json'
import './Dates.css'

class Dates extends React.Component {

  handleDates() {
    const dateList = [];
    for (let date of dateJSON.dates) {
      dateList.push(
        <li>
          <b>{date.date}</b> - {date.activity} ({date.location})
        </li>
      )
    }
    return dateList;
  }
  
    render() {
      return (
        <div>
          <h1 className="section-title">Our Dates</h1>
          <div className="date-layout">
            <DateMap className="map-container" />
            <ol className="date-list">{this.handleDates()}</ol>
          </div>
        </div>
      );
    }
  }
  
  export default Dates;