//https://codesandbox.io/s/github/appbaseio/reactivesearch/tree/dev/packages/web/examples/ToggleButton


import React, { Component } from "react";

import {
  ReactiveBase,
  ToggleButton
} from "@appbaseio/reactivesearch";

import "./ToggleButtons.css";

class ToggleButtons extends Component {
  render() {
    return (
       <div className="toggleButton">
        <ReactiveBase
          app="managemyfinances-app"
          credentials="lW70IgSjr:87c5ae16-73fb-4559-a29e-0a02760d2181"
        >
          <div className="row">
            <div className="col">
              <ToggleButton
                componentId="CitySensor"
                dataField="group.group_topics.topic_name_raw.raw"
                data={[
                  { label: "Current", value: "Current" },
                  { label: "All", value: "All" }
                ]}
              />
            </div>
          </div>
        </ReactiveBase>
      </div>
    );
  }

  /* will need to update below to sort transactions by current or all */
  meetupList(data) {
    return {
      title: (
        <div className="meetup-title">
          {data.member ? data.member.member_name : ""} is going to $
          {data.event ? data.event.event_name : ""}
        </div>
        
      ),
    //   image: data.member.photo,
    //   image_size: "small",
    //   description: (
    //     <div className="flex column">
    //       <div className="meetup-location">
    //         <span className="location">
    //           <i className="fas fa-map-marker-alt" />
    //         </span>
    //         {data.group ? data.group.group_city : ""}
    //       </div>
    //       <div className="flex wrap meetup-topics">
    //         {data.group.group_topics.slice(0, 4).map(tag => (
    //           <div className="meetup-topic" key={tag.topic_name}>
    //             {tag.topic_name}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   ),
      url: data.event.event_url
     
    };
  }
}

export default ToggleButtons
