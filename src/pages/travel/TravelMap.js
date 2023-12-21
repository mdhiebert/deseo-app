import React from "react";
import Trip from './Trip'
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

class TravelMap extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
        value: null
    }
}

  handleTrips = () => {
    return this.props.travelData.trips.map((tripData) => {
      return <Trip tripData={tripData} />
    })
  }

    render() {
        return (
          <div>
            {this.handleTrips()}
          </div>
        )
    }

}

export default TravelMap;