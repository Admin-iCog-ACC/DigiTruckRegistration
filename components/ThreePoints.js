import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { DiTerminal } from "react-icons/di";

function ThreePoints() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 px-14 py-20"
    >
      <div className="group flex flex-col justify-center items-center rounded-xl shadow-xl hover:shadow-2xl transition ease-in-out duration-300  py-20 ">
          <div className="relative w-20 h-20">
            <Image
              layout="fill"
              src="/code.svg"
              alt=""
              className="hover:stroke-white fill-white "
            />
          </div>
          <div className="px-2 py-4 ">
            <h2 className="font-bold text-xl mb-2 text-center">Programming</h2>
            <p className="text-gray-700 text-center ">
              Students will be introduced to and practice using the programming
              languages.
            </p>
          </div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-xl shadow-xl hover:shadow-2xl transition ease-in-out duration-300 py-20">
        <div className="relative w-20 h-20">
        <Image
              layout="fill"
              src="/cogs.svg"
              alt=""
            />
          </div>
          <div className="px-2 py-4">

          <div className="font-bold text-xl mb-2 text-center">
            Design and Robotics
          </div>
          <p className="text-gray-700 text-center">
            Students explore and experiment with robotic and other devices to
            build and design.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-xl shadow-xl hover:shadow-2xl transition ease-in-out duration-300 py-20">
        <div className="relative w-20 h-20">
        <Image
              layout="fill"
              src="/game.svg"
              alt=""
            />
          </div>
          <div className="px-2 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Game Modification
          </div>
          <p className="text-gray-700 text-center">
            Students design, modify and create games using programming.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThreePoints;
