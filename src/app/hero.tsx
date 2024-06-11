"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/image-4.jpeg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          {/* @ts-ignore */}
          <Typography variant="h1" color="white">
            #H4K2024
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            color="white"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-3xl"
          >
            Hak4Kidz is the first official youth based ethical hacking
            conference in Chicago that is *not* a hackathon.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
