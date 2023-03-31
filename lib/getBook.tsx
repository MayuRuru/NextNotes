import React from "react";

export default async function getBook(bookId: string) {
  const res = await fetch(`http://localhost:8000/books/${bookId}`);
  //if (!res.ok) throw new Error("faled to fecth book");

  if (!res.ok) return undefined;
  console.log("RES", res);
  return res.json();
}
