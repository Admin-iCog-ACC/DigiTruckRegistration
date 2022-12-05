import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Register from "../components/Register";
import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import DigiTruckHome from "../components/DigiTruckHome";
import BackgroundSection from "../components/BackgroundSection";
import PartnersSection from "../components/PartnersSection";
import ThreePoints from "../components/ThreePoints";
import Resource from "../components/Resource";
import Head from "next/head";
import Image from "next/image";

function Home() {
  return (
    <div className="bg-[#f6f9ff] font-raleway banner-bg-img">
      <Head>
        <title>DigiTruck Ethiopia</title>
      </Head>
      <RecoilRoot>
        <Nav />
      </RecoilRoot>
      <DigiTruckHome />
      <div className=" w-100% h-[90vh] relative  bg-[#178c9f]">
        <Image
          objectFit="cover"
          layout="fill"
          alt=""
          src="/digitruck_interior_E_1.JPG"
        />
      </div>
      <div className="bg-[#f7f9ff] p-10"></div>

      <BackgroundSection />
      <div className=" w-100% h-[90vh] relative  bg-[#178c9f]">
        <Image
          objectFit="cover"
          layout="fill"
          alt=""
          src="/digitruck_interior_E_2.jpg"
        />
      </div>

      <ThreePoints />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default Home;
