import React from "react";
import Image from "next/image";

type Props = {
  cardAvatar: string;
  cardName: string;
  cardText: string;
};

function Card({ cardAvatar, cardName, cardText }: Props) {
  return (
    <article className="bg-blue inline-block w-[300px] h-auto p-8 m-5 rounded-xl border border-navbar border-solid drop-shadow-xl hover:scale-105 ease-in-out duration-300 items-center">
      <div className="w-200 h-200 flex justify-center items-center">
        <Image
          src={cardAvatar}
          width={200}
          height={200}
          alt="avatar"
          className="justify-self-center"
          style={{ aspectRatio: "1 / 1", width: "100%", height: "auto" }}
        />
      </div>
      <p className="text-light font-bold text-center p-2 overflow-ellipsis whitespace-normal">
        {cardName}
      </p>
      <p className="text-center overflow-ellipsis whitespace-normal text-base">
        {cardText}
      </p>
    </article>
  );
}

export default Card;
