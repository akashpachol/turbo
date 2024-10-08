import type { Metadata } from "next";
import { IoReorderThree, IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { FiPhone } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const manRopr = Manrope({ subsets: ["latin"], preload: false });

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-Jakarta-Sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plus_Jakarta_Sans.variable} ${manrope.variable}`}
    >
      <body>
        <Navbar />
        <div className="flex justify-center">
          <div className="max-w-[1536px]">{children}</div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
