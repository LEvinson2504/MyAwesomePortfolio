import Head from "next/head";
import TopNav from "../components/TopNav";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Head>
        <title>My Awesome Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
    </div>
  );
}
