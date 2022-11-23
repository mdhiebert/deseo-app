import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';

import "./Story.css"

import FavoriteIcon from '@mui/icons-material/Favorite';
import SmsIcon from '@mui/icons-material/Sms';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CakeIcon from '@mui/icons-material/Cake';
import LiquorIcon from '@mui/icons-material/Liquor';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SchoolIcon from '@mui/icons-material/School';

const iconMap = new Map([
    ["loveIcon", <FavoriteIcon fontSize="medium"/>],
    ["textIcon", <SmsIcon fontSize="medium" />],
    ["cityIcon", <LocationCityIcon fontSize="medium" />],
    ["cakeIcon", <CakeIcon fontSize="medium" />],
    ["partyIcon", <CelebrationIcon fontSize="medium" />],
    ["drinkIcon", <LiquorIcon fontSize="medium" />],
    ["magicIcon", <AutoFixHighIcon fontSize="medium" />],
    ["schoolIcon", <SchoolIcon fontSize="medium" />]
])

class Event extends React.Component {

    constructor (props) {
        super(props);

        this.alternated = this.props.alternated;

        this.dateString = this.props.eventData.dateString;
        this.title = this.props.eventData.title;
        this.centerIcon = this.props.eventData.centerIcon;
        this.description = this.props.eventData.description;
        this.imageUrl = this.props.eventData.imageUrl;
    }


    render () {
        return (
            <TimelineItem>
                
                <TimelineOppositeContent color="text.secondary">
                    <div>
                        {this.dateString}
                    </div>
                </TimelineOppositeContent>
                
                <TimelineSeparator>
                    <TimelineDot sx={this.centerIcon === "loveIcon" ? {backgroundColor: "#ff0000"} : {backgroundColor : "#ffb200"}}>
                        {this.centerIcon ? iconMap.get(this.centerIcon) : null}
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent >
                    <div className="event-content">
                        <Typography variant="h6" component="span">
                            {this.title}
                        </Typography>
                        <Typography>{this.description}</Typography>
                        <img className='event-image' src={this.imageUrl}>
                        </img>
                    </div>
                </TimelineContent>
            </TimelineItem>
        )
    }
}

export default Event;