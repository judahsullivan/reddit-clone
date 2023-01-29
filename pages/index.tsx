import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit-Clone</title>
        <link rel="icon" href="/Images/header-image.png" />
      </Head>
      <h1>Hello world!</h1>
    </div>
  );
};

export default Home;
