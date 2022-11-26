import Footer from "../components/Footer";
import Nav from "../components/Nav";
import React, { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";
import DigiTruckHome from "../components/DigiTruckHome";
import DigiTruckHome2 from "../components/DigiTruckHome2";
import BackgroundSection from "../components/BackgroundSection";
import PartnersSection from "../components/PartnersSection";
import ThreePoints from "../components/ThreePoints";

function Home() {

  const useWidth = () => {
    const [width, setWidth] = useState(0); // default width, detect on server.
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    return width;
};

const width = useWidth();
  
  return (
    <div className="bg-[#f6f9ff] font-raleway banner-bg-img">
      <RecoilRoot>
        <Nav />
      </RecoilRoot>
      <DigiTruckHome/>

      
      <div className=' w-100% -mt-4 md:-mt-5 h-[90vh] clear-both bg-[url("/digitruck_interior_E_1.jpg")] bg-no-repeat bg-fixed bg-cover bg-[#178c9f]'></div>
      <div className="bg-[#f7f9ff] p-10"></div>

      <BackgroundSection />
      <div className=' w-100%  h-[90vh] clear-both bg-[url("/digitruck_interior_E_2.jpg")] bg-no-repeat bg-fixed bg-cover bg-[#178c9f]'></div>
      <ThreePoints />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default Home;
