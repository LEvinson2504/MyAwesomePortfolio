import React from "react";
import TopNav from "../components/TopNav";
import Footer from "./Footer";

// I need a Layout which will be a HOC that surrounds the
// children with a header and a footer

export default function Layout({ children }) {
  return (
    <div>
      <TopNav />
      <div className="container sm:min-h-screen sm:w-screen h-64">
        <div className="bg-blue-100 -mt-20 ml-10 sm:min-h-screen h-screen sm:ml-40 sm:-mt-5">
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
