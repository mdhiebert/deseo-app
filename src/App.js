import React from "react";
import logo from './logo.svg';
import './App.css';
import WishCard from "./WishCard";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import TravelMap from "./TravelMap";

class App extends React.Component {

  getCardData() {
    return [
      {id: 1, title: "Test 1", description: "woot!", test: "hello"},
      {id: 2, title: "Test 2", description: "anotha one", test: "hello2"}
    ]
  }

  handleCards() {
    const cardData = this.getCardData();
    const gridCards = [];
    for (let cardDatum of cardData) {
      gridCards.push(
        <Grid item xs={4}>
          <WishCard title={cardDatum.title} description={cardDatum.description} />
        </Grid>
      )
    }
    return gridCards;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          TODO
        </header>
        <Grid container spacing={2}>
          {this.handleCards()}
        </Grid>
        <div>
          {/* <TravelMap /> */}
        </div>
      </div>
    );
  }
}

export default App;
