//import Image from "next/image";
import Link from "next/link";
import Posts from "./components/Posts";
import { Inter } from "next/font/google";
import CardSlider from "./carousel/CardSlider";
const inter = Inter({ subsets: ["latin"] });

{
  /* <Posts /> */
}

export default function Home() {
  return (
    <main className={inter.className}>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white p-6">
        Hello there!
        <span className="whitespace-nowrap">
          This is <span className="font-bold">Mayu</span>.
        </span>
        <div>
          <CardSlider />
        </div>
      </p>
    </main>
  );
}
