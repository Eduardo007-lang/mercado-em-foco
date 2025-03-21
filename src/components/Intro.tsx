import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  style: "normal",
  weight: "700",
});

export function Intro() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 sm:px-10 sm:mt-28 md:px-20 lg:px-52 lg:py-10 lg:mt-28">
      <h1 className={`text-2xl sm:text-4xl text-center ${merriweather.className}`}>
        O Mercado Em Foco Blog
      </h1>
      <p className="text-lg text-center text-gray-500">
        Um blog sobre mercado internacional, economia e negócios.
      </p>
    </div>
  );
}
