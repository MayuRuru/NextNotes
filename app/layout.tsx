import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Avatar from "./components/Avatar";
import { Toaster } from "./form/Toaster";

export const metadata: Metadata = {
  title: "Mayu Next",
  description: "A portfolio of my references",
};

const myFont = localFont({
  src: "../public/fonts/Agave-Regular.ttf",
  variable: "--myfont",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="dark:bg-black">
        <Navbar />
        <Toaster />

        <section className="widescreen:section-min-height tallscreen:section-min-height m-10 flex flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row">
          <header className="sm:w-1/2">
            <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
              Hello there! This is 🔥
              <span className="font-bold text-blue"> Mayu</span>.
            </h2>
            <p className="mt-4 max-w-md text-center text-2xl text-lightblue sm:text-left">
              I want to share with you...
            </p>
          </header>
          <div className="rounded-full overflow-hidden">
            <Avatar />
          </div>
        </section>
        <main>{children}</main>
      </body>
    </html>
  );
}
