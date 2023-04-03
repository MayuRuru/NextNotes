import React from "react";
import Card from "./Card";

//type Props = {}

function SliderItem() {
  return (
    <section className="grid grid-cols-8 gap-x-2.5 overflow-x-scroll p-3">
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
