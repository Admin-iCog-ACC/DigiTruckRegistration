import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
function DigiTruckHome() {
  const router = useRouter();
  return (
    <><div className="md:max-w-[1225px] mx-4 md:mx-auto mt-12 mb-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <div className="flex flex-wrap ">
            <div className=" space-y-1">
              <h1 className="text-[60px] font-bold text-[#175daa]">
                DigiTruck <span className="text-[#EE4823]"> Ethiopia </span>
              </h1>
              <h3 className="text-[18px] text-[#333333] leading-tight">
                A multi-faceted, mobile, digital learning platform that provides
                students with hands-on experience and trains young adults in the
                fundamentals of digital skills like coding, digital design, game
                development, and more. An opportunity for students to gain more
                than just a theoretical understanding of technology and become
                more acquainted with the world of technology.
              </h3>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start  mt-14">
            <button
              className="bg-[#175daa] w-48 py-3.5 text-white rounded-[4px] shadom-md flex justify-center items-center space-x-2 group"
              onClick={(e) => router.push("/application")}
            >
              <p className="text-lg">Apply Here</p>
              <BsArrowRight className="text-xl transition duration-200 ease-out group-hover:translate-x-1 " />
            </button>
          </div>
        </div>
        <div className="relative md:mb-8 md:h-auto md:w-auto h-60 w-full lg:block ">
          <Image layout="fill" objectFit="contain" alt="" src="/homeBg.png" />
        </div>
      </div>
    </div>
    <div className="relative md:mb-9 md:h-24 h-24 mx-2 ">
        <Image 
        className="" 
        layout="fill" 
        objectFit="contain" 
        alt="" 
        src="/home.png" 
        />
      </div></>
  );
}

export default DigiTruckHome;
