"use client"; // components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Content from "./content";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <UpcomingEvents />
    </>
  );
}
