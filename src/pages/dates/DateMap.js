import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const coveredStates = [
    "Georgia",
    "Massachusetts",
    "Kentucky"
]
const markers = [
    {
      markerOffset: -3,
      name: "Columbus",
    //   coordinates: [32.4922, -84.9403]
      coordinates: [95.2, 147.7]
    },
    {
        markerOffset: -3,
        name: "Savannah",
      //   coordinates: [32.4922, -84.9403]
        coordinates: [98.9, 148.1]
      },
    {
        markerOffset: -3,
        name: "Atlanta",
      //   coordinates: [32.4922, -84.9403]
        coordinates: [95.6, 146.3]
      },
      {
        markerOffset: -3,
        name: "Lexington",
      //   coordinates: [32.4922, -84.9403]
        coordinates: [95.4, 142.0]
      },
      {
        markerOffset: -3,
        name: "Boston",
      //   coordinates: [32.4922, -84.9403]
        coordinates: [109, 137.7]
      },
  ];

class DateMap extends React.Component {

    render() {
        return (
            <ComposableMap
              width={200}
              height={200}
              projection="geoAzimuthalEqualArea"
              projectionConfig={{
                rotate: [80.0, -35.0, 0],
                scale: 600
              }}
            >
              {/* <Graticule stroke="#EAEAEC" /> */}
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={coveredStates.includes(geo.properties.name) ? "#fbb200" : "#9998A3"} 
                        stroke="#EAEAEC"
                        />
                    ))
                    }
                </Geographies>
                {markers.map(({ name, coordinates, markerOffset }) => (
                    <Marker key={name} coordinates={coordinates}>
                    <circle r={1.5} fill="#15171c" stroke="#fff" strokeWidth={0.2} />
                    <text
                        textAnchor="middle"
                        y={markerOffset}
                        style={{ fontFamily: "system-ui", fill: "#15171c", fontSize: "3pt"}}
                    >
                        {name}
                    </text>
                    </Marker>
                ))}
            </ComposableMap>
          );
    }

}

export default DateMap;