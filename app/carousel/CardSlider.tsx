"use client";
import SliderItem from "./SliderItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import getAllFollows from "@/lib/getAllFollows";
import { useEffect, useState } from "react";

function CardSlider() {
  const slideLeft = () => {
    var slider = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider")!;

    slider.scrollLeft = slider.scrollLeft + 500;
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
    <>
      <h2 className="text-blue pt-6 pb-4">Following</h2>

      <section
        id="slider"
        className="bg-purple flex items-center justify-items-center"
      >
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <SliderItem follows={follows} />
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </section>
    </>
  );
}

export default CardSlider;
