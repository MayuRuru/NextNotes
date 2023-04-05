import type { Metadata } from "next";
import getAllBooks from "@/lib/getAllBooks";
import { FaEye } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Books",
};

// TODO: Convert into a Masonry with react-masonry-css
// TODO: Filter by topic

export default async function Books() {
  const booksData: Promise<Book[]> = getAllBooks();

  const books = await booksData;

  const content = (
    <section className="px-6 mx-auto">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <li
            key={book.id}
            className="bg-lightpurple rounded-lg shadow flex flex-col hover:opacity-80 "
          >
            <div className="p-6 flex-1 flex flex-col justify-between">
              <header className="mb-4">
                <h3 className="text-md font-medium mb-2">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.description}</p>
              </header>
              <footer className="flex items-center justify-between">
                <p>{book.author}</p>
                <a
                  href={book.link}
                  className="inline-flex items-center justify-center gap-x-3 rounded border border-transparent px-4 py-2 text-sm"
                >
                  <FaEye className="h-5 w-5" aria-hidden="true" />
                  <span>Read more</span>
                </a>
              </footer>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
  return <div>{content}</div>;
}
