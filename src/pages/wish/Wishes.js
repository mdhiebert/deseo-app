import React from "react";
import './Wishes.css';
import WishCard from "./WishCard";
import Grid from '@mui/material/Grid';

import bucketList from './bucketlist.json'

class Home extends React.Component {

    getCardData() {
      return bucketList.items
    }
  
    handleCards() {
      const cardData = this.getCardData();
      const gridCards = [];
      for (let cardDatum of cardData) {
        gridCards.push(
          <Grid item xs={4}>
            <WishCard 
              title={cardDatum.activity}
              description={cardDatum.notes}
              img={cardDatum.image} 
              isComplete={cardDatum.isComplete}
              dateCompleted={cardDatum.dateCompleted}
              dateAdded={cardDatum.dateAdded}/>
          </Grid>
        )
      }
      return gridCards;
    }
  
    render() {
      return (
        <div className="App">
          <h1 className="section-title">The Bucket List</h1>
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
  
  export default Home;