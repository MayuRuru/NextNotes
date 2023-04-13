import Avatar from "./components/Avatar";
import Posts from "./creators/page";
import { Inter } from "next/font/google";
import CardSlider from "./carousel/CardSlider";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-blue text-4xl font-bold pb-6">
          My highlighted references:
        </h2>
        <CardSlider />
      </section>
    </main>
  );
}
