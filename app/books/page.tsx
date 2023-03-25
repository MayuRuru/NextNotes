import type { Metadata } from "next";
import getAllBooks from "@/lib/getAllBooks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Books",
};

import React from "react";

export default async function Books() {
  const booksData: Promise<User[]> = getAllBooks();

  const books = await booksData;

  console.log("Hello");

  const content = (
    <section>
      <h2>
        <Link href="/">Link to Home</Link>
      </h2>
      <br />
      {books.map((book) => {
        return (
          <>
            <p key={book.id}>
              <Link href={`/books/${book.id}`}>{book.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return <div>{content}</div>;
}
