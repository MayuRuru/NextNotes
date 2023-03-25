import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello there</h1>
      <p>
        <Link href="/about">Go to About</Link>
        <br />
        <Link href="/books">Link to Books</Link>
      </p>
    </main>
  );
}
