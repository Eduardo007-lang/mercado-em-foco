"use client";

import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
    subsets: ["latin"],
    style: "normal",
    weight: "400",
});

export function Widgets() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full items-start justify-center p-4 sm:px-10 md:px-20 lg:px-52 lg:w-3/4">
           
            <div className="max-w-md bg-[#283A61] text-amber-50 p-8 rounded-sm">
                <h3 className={`text-2xl sm:text-4xl text-center ${merriweather.className}`}>
                    Assine nossa newsletter
                </h3>
                <p className="text-center text-[#DFE6FF] mt-4">
                    Receba notícias sobre mercado internacional, economia e negócios.
                </p>
                <div className="flex flex-col mt-4 space-y-4">
                    <input 
                        type="email" 
                        placeholder="Insira seu e-mail" 
                        className="text-[#605C59] px-4 py-2 bg-[#FFFFFF] rounded-md" 
                    />
                    <button className="bg-[#000638] text-white px-4 py-2 w-full sm:w-fit rounded-md">
                        Enviar
                    </button>
                </div>
            </div>

            
            <div className="w-full min-w-0">
                <p className="font-bold">POSTS MAIS POPULARES</p>
                <p className="mt-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid amet quos suscipit aspernatur? Doloribus temporibus molestiae ducimus accusantium, reiciendis assumenda eaque accusamus deserunt veritatis eveniet delectus, impedit, expedita aperiam.
                </p>
                <p className="mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus distinctio esse, consectetur quam iusto neque exercitationem libero! Sed officiis dolorum porro corrupti. Quibusdam nemo esse voluptas molest
                </p>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.
                </p>
            </div>

        </div>
    );
}
