import Register from "../components/Register";
import Footer from "../components/Footer";
import { RecoilRoot } from "recoil";
import Nav from "../components/Nav";
import Head from "next/head";

function register() {
  return (
    <div className="bg-[#f6f9ff] font-raleway banner-bg-img">
      <Head>
        <title>Application - DigiTruck Ethiopia</title>
      </Head>
      <RecoilRoot>
        <Nav />
      </RecoilRoot>
      <Register />
      <Footer />
    </div>
  );
}

export default register;
