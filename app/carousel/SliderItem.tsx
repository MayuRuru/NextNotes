import type { Metadata } from "next";
import Card from "./Card";

export const metadata: Metadata = {
  title: "Follows",
};

export default function SliderItem({ follows }: { follows: Follow[] }) {
  return (
    <section className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth">
      {follows.map((item) => {
        return (
          <a href={item.link} key={item.id}>
            <Card
              cardAvatar={item.avatar}
              cardName={item.name}
              cardText={item.description}
            />
          </a>
        );
      })}
    </section>
  );
}
