import getBook from "@/lib/getBook";
import getBookInsights from "@/lib/getBookInsights";
//import BookInsights from "./components/BookInsights";
import getAllBooks from "@/lib/getAllBooks";
import { Suspense } from "react";
import type { Metadata } from "next";
//{/* @ts-expect-error Async Server Component */}

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
  const bookData: Promise<Book> = getBook(bookId);
  const book: Book = await bookData;

  if (!book.title) {
    return {
      title: "Book not found",
    };
  }

  return {
    title: book.title,
    description: `This is the page of ${book.title}`,
  };
}

// Fetching data in parallel:
export default async function BookPage({ params: { bookId } }: Params) {
  const bookData: Promise<Book> = getBook(bookId);
  const bookInsightData: Promise<Book[]> = getBookInsights(bookId);

  //const [book, bookInsights] = await Promise.all([bookData, bookInsightData]);

  const book = await bookData;
  console.log("DATA", bookInsightData);

  if (!book.id) {
    return notFound();
  }

  // Progressive rendering:
  return (
    <>
      <h2 className="mt-4 text-2xl dark:text-white/90">{book.title}</h2>
      <br />

      <Suspense fallback={<h2>Loading...</h2>}>
        {/*  <BookInsights insights={bookInsights} /> */}
        {/* <BookInsights promise={bookInsightData} /> */}

        <h3 className="mt-4 text-1xl font-bold dark:text-white/90">
          {" "}
          {book.author}
        </h3>

        <p className="mt-4 text-1xl dark:text-white/90">{book.description}</p>
      </Suspense>
    </>
  );
}

export async function generateStaticParams() {
  const booksData: Promise<Book[]> = getAllBooks();
  const books = await booksData;

  return books.map((book) => ({ bookId: book.id.toString() }));
}
