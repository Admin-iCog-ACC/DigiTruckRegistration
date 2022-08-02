import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Register from '../components/Register';
import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import DigiTruckHome from '../components/DigiTruckHome';
import BackgroundSection from '../components/BackgroundSection';
import PartnersSection from '../components/PartnersSection';

function Home() {

  return (
    <div className="bg-[#f6f9ff] font-raleway banner-bg-img">
      <RecoilRoot>
        <Nav />
      </RecoilRoot>
      <DigiTruckHome/>
      <BackgroundSection/>
      <div className="bg-[#f7f9ff] p-10"></div>
      <PartnersSection/>
      <Footer />
    </div>
  );
}

export default Home;
