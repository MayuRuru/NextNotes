import type { Metadata } from "next";
import getAllBooks from "@/lib/getAllBooks";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Books",
};

export default async function Books() {
  const booksData: Promise<Book[]> = getAllBooks();

  const books = await booksData;

  const content = (
    <section className="px-6 prose prose-sm prose-slate dark:prose-invert mx-auto">
      <h2>
        <Link href="/">← Back to Home</Link>
      </h2>
      <br />
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <li
            key={book.id}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-lightpurple shadow"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {book.title}
                  </h3>

                  <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    {book.author}
                  </span>
                </div>

                <p className="mt-1 truncate text-sm text-gray-500">
                  {book.description}
                </p>
              </div>

              {/*   <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={book.imageUrl} alt="" /> */}
            </div>

            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={book.link}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <FaEye
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Link
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );

  return <div>{content}</div>;
}
