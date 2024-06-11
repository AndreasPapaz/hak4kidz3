import React from "react";
import Event from "./Event";
const UpcomingEvents = () => {
  const eventData = [
    {
      month: "Jan",
      date: "27",
      title: "DASTAAN - a tribute to Rekha",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      venue: {
        name: "Gyan Manch",
        directions: "https://www.google.co.in",
      },
      time: "Saturday, Jan 27, 2018 at 5:30 PM",
      timestamp: "1517054400",
      story:
        '"For a woman to be complete, she has to be a blend of Paro & Chandramukhi. I feel that I am that woman." - Rekha',
      ticketLink: "https://www.google.com",
    },
  ];

  return (
    <div className="page-event">
      <div className="upcoming-sec justify-items-center">
        <div className="heading">Upcoming Events</div>
      </div>

      <Event events={eventData} />
    </div>
  );
};

export default UpcomingEvents;
