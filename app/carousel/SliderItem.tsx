import type { Metadata } from "next";
import Card from "./Card";
import getAllFollows from "@/lib/getAllFollows";

export const metadata: Metadata = {
  title: "Follows",
};

// grid grid-cols-8 gap-x-10 p-3
// scrollbar-hide

export default function SliderItem({ follows }: { follows: Follow[] }) {
  return (
    <section
      id="slider"
      className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
    >
      {follows.map((item) => {
        return (
          <Card
            key={item.id}
            cardAvatar={item.avatar}
            cardName={item.name}
            cardText={item.description}
          />
        );
      })}
    </section>
  );
}
