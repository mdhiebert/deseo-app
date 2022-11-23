import React from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from "@mui/material/CardActionArea";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Typography } from "@mui/material";

class WishCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    randomImage() {
        const photoID = Math.floor(Math.random() * 100) + 1;
        return "https://picsum.photos/id/" + photoID + "/600";
    }

    getImage() {
        return this.props.img ? this.props.img : this.randomImage();
    }

    render() {
      return (
        <Card>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={this.getImage()}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {this.props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {this.props.description}
                </Typography>
                {this.props.isComplete ? <Typography sx={{fontStyle: 'italic'}} variant="body3" color="text.tertiary">
                    Completed on {this.props.dateCompleted}
                </Typography> : ""}
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
            </CardActions> */}
        </Card>
      );
    }
  }
  
  export default WishCard;