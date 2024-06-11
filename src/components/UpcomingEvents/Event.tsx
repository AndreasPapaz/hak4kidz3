"use client";

import { Button } from "@material-tailwind/react";
import React from "react";
import Image from "next/image";

const Event = ({ events }) => {
  return (
    <div className="upcoming-event-list">
      {events.map((event, index) => (
        <div className="event-block" key={index}>
          <div className="row-auto grid grid-cols-6 gap-4">
            <div className="col-start-1 col-end-2 sec-1">
              <div>
                <div className="month">{event.month}</div>
                <div className="month-date-devider"></div>
                <div className="date">{event.date}</div>
              </div>
            </div>
            <div className="col-start-2 col-end-4 sec-2">
              <Image
                src={event.image}
                alt={event.title}
                width={500}
                height={500}
              />
            </div>
            <div className="col-start-4 col-end-6 sec-3">
              <div className="title">{event.title}</div>
              <div className="venue">
                <div>
                  <i className="fa fa-map-marker"></i>
                  <div>{event.venue.name}</div>
                  <div className="dim-color">
                    <a
                      href={event.venue.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
              <div className="time">
                <div>
                  <i className="fa fa-clock-o"></i>
                  <div>{event.time}</div>
                  <div
                    data-livestamp={event.timestamp}
                    className="dim-color"
                  ></div>
                </div>
              </div>
              <div className="sort-story">{event.story}</div>
              <Button
                color="deep-purple"
                variant="gradient"
                href={event.ticketLink}
              >
                Link
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
