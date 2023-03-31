import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-row sticky top-0 drop-shadow-x1">
      <div className="prose prose-md mx-auto flex justify-between sm:flex-row">
        <h3 className="text-1xl font-bold text-white grid place-content-center mb-2 md:mb-0">
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
