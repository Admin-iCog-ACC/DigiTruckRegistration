import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";

function DigiTruckHome() {
  const router = useRouter();
  return (
    <>
      <div className="max-w-[1225px] xl:mx-auto mx-5 mt-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <div className="flex flex-wrap ">
              <div className=" space-y-1">
                {/* <h1 className="text-[60px]  font-fredoka regular text-[#175daa]">
                  DigiTruck <span className="text-[#EE4823]"> Ethiopia </span>
                </h1> */}
                <div className=" flex items-start justify-start w-full  h-64 -mt-16">
                  <div className=" w-full md:w-3/5  h-full relative ">
                    <Image
                      className=""
                      layout="fill"
                      objectFit="contain"
                      alt=""
                      src="/logodg2-cropped.png"
                    />
                  </div>
                </div>

                <h1 className="text-[24px] pt-16 md:pt-5 text-center font-medium  md:text-left text-[#333333] leading-tight">
                  Digitruck Ethiopia is currently accepting registration for
                  primary and secondary students from cities of Adama, Hawassa,
                  Jimma aged between 12-18 years old.
                </h1>
              </div>
            </div>
            <div className="flex justify-center md:justify-start pb-10  mt-10">
              <button
                className="bg-[#EE4823] w-48 py-3.5 text-white rounded-[4px] shadom-md flex justify-center items-center space-x-2 group"
                onClick={(e) => router.push("/application")}
              >
                <p className="text-lg">Apply Here</p>
                <BsArrowRight className="text-xl transition duration-200 ease-out group-hover:translate-x-1 " />
              </button>
            </div>
          </div>
          <div className="relative md:mb-8 md:h-auto md:w-full h-60 w-full lg:block animate-move">
            <Image
              layout="fill"
              objectFit="fill"
              alt=""
              src="/DigiTruckEt.png"
            />
          </div>
          <style jsx>{`
            .animate-move {
              animation: move 2s infinite;
            }

            @keyframes move {
              0% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(10px);
              }
              100% {
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      </div>
      <div className="bg-repeat-x mt-5 md:mt-[126px] bg-cover w-full h-10 bg-[url('/home-cropped2.png')] "></div>
    </>
  );
}

export default DigiTruckHome;
