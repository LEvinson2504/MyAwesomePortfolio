import React from "react";
import Link from "next/link";

export default function TopNav() {
  return (
    <header className="bg-white">
      <div className="sm:flex sm:justify-end sm:flex-row text-right sm:mx-5 p-4">
        <div className="sm:p-5 text-gray-700 text-3xl sm:text-4xl">
          <Link href="/">About Me</Link>
        </div>
        <div className="sm:p-5 text-gray-700 text-3xl sm:text-4xl">
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </header>
  );
}
