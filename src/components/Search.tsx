import { Merriweather } from "next/font/google";
import { Search as SearchIcon } from "lucide-react";

const merriweather = Merriweather({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export function Search() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-xs">
        {/* Input de busca */}
        <input
          type="text"
          className={`w-full p-2 pl-12 border border-gray-300 rounded-lg ${merriweather.className}`}
          placeholder="O que você procura?"
        />
        
        
        <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
}
