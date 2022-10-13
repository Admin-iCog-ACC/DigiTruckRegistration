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
function Home() {
  return (
    <div className="bg-[#f6f9ff] font-raleway banner-bg-img">
      <RecoilRoot>
        <Nav />
      </RecoilRoot>
      <DigiTruckHome />
      <div className=' w-100% h-[90vh] clear-both bg-[url("/digitruck_interior_3.jpg")] bg-no-repeat bg-fixed bg-cover bg-[#178c9f]'></div>
      <div className="bg-[#f7f9ff] p-10"></div>

      <BackgroundSection />
      <div className="bg-[#f7f9ff] md:p-4 "></div>
      <div className=' w-100% h-[90vh] clear-both bg-[url("/digitruck_interior_1.jpg")] bg-no-repeat bg-fixed bg-cover bg-[#178c9f]'></div>

      <ThreePoints />
      <Resource/>
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default Home;
