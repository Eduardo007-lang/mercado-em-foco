import Link from "next/link";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export function Sidebar() {
  return (
    <nav className="w-full flex flex-col sm:flex-row items-center justify-between p-4 sm:px-10 md:px-20 lg:px-52">
      
      <div className="text-xl sm:text-2xl font-bold">
        <p className={merriweather.className}>Mercado Em Foco</p>
      </div>

      
      <div className="flex flex-wrap justify-center items-center gap-4 text-base sm:text-lg">
        <Link href="#" className="hover:opacity-50 transition">Blog</Link>
        <Link href="#" className="hover:opacity-50 transition">Sobre nós</Link>
        <Link href="#" className="hover:opacity-50 transition">Contato</Link>
      </div>
    </nav>
  );
}
