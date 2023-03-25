import type { Metadata } from "next";
import getAllBooks from "@/lib/getAllBooks";

export const metadata: Metadata = {
  title: "Books",
};

import React from "react";

export default function Books() {
  //const booksData: Promise<> = getAllBooks()
  return <div>Books</div>;
}
