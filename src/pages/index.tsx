"use client";
import BookList from "@/components/BookList/BookList";
import React from "react";
export default function Home() {
  return (
    <div className="w-full h-full bg-slate-400 flex flex-col justify-center items-center gap-12">
      <BookList />
    </div>
  );
}
