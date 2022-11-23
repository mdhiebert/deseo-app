import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Line,
    Marker,
    ZoomableGroup
  } from "react-simple-maps";

import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import FlightLandOutlinedIcon from '@mui/icons-material/FlightLandOutlined';

import "./Travel.css";

const monthMap = new Map([
    [0, "Jan"],
    [1, "Feb"],
    [2, "Mar"],
    [3, "Apr"],
    [4, "May"],
    [5, "Jun"],
    [6, "Jul"],
    [7, "Aug"],
    [8, "Sep"],
    [9, "Oct"],
    [10, "Nov"],
    [11, "Dec"]
])

class Trip extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            value: null
        }
    }

    sanitizeDateString = (dateString) => {
        let dateStringParts = dateString.split("-");

        console.log("Input: " + dateString + " ---- " + "Components: " + dateStringParts);

        const adjustedYear = (parseInt(dateStringParts[0]) + "").padStart(4, "0");
        const adjustedMonth = (parseInt(dateStringParts[1]) + "").padStart(2, "0");
        const adjustedDay = (parseInt(dateStringParts[2]) + "").padStart(2, "0");

        console.log("Adjusted: " + adjustedYear + ", " + adjustedMonth + ", " + adjustedDay)

        return adjustedYear + "-" + adjustedMonth + "-" + adjustedDay;
    }

    formatDate = (dateString) => {
        const d = new Date((dateString));

        return d.getUTCDate() + " " + monthMap.get(d.getUTCMonth()) + " " + d.getUTCFullYear()
    }

    formatDateRange = (dateStringOne, dateStringTwo) => {
        const ds1 = (dateStringOne);
        const d1 = new Date(ds1);
        
        const ds2 = (dateStringTwo);
        const d2 = new Date(ds2);
        

        if (d1.getUTCFullYear() !== d2.getUTCFullYear()) {
            return d1.getUTCDate() + " " + monthMap.get(d1.getUTCMonth()) + " " + d1.getUTCFullYear() + " - " + d2.getUTCDate() + " " + monthMap.get(d2.getUTCMonth()) + " " + d2.getUTCFullYear();
        } else if (d1.getUTCMonth() !== d2.getUTCMonth()) {
            return d1.getUTCDate() + " " + monthMap.get(d1.getUTCMonth()) + " - " + d2.getUTCDate() + " " + monthMap.get(d2.getUTCMonth()) + " " + d2.getUTCFullYear();
        } else {
            return d1.getUTCDate() + " - " + d2.getUTCDate() + " " + monthMap.get(d1.getUTCMonth()) + " " + d1.getUTCFullYear();
        }
    }

    formatDescription = (description) => {
        return description.split("\n").map(dp => <p>{dp}</p>)
    }

    handleMarkers = () => {
        return this.props.tripData.destinations.map((destinationData) => (destinationData.showMarker ?
            <Marker key={destinationData.name} coordinates={[destinationData.lon, destinationData.lat]}>
            <circle r={1.5} fill="#15171c" stroke="#fff" strokeWidth={0.2} />
            <text
                textAnchor="middle"
                y={destinationData.offset ? destinationData.offset : -3}
                style={{ fontFamily: "system-ui", fill: "#15171c", fontSize: "3pt"}}
            >
                {destinationData.name}
            </text>
            </Marker> : null
        ))
    }

    handleLines = () => {
        let coordinates = this.props.tripData.destinations.map(d => [d.lon, d.lat])
    
        return <Line from={coordinates[0]} to={coordinates[coordinates.length - 1]} coordinates={coordinates.slice(0, coordinates.length)} strokeWidth={1} stroke={"#fbb200"}/>
      }

    handleMap = () => {
        return (
            <ComposableMap
              width={this.props.tripData.geographyData.width}
              height={this.props.tripData.geographyData.height}
              projection="geoAzimuthalEqualArea"
              projectionConfig={this.props.tripData.geographyData.projectionConfig}
            >
              {/* <Graticule stroke="#EAEAEC" /> */}
              {/* <ZoomableGroup> */}
                <Geographies geography={this.props.tripData.geographyData.geoUrl}>
                    {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={this.props.tripData.countriesVisited.includes(geo.properties.name) ? "#94825f" : "#9998A3"}
                        stroke="#EAEAEC"
                        />
                    ))
                    }
                </Geographies>
                {this.handleLines()}
                {this.handleMarkers()}
            </ComposableMap>
          );
    }

    handleDescription = () => {
        return (
            <div className="trip-description-container">
                <p className="trip-description">{this.props.tripData.description}</p>
                <hr />
                <h3>Itinerary</h3>
                <hr />
                <ol>
                    {
                        this.props.tripData.destinations.slice(0, 1).map(
                            d => <div> <FlightTakeoffOutlinedIcon sx={{fontSize: 40}}/> &nbsp; <span className="destination-title">{d.name}, {d.abbreviatedCountry ? d.abbreviatedCountry : d.country}</span>
                                    <div className="destination-header">{d.header}</div>
                                    <div className="destination-dates">
                                        {
                                            d.dateStart === d.dateEnd ? 
                                            this.formatDate(d.dateStart)
                                          : this.formatDateRange(d.dateStart, d.dateEnd)
                                        }
                                    </div>
                                    <div className="destination-description">
                                        {this.formatDescription(d.description)}
                                    </div>
                                </div>
                        )
                    }{
                        this.props.tripData.destinations.slice(1, this.props.tripData.destinations.length - 1).map(
                            d => <li key={d.name + d.dateStart + "-" + d.dateEnd}> <span className="destination-title">{d.name}, {d.abbreviatedCountry ? d.abbreviatedCountry : d.country}</span>
                                    <div className="destination-header">{d.header}</div>
                                    <div className="destination-dates">
                                        {
                                            d.dateStart === d.dateEnd ? 
                                            this.formatDate(d.dateStart)
                                          : this.formatDateRange(d.dateStart, d.dateEnd)
                                        }
                                    </div>
                                    <div className="destination-description">
                                        {this.formatDescription(d.description)}
                                    </div>
                                </li>
                        )
                    }{
                        this.props.tripData.destinations.slice(this.props.tripData.destinations.length - 1, this.props.tripData.destinations.length).map(
                            d => <div> <FlightLandOutlinedIcon sx={{fontSize: 40}}/> &nbsp; <span className="destination-title">{d.name}, {d.abbreviatedCountry ? d.abbreviatedCountry : d.country}</span>
                                    <div className="destination-header">{d.header}</div>
                                    <div className="destination-dates">
                                        {
                                            d.dateStart === d.dateEnd ? 
                                            this.formatDate(d.dateStart)
                                          : this.formatDateRange(d.dateStart, d.dateEnd)
                                        }
                                    </div>
                                    <div className="destination-description">
                                        {this.formatDescription(d.description)}
                                    </div>
                                </div>
                        )
                    }
                </ol>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="trip-header">
                        <h2>{this.props.tripData.title}</h2>
                        <h5><i>{this.props.tripData.dateStart} - {this.props.tripData.dateEnd}</i></h5>
                </div>
                <div className="trip">
                    {
                        this.props.tripData.flippedLayout ?
                        [this.handleMap(), this.handleDescription()] :
                        [this.handleDescription(), this.handleMap()]
                    }
                </div>
            </div>
        )
    }

}

export default Trip;