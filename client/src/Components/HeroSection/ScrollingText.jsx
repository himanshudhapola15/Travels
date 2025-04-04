import React from "react";
import Marquee from "react-fast-marquee";

function ScrollingText() {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="h-[1px] w-full bg-gray"></div>
      <Marquee
        className="font-roboto my-1 text-darkgray text-lg md:text-3xl lg:text-5xl whitespace-nowrap overflow-hidden"
        speed={50}
        gradient={false}
      >
        WHEN EVERY SECOND COUNTS, WE’RE HERE TO GET YOU THE CARE YOU NEED / IN
        EMERGENCIES, SPEED MATTERS. WE’RE HERE TO DELIVER CARE WHEN YOU NEED IT
        MOST / FAST, RELIABLE, AND READY TO RESPOND—YOUR HEALTH IS OUR PRIORITY
        / WHEN EVERY MOMENT COUNTS, WE’RE HERE TO ENSURE TIMELY MEDICAL HELP IS
        ON THE WAY / QUICK RESPONSE, COMPASSIONATE CARE—HELP IS JUST A CLICK
        AWAY /
      </Marquee>
      <div className="h-[1px] w-full bg-gray"></div>
    </div>
  );
}

export { ScrollingText };
