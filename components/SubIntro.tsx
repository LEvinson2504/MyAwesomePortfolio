import React from "react";
import Footer from "./Footer";

export default function SubIntro() {
  return (
    <section className="container max-w-screen min-h-screen">
      <div className="bg-blue-100 ml-10 sm:ml-40">
        <h3 className="text-4xl pt-10 px-5 sm:text-6xl sm:ml-40">
          Recent Projects
        </h3>
        <p className="text-3xl sm:text-4xl px-5 sm:h-20 sm:ml-40 font-light">
          <span className="text-green-500">12:50</span> Did something today
        </p>
      </div>
      <Footer />
    </section>
  );
}
