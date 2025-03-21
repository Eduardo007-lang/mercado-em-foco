"use client";

import { Merriweather } from "next/font/google";
import Link from "next/link";

const merriweather = Merriweather({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center p-4 sm:px-10  md:px-20 lg:px-52 lg:py-10 lg:mt-28 bg-[#F5F5F5]">
      <ul className="flex flex-wrap justify-center items-center gap-4">
        <li>
          <Link href="/" className={`text-[#544B44] hover:opacity-50 transition ${merriweather.className}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className={`text-[#544B44] hover:opacity-50 transition ${merriweather.className}`}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/sobre-nos" className={`text-[#544B44] hover:opacity-50 transition ${merriweather.className}`}>
            Sobre nós
          </Link>
        </li>
        <li>
          <Link href="/contato" className={`text-[#544B44] hover:opacity-50 transition ${merriweather.className}`}>
            Contato
          </Link>
        </li>
      </ul>
      <p
        className={`text-center mt-4 text-[#3E3E3E] ${merriweather.className}`}
      >
        &copy; 2025 Mercado Em Foco Blog - Todos os direitos reservados
      </p>
    </footer>
  );
}
