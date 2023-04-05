import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-navbar p-1 flex flex-col md:flex-row justify-between items-center top-0 drop-shadow-x1 rounded border-slate-100 mx-auto">
      {/*LINKS:*/}
      <h3 className="font-bold text-white place-content-center mb-2 md:mb-0 flex flex-row gap-8 m-4 text-2xl">
        <Link href="/" className="text-white/90 no-underline hover:text-white">
          Home
        </Link>
        <Link
          href="/about"
          className="text-white/90 no-underline hover:text-white"
        >
          About
        </Link>
        <Link
          href="/books"
          className="text-white/90 no-underline hover:text-white"
        >
          Books
        </Link>
      </h3>
      {/*ICONS:*/}
      <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-3xl m-4">
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
    </nav>
  );
}
