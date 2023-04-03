//import Image from "next/image";
import Link from "next/link";
import Posts from "./components/Posts";
import { Inter } from "next/font/google";
import CardSlider from "./components/CardSlider";
const inter = Inter({ subsets: ["latin"] });

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello there!
        <span className="whitespace-nowrap">
          This is <span className="font-bold">Mayu</span>.
        </span>
        <Posts />
        <CardSlider />
      </p>
    </main>
  );
}
