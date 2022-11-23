import Timeline from '@mui/lab/Timeline';
import React from "react";
import Event from "./Event";
import Trip from '../travel/Trip'

import storyEvents from "./story.json";

class Story extends React.Component {
    render() {
        return(
            <div>
                <h1 className="section-title">The Story of Us</h1>
                <Timeline sx={{marginTop: "0px", padding: "0px"}} position="alternate">
                    {
                        storyEvents.events.map(eventData => (
                            eventData.type === "event" ? 
                            <Event eventData={eventData} /> : 
                            eventData.type === "trip" ? 
                            <Trip tripData={eventData} /> :
                            eventData.type === "description" ?
                            <p className="section-description">{eventData.content}</p> :
                            null
                        ))
                    }
                </Timeline>
            </div>
        )
    }
}

export default Story;