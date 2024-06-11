import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

export function Content() {
  return (
    <section className="py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        <Typography color="blue" variant="h6">
          Please take a moment to read our Code of Conduct.
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mt-8 mb-6">
          Online Education
        </Typography>
        <Typography className="my-10 font-normal !text-gray-500">
          We are thrilled to announce our new online learning center called
          Hak4Kidz Academy or H4KAcad for short. This platform is to provide
          specialized edutaining material. Current status is we are reviewing
          materials and deciding which to add to HAKAcad. We believe this
          program, which is under development, will be beneficial to the future
          of cybersecurity. To access H4KAcad, either click that link to your
          left or &apos;Academy&apos; on the navigation bar above. Once on the
          site, follow the course categories until you find Byte Size.
        </Typography>
        <Image
          width={768}
          height={500}
          src="/image/event.jpeg"
          alt="post"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
}

export default Content;
