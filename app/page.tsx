import Avatar from "./components/Avatar";
import Posts from "./creators/page";
import { Inter } from "next/font/google";
import CardSlider from "./carousel/CardSlider";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <section className="mb-12">
        <CardSlider />
      </section>
    </main>
  );
}
