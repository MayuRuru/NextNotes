import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { route: "/", label: "Home" },
  { route: "/about", label: "About" },
  { route: "/books", label: "Books" },
  { route: "/creators", label: "Creators" },
];

const icons = [
  {
    href: "https://www.linkedin.com/in/ruiz-rull/",
    icon: <FaLinkedin />,
  },
  {
    href: "https://github.com/MayuRuru/",
    icon: <FaGithub />,
  },
];

export default function Navbar() {
  return (
    <nav className="bg-navbar p-1 flex flex-col md:flex-row justify-between items-center top-0 drop-shadow-x1 align-middle rounded border-slate-100 mx-auto">
      <h3 className="font-bold text-white place-content-center mb-2 md:mb-0 flex flex-row gap-8 m-4 text-2xl">
        {links.map(({ route, label }) => (
          <Link
            key={label}
            href={route}
            className="text-white/90 hover:opacity-80 no-underline hover:text-white"
          >
            {label}
          </Link>
        ))}
      </h3>

      <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-3xl m-4">
        {icons.map(({ href, icon }) => (
          <Link
            target="_blank"
            key={href}
            href={href}
            className="text-white/90 hover:text-white"
          >
            {icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}
