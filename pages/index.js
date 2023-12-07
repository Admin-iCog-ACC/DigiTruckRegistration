import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Register from "../components/Register";
import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import DigiTruckHome from "../components/DigiTruckHome";
import BackgroundSection from "../components/BackgroundSection";
import PartnersSection from "../components/PartnersSection";
import ThreePoints from "../components/ThreePoints";
import BackgroundSection2 from "../components/BackgroundSection2";
import Head from "next/head";
import Image from "next/image";
import BlueCardSection from "../components/BlueCardSection";
import BackgroundSection3 from "../components/BackgroundSection3";
import Achievments from "../components/Achievments";

function Home() {
  return (
    <div className="bg-[#f6f9ff] min-w-full font-raleway banner-bg-img">
      <Head>
        <title>DigiTruck Ethiopia</title>
      </Head>
      <RecoilRoot>
        <Nav />
      </RecoilRoot>
      <DigiTruckHome />

      <BackgroundSection2 />

      <div className="partner-bg md:mt-10">
        <BackgroundSection />
      </div>

      <Achievments />

      <div className="partner-bg md:pb-20 pb-48">
        <BlueCardSection />
        <PartnersSection />
      </div>

      {/* <BackgroundSection3/> */}
      <Footer />
    </div>
  );
}

export default Home;
