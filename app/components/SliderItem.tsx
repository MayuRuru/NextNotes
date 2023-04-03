import React from "react";
import Card from "./Card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

//type Props = {}
//grid grid-cols-8 gap-x-10 p-3
// scrollbar-hide

function SliderItem() {
  return (
    <section className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
      <Card cardImage={"/images/collaborate.svg"} cardTitle={"Title 1"} />
      <Card cardImage={"/images/radio.svg"} cardTitle={"Title 2"} />
      <Card cardImage={"/images/study.svg"} cardTitle={"Title 3"} />
      <Card cardImage={"/images/video.svg"} cardTitle={"Title 4"} />
      <Card cardImage={"/images/collaborate.svg"} cardTitle={"Title 1"} />
      <Card cardImage={"/images/radio.svg"} cardTitle={"Title 2"} />
      <Card cardImage={"/images/study.svg"} cardTitle={"Title 3"} />
      <Card cardImage={"/images/video.svg"} cardTitle={"Title 4"} />
    </section>
  );
}

export default SliderItem;
