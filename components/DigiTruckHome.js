import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
function DigiTruckHome() {
  const router = useRouter();
  return (
    <div>
      <div className="md:max-w-[1225px] mx-4 xl:mx-auto mt-12 md:h-[70vh] h-[80vh] 2xl:h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <div className="flex flex-wrap ">
              <div className=" space-y-1">
                {/* <h1 className="text-[60px]  font-fredoka regular text-[#175daa]">
                  DigiTruck <span className="text-[#EE4823]"> Ethiopia </span>
                </h1> */}
                <div className=" flex items-start justify-start w-full  h-64 -mt-16">
                  <div className=" w-full md:w-1/2  h-full relative">
                    <Image
                      className=""
                      layout="fill"
                      objectFit="contain"
                      alt=""
                      src="/logodg2.png"
                    />
                  </div>
                </div>

                <h1 className="text-[24px] text-[#333333] leading-tight">
                  Ethiopia’s moving coding classroom. Built to bring students
                  closer to the world of coding and a better learning
                  experience.
                </h1>
              </div>
            </div>
            <div className="flex justify-center md:justify-start  mt-10">
              <button
                className="bg-[#175daa] w-48 py-3.5 text-white rounded-[4px] shadom-md flex justify-center items-center space-x-2 group"
                onClick={(e) => router.push("/application")}
              >
                <p className="text-lg">Apply Here</p>
                <BsArrowRight className="text-xl transition duration-200 ease-out group-hover:translate-x-1 " />
              </button>
            </div>
          </div>
          <div className="relative md:mb-8 md:h-auto md:w-auto h-60 w-full lg:block">
            <Image layout="fill" objectFit="contain" alt="" src="/homeBg.png" />
          </div>
        </div>
      </div>
      <div className="bg-repeat-x bg-cover w-full h-10 bg-[url('/home-cropped2.png')]">
        {/* <Image
          className="bg-repeat-x"
          layout="fill"
          objectFit="cover"
          alt=""
          src="/home.png"
        /> */}
      </div>
    </div>
  );
}

export default DigiTruckHome;
