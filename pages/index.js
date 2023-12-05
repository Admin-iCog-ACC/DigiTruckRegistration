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

      <div className="partner-bg ">
        <BlueCardSection />
      </div>


      <BackgroundSection />
      <div className="partner-bg">
        <PartnersSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
