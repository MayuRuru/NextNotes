import React from "react";

export default async function getBook(bookId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${bookId}`
  );
  if (!res.ok) throw new Error("faled to fecth book");

  return res.json();
}
