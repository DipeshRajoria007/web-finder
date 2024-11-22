"use client";
import SearchForm from "./components/SearchForm";
import Header from "./components/Header";
import { useState } from "react";
import { logos } from "./components/utls";

export default function Home() {
  const [searchEngine, setSearchEngine] = useState("google");
  return (
    <div className="flex flex-col items-center w-screen h-screen font-fira_regular  md:text-center text-left">
      <Header icon={logos[searchEngine]} />
      <main className="flex flex-col items-center w-full p-8  h-full md:text-center text-left">
        <p>Get direct download links for almost anything.</p>

        <p>
          This is the page where you can find links to download almost anything
          directly without hassle.
        </p>
        <SearchForm
          searchEngine={searchEngine}
          setSearchEngine={setSearchEngine}
        />
      </main>
    </div>
  );
}
