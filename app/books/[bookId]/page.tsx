import getBook from "@/lib/getBook";
import getBookInsights from "@/lib/getBookInsights";
import BookInsights from "./components/BookInsights";
import getAllBooks from "@/lib/getAllBooks";
import { Suspense } from "react";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

type Params = {
  params: {
    bookId: string;
  };
};

// Dynamic metadata, fetch data when it's used:
export async function generateMetadata({
  params: { bookId },
}: Params): Promise<Metadata> {
  const bookData: Promise<User> = getBook(bookId);
  const book: User = await bookData;

  if (!book.name) {
    return {
      title: "Book not found",
    };
  }

  return {
    title: book.name,
    description: `This is the page of ${book.name}`,
  };
}

// Fetching data in parallel:
export default async function BookPage({ params: { bookId } }: Params) {
  const bookData: Promise<Book> = getBook(bookId);
  const bookInsightData: Promise<Post[]> = getBookInsights(bookId);

  //const [book, bookInsights] = await Promise.all([bookData, bookInsightData]);

  const book = await bookData;

  if (!book.id) {
    return notFound();
  }

  // Progressive rendering:
  return (
    <>
      <h2>{book.title}</h2>
      <br />

      <Suspense fallback={<h2>Loading...</h2>}>
        {/*  <BookInsights insights={bookInsights} /> */}
        {/* @ts-expect-error Async Server Component */}
        <BookInsights promise={bookInsightData} />
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const booksData: Promise<User[]> = getAllBooks();
  const books = await booksData;

  return books.map((book) => ({ bookId: book.id.toString() }));
}
