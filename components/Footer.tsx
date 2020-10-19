import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <section className="sm:ml-40 flex flex-row">
      <div className="flex flex-col sm:ml-20 sm:my-10">
        <h3 className="text-4xl font-light">
          <Link href="/">Home</Link>
        </h3>
        <h3 className="text-4xl font-light">
          <Link href="/">About</Link>
        </h3>
        <h3 className="text-4xl font-light">
          <Link href="/projects">Projects</Link>
        </h3>
      </div>

      <div className="flex flex-col sm:ml-40 sm:my-10">
        <h3 className="text-4xl font-light">
          <a
            href="https://www.linkedin.com/in/levinson-d-souza-093b61129/"
            target="_blank"
          >
            LinkedIn
          </a>
        </h3>
        <h3 className="text-4xl font-light">
          <a href="https://github.com/LEvinson2504/" target="_blank">
            Github
          </a>
        </h3>
        <h3 className="text-4xl font-light">
          <a href="https://twitter.com/levinsondsouza" target="_blank">
            Twitter
          </a>
        </h3>
      </div>
    </section>
  );
}
