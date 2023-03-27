//import Image from "next/image";
import Link from "next/link";
//import { Inter } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello there! &nbsp;
        <span className="whitespace-nowrap">
          This is <span className="font-bold">Mayu</span>.
        </span>
        <br />
        <Link href="/about">Go to About</Link>
        <br />
        <Link href="/books">Link to Books</Link>
      </p>
    </main>
  );
}
