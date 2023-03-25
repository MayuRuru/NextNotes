import getBook from "@/lib/getBook";
import getBookInsights from "@/lib/getBookInsights";
import BookInsights from "./components/BookInsights";
import { Suspense } from "react";
import type { Metadata } from "next";

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
