import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Landing from "../components/Home";
import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import Head from "next/head";


function Home() {
  return (
    <div className="bg-[#f6f9ff] min-w-full font-raleway banner-bg-img">
      <Head>
        <title>Social Impact</title>
      </Head>
      <RecoilRoot>
        <Nav />
      </RecoilRoot>
 <Landing />

      <Footer />
    </div>
  );
}

export default Home;
