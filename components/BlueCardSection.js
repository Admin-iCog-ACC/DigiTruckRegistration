import Image from "next/image";
import Link from "next/link";

export default function CustomComponent() {
  const data = [
    { icon: "gps", text: "4 Cities" },
    { icon: "school", text: "67 Schools" },
    { icon: "students", text: "200 Students" },
    { icon: "clock", text: "400 Hours" },
    { icon: "female", text: "38 Female" },
    { icon: "teachers", text: "27 Teachers" },
  ];

  return (
    <>
      <div className="relative  mb-5 max-w-[1000px] mx-auto p-6  rounded-lg">
        <div className="absolute inset-0 bg-[#487fbc] mx-6 md:mx-0 opacity-90 max-h-[65%] rounded-lg">
          
        </div>
        <h1 className="text-5xl relative pt-4 font-raleway font-medium text-white md:text-left text-center">
          Coding Club
        </h1>
        <p className="text-lg w-full px-4 md:px-0 pt-8 text-white font-medium relative">
          The Coding Club, an integral part of our sustainability plan, is a
          school-based peer-to-peer learning community stemming from our coding
          and robotics training programs. It fosters students' technological
          knowledge and skills, empowering them to contribute to their
          community. Facilitated by representative students, the club acts as a
          bridge between schools and us, providing guidance, resources, and
          tools for continuous practice in ICT labs. This initiative aims to
          inspire students to engage in the STEAM ecosystem, creating tools and
          software that address community challenges.
        </p>
        <div className="grid pt-16 grid-cols-1 md:grid-cols-2 gap-4">
          <div class="max-w-sm bg-white z-10 mx-auto border border-gray-200 rounded-lg ">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-xl  tracking-tight text-black">
                  Addis Ababa
                </h5>
              </a>
              <p class="mb-3 font-light text-black">
                Lorem ipsum Lorem ipsum lorem
              </p>
            </div>
            <a href="#">
              <img className="" src="/interior.jpg" alt="" />
            </a>
          </div>

          <div class="max-w-sm z-10 bg-white border mx-auto border-gray-200 rounded-lg ">
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-xl  tracking-tight text-black">
                  Addis Ababa
                </h5>
              </a>
              <p class="mb-3 font-light text-black">
                Lorem ipsum Lorem ipsum lorem
              </p>
            </div>
            <a href="#">
              <img className="" src="/interior.jpg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex-row h-[105px] bg-[#d1dfee] max-w-[1000px] mx-auto max-h-[25%] items-center justify-center w-full flex-1 my-20 text-center  md:flex hidden">
        <div className="flex flex-wrap justify-around max-w-4xl mt-2 sm:w-full">
          <div className="flex flex-col p-4 m-2 rounded-lg sm:m-4">
            <img
              className="w-10 h-10 mx-auto mb-2 fill-current"
              src="location.png"
            ></img>
            <span className="text-md font-bold">4 Cities</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-around max-w-4xl mt-2 sm:w-full">
          <div className="flex flex-col p-4 m-2 rounded-lg sm:m-4">
            <img
              className="w-10 h-10 mx-auto mb-2 text-[#175DAA] fill-current"
              src="school.png"
            ></img>
            <span className="text-md font-bold">67 Schools</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-around max-w-4xl  sm:w-full">
          <div className="flex flex-col p-4 m-2 rounded-lg sm:m-4">
            <img
              className="w-10 h-10 mx-auto mb-2 fill-current"
              src="people.png"
            ></img>
            <span className="text-md font-bold">200 Students</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-around max-w-4xl mt-2 sm:w-full">
          <div className="flex flex-col p-4 m-2 rounded-lg sm:m-4">
            <img
              className="w-10 h-10 mx-auto mb-2 fill-current"
              src="time.png"
            ></img>
            <span className="text-md font-bold">400 Hours</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-around max-w-4xl mt-2 sm:w-full">
          <div className="flex flex-col p-4 m-2 rounded-lg sm:m-4">
            <img
              className="w-10 h-10 mx-auto mb-2 fill-current"
              src="female.png"
            ></img>
            <span className="text-md font-bold">348 Female</span>
          </div>
        </div>
        <div className="flex flex-wrap  justify-around max-w-4xl mt-2 sm:w-full">
          <div className="flex flex-col p-4 m-2 rounded-lg sm:m-4">
            <img
              className="w-10 h-10 mx-auto mb-2 fill-current"
              src="teachers.png"
            ></img>
            <span className="text-md font-bold">27 Teachers</span>
          </div>
        </div>
      </div>
    </>
  );
}
