"use client";

import { CardBlog } from "@/components/Card-blog";
import { Intro } from "@/components/Intro";
import { Search } from "@/components/Search";
import { Widgets } from "@/components/Widgets";


export function Blog() {
  return (
    <>
      <Intro />
      <Search />
      <CardBlog />
      <Widgets />
    </>
  );
}
