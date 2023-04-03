import React from "react";
import Image from "next/image";

type Props = {
  cardImage: string;
  cardTitle: string;
};

function Card({ cardImage, cardTitle }: Props) {
  return (
    <article className="bg-blue inline-block w-[200px] h-[400px] p-8 m-5 cursor-pointer rounded-xl border-black drop-shadow-xl hover:scale-105 ease-in-out duration-300">
      <div className="justify-self-center">
        <Image src={cardImage} width={200} height={200} alt="" />
      </div>
      <p className="text-light font-bold text-center p-2">{cardTitle}</p>
    </article>
  );
}

export default Card;
