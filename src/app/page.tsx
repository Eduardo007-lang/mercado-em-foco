"use client";

import { Sidebar } from "@/components/Sidebar";
import { Blog } from "./blog/page";
import { Widgets } from "@/components/Widgets";
import { Footer } from "@/components/Footer";



export default function Home() {
  return (
   <>
    <Sidebar />
    <Blog />
    <Widgets />
    <Footer />
   </>
  );
}
