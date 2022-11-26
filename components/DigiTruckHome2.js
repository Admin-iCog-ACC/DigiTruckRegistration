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
              <h3 className="text-[24px] text-[#333333] leading-tight">
              Ethiopia’s first ever moving coding classroom.
              </h3>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start  mt-14">
            {/* <button
              className="bg-[#175daa] w-48 py-3.5 text-white rounded-[4px] shadom-md flex justify-center items-center space-x-2 group"
              onClick={(e) => router.push("/application")}
            >
              <p className="text-lg">Apply Here</p>
              <BsArrowRight className="text-xl transition duration-200 ease-out group-hover:translate-x-1 " />
            </button> */}
          </div>
        </div>
        <div className="relative md:mb-10 md:h-auto md:w-auto h-60 w-full lg:block ">
          <Image layout="fill" objectFit="contain" alt="" src="/homeBg.png" />
        </div>
      </div>
    </div>

      </>
  );
}

export default DigiTruckHome;