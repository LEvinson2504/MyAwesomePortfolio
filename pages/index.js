import Head from "next/head";
import TopNav from "../components/TopNav.tsx";
import Intro from "../components/Intro.tsx";
import SubIntro from "../components/SubIntro.tsx";

export default function Home() {
  return (
    <div>
      <TopNav />
      <Head>
        <title>My Awesome Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <SubIntro />
    </div>
  );
}
