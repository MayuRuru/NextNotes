import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-navbar p-4 flex justify-between flex-row sticky top-0 drop-shadow-x1 sm:flex-col">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 prose prose-md">
        <h3 className="text-1xl font-bold text-white  place-content-center mx-2 mb-2 md:mb-0 flex flex-row gap-8 mr-6">
          <Link
            href="/"
            className="text-white/90 no-underline hover:text-white"
          >
            Link to Home
          </Link>
          <Link
            href="/about"
            className="text-white/90 no-underline hover:text-white"
          >
            Go to About
          </Link>

          <Link
            href="/books"
            className="text-white/90 no-underline hover:text-white"
          >
            Link to Books
          </Link>
        </h3>

        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
          <Link
            className="text-white/90 hover:text-white"
            href="https://www.linkedin.com/in/ruiz-rull/"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="text-white/90 hover:text-white"
            href="https://github.com/MayuRuru/"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
