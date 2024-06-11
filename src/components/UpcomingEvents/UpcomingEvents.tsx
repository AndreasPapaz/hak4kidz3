import React from "react";
import Event from "./Event";
const UpcomingEvents = () => {
  const eventData = [
    {
      month: "Sept",
      date: "27",
      title: "$_GRAND_RAPIDS - 62 6f 6f 74 69 6e 67 2e 2e 2e",
      image:
        "https://grrcon.com/wp-content/uploads/2022/10/Grr2023-828x1024.png.webp",
      venue: {
        name: "DeVos Place",
        directions:
          "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQLhhA0gEHMTEzajBqMagCALACAA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=Ke2_cMbPrRmIMSmkgPqNOrO4&daddr=303+Monroe+Ave+NW,+Grand+Rapids,+MI+49503",
      },
      time: "September 26 & 27, 2024",
      timestamp: "nan",
      story:
        "GrrCON is an information security and hacking conference that provide the Information Security community with a fun atmosphere to come together and engage with likeminded people from around the globe. We keep GrrCON small with around 2,500 attendance to allow us to provide those things other events leave out. Whether you are a Fortune 500 executive, security researcher, industry professional, student, or hacker you will find something for you at GrrCON.",
      ticketLink: "https://grrcon.com/",
    },
    {
      month: "June",
      date: "8",
      title: "$_CHICAGO - 62 6f 6f 74 69 6e 67 2e 2e 2e",
      image: "https://www.hak4kidz.com/images/computerhacked.png",
      venue: {
        name: "Cisco Systems - 433 W. Van Buren St., 7th floor, Chicago, IL",
        directions:
          "https://www.google.com/maps/dir//433+W+Van+Buren+St+7th+floor,+Chicago,+IL+60607/@41.8765027,-87.6386911,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880e2d5a8457cca3:0xa88b5fafa6697eaf!2m2!1d-87.6386911!2d41.8765027!3e0?entry=ttu",
      },
      time: "Saturday June 8th, 2024, 8:30am",
      timestamp: "1717843913",
      story:
        "There are a lot of parking options near the venue with SpotHero and ParkChirp or another app you enjoy. We are about 1 block south from Union Station, if you prefer that mode of transportation.  ** Bring A Laptop For Your Kid(z) **",
      ticketLink:
        "https://www.eventbrite.com/e/hak4kidz-2024-tickets-816779127357?aff=home",
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
