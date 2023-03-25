import React from "react";

export default async function getAllBooks() {
  const res = await fetch("");

  if (!res.ok) throw new Error("failed to fecth data");

  return res.json();
}
