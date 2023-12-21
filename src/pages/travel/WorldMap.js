import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

import { PatternLines } from "@vx/pattern";

var _ = require('lodash');

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const michaelVisited = [
  "United States",
  "Canada",
  "Mexico",
  "Iceland",
  "Spain",
  "France",
  "United Kingdom",
  "Ireland",
  "Belgium",
  "Netherlands",
  "Luxembourg",
  "Denmark",
  "Germany",
  "Italy",
  "Sweden",
  "Finland",
  "Switzerland",
  "Austria",
  "Estonia",
  "Russia",
  "Turkey",
  "Morocco",
  "South Korea",
  "Jordan",
  "Qatar",
  "Portugal"
]

const franVisited = [
  "United States",
  "Mexico",
  "Brazil",
  "Canada",
  "Peru",
  "South Africa",
  "Portugal",
  "Spain",
  "United Kingdom",
  "France",
  "China",
  "Greece",
  "Italy"
]

const projected = [
  "Vietnam",
  "Malaysia",
  "Thailand",
  "Cambodia",
  "Singapore",

  "Hungary",
  "Czech Republic",
  "Austria",
  "Slovakia",
  "Germany",

  "Argentina",
  "Chile"
]

const bothCovered = [
  "United States of America"
]

const coveredIntersection = _.intersection(michaelVisited, franVisited).filter(x => (bothCovered.indexOf(x) < 0))


const coveredMichael = michaelVisited.filter(x => (coveredIntersection.indexOf(x) < 0))
const coveredFran = franVisited.filter(x => (coveredIntersection.indexOf(x) < 0))

class WorldMap extends React.Component {

  colorSelector = (geoName) => {
    if (bothCovered.includes(geoName)) {
      return "#94825f";
    } else if (coveredIntersection.includes(geoName)) {
      return "url('#lines')"
    } else if (coveredMichael.includes(geoName)) {
      return "#2a52be";
    } else if (coveredFran.includes(geoName)) {
      return "#ffb200";
    } else if (projected.includes(geoName)) {
      return "#540595"
    } else {
      return "#9998A3";
    }
  }

    render() {
        return (
            <ComposableMap
              width={500}
              height={275}
              projection="geoEqualEarth"
              projectionConfig={{
                center: [25, 0],
                scale: 100
              }}
            >
              <PatternLines
                id="lines"
                height={3}
                width={3}
                stroke="#2a52be"
                strokeWidth={1}
                background="#ffb200"
                orientation={["diagonal"]}
              />
              <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                  geographies.map((geo) => (
                      <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={this.colorSelector(geo.properties.name)}
                      stroke="#EAEAEC"
                      />
                  ))
                  }
              </Geographies>
              {/* </ZoomableGroup> */}
            </ComposableMap>
          );
    }

}

export default WorldMap;