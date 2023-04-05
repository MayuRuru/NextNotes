import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Mayu Next",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black">
        <div className="fixed w-full h-20 z-50">
          <Navbar />
        </div>
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
