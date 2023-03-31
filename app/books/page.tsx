import type { Metadata } from "next";
import getAllBooks from "@/lib/getAllBooks";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Books",
};

import React from "react";

export default async function Books() {
  const booksData: Promise<Book[]> = getAllBooks();

  const books = await booksData;

  const content = (
    <section>
      <h2>
        <Link href="/">Link to Home</Link>
      </h2>
      <br />
      {books.map((book) => {
        return (
          <>
            <p className="mt-4 text-2xl dark:text-white/90" key={book.id}>
              <Link
                className="hover:text-black/70 dark:hover:text-white"
                href={`/books/${book.id}`}
              >
                {book.title}
              </Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return <div>{content}</div>;
}
