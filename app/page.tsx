import Avatar from "./components/Avatar";
import Posts from "./posts/Posts";
import { Inter } from "next/font/google";
import CardSlider from "./carousel/CardSlider";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <section className="widescreen:section-min-height tallscreen:section-min-height m-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row">
        <header className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
            Hello there! This is 🔥
            <span className="font-bold text-blue"> Mayu</span>.
          </h2>
          <p className="mt-4 max-w-md text-center text-2xl text-lightblue sm:text-left">
            I want to share what I read and who do I follow.
          </p>
        </header>

        <Avatar />
      </section>

      <section className="mb-12">
        <CardSlider />
      </section>

      <section className="mb-12">
        <Posts />
      </section>
    </main>
  );
}
