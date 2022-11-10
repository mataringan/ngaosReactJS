import React from "react";
import { Carousel } from "flowbite-react";

export default function Carou() {
  return (
    <div>
      <div className="h-72 sm:h-96 md:h-[100vh]">
        <Carousel>
          <img src={require("../assets/father-1822528.jpg")} alt="..." />
          <img src={require("../assets/sunset-3819469.jpg")} alt="..." />
          <img src={require("../assets/children-4955009.jpg")} alt="..." />
        </Carousel>
      </div>
    </div>
  );
}
