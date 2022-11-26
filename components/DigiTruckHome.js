import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
function DigiTruckHome() {
  const router = useRouter();
  
  return (
    <>
      <div className="md:h-[540px] h-[200px] bg-no-repeat bg-fixed bg-cover  clear-both   ">
        <Image
          src="/DigitruckBanner2.png"
          className=""
          // layout="fill"
          // objectFit="contain"
          alt=""
          width={4348}
          height={1687}
        />
        <div className="flex justify-center mt-10 ">
          <button
            className="bg-[#c0493a] absolute md:bottom-10 bottom-1 md:w-48 w-[90px] md:py-3.5 py-1.5 text-white rounded-[5px] ml-12 shadom-md flex justify-center items-center space-x-2 group"
            onClick={(e) => router.push("/application")}
          >
            <p className="md:text-lg text-xs">Apply Here</p>
            <BsArrowRight className="md:text-xl text-xs transition duration-200 ease-out group-hover:translate-x-1 " />
          </button>
        </div>
      </div>
      <div className="relative md:-mt-[18px] -mt-[15px] md:h-[83px] h-[65px]   ">
        <Image
          className=""
          layout="fill"
          objectFit="cover"
          alt=""
          src="/home.png"
          // width={4348}
          // height={1687}
        />
      </div>
    </>
  );
}

export default DigiTruckHome;
