"use client";
import SliderItem from "./SliderItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import getAllFollows from "@/lib/getAllFollows";
import { useEffect, useState } from "react";

export default function CardSlider() {
  const slideLeft = () => {
    console.log("slideLeft function called");
    var slider = document.getElementById("slider")!;
    slider.scrollTo({
      left: slider.scrollLeft - 500,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    console.log("slideRight function called");
    var slider = document.getElementById("slider")!;
    slider.scrollTo({
      left: slider.scrollLeft + 500,
      behavior: "smooth",
    });
  };

  const [follows, setFollows] = useState<Follow[]>([]);
  useEffect(() => {
    getAllFollows().then((data) => {
      setFollows(data);
    });
  }, []);

  if (follows.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-purple flex items-center flex-col align-center">
      <h2 className="text-blue text-4xl font-bold pt-6 pb-1">My highlights:</h2>
      <div className="flex justify-between items-center">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide content-center grid"
        >
          <SliderItem follows={follows} />
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </section>
  );
}
