import React from "react";
import Image from "next/image";

type Props = {
  cardImage: string;
  cardTitle: string;
};

function Card({ cardImage, cardTitle }: Props) {
  return (
    <article className="bg-blue p-0.5 w-180 grid items-center rounded-xl border-3 border-black drop-shadow-xl hover:translate-y--2">
      <div className="justify-self-center">
        <Image src={cardImage} width={200} height={200} alt="" />
      </div>
      <p className="text-light font-bold text-center p-2">{cardTitle}</p>
    </article>
  );
}

export default Card;
