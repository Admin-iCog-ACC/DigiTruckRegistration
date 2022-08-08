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
      className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 px-14"
    >
      <div className="flex flex-col justify-center items-center">
          <div className="relative w-52 h-40">
            <Image
              layout="fill"
              src="/programming-converted-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="px-2 py-4">
            <h2 className="font-bold text-xl mb-2 text-center">Programming</h2>
            <p className="text-gray-700 text-center">
              Students will be introduced to and practice using the programming
              languages.
            </p>
          </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-52 h-40">
        <Image
              layout="fill"
              src="/robot-converted-removebg-preview.png"
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

      <div className="flex flex-col justify-center items-center">
        <div className="relative w-44 h-40">
        <Image
              layout="fill"
              src="/game.png"
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
