import type { Metadata } from "next";
import Card from "./Card";
import getAllFollows from "@/lib/getAllFollows";

export const metadata: Metadata = {
  title: "Follows",
};

// grid grid-cols-8 gap-x-10 p-3
// scrollbar-hide

export default async function SliderItem() {
  const followsData: Promise<Follow[]> = getAllFollows();
  const follows = await followsData;

  return (
    <section
      id="slider"
      className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
    >
      {/*       <Card cardImage={"/images/collaborate.svg"} cardTitle={"Title 1"} />
      <Card cardImage={"/images/radio.svg"} cardTitle={"Title 2"} />
      <Card cardImage={"/images/study.svg"} cardTitle={"Title 3"} />
      <Card cardImage={"/images/video.svg"} cardTitle={"Title 4"} />
      <Card cardImage={"/images/collaborate.svg"} cardTitle={"Title 1"} />
      <Card cardImage={"/images/radio.svg"} cardTitle={"Title 2"} />
      <Card cardImage={"/images/study.svg"} cardTitle={"Title 3"} />
      <Card cardImage={"/images/video.svg"} cardTitle={"Title 4"} /> */}

      {follows.map((item) => (
        <Card key={item.id} cardImage={item.avatar} cardTitle={item.name} />
      ))}
    </section>
  );
}
