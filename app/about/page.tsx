import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <h1 className="text-1xl font-bold text-white grid place-content-center mb-2 md:mb-0">
        About
      </h1>
    </>
  );
}
