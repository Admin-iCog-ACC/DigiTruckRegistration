import Image from "next/image";

function BackgroundSection() {
  return (
    <>
      <div className="max-w-[1225px] mb-10 mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6 py-10 lg:pl-4">
          <h2 className="text-4xl font-fredoka text-[#175DAA] text-center">Innovative Project</h2>
            <p className="text-lg text-gray-600 md:text-left text-center">
              What makes DigiTruck Ethiopia unique is that it is a fully
              refurbished and digital 40ft (12m) container trailer truck crafted
              to be powered by sunlight or electricity and outfitted with a
              variety of 21st-century electronic devices for student learning
              and training such as laptop computers, robotic devices,
              microelectronics and many more for student learning and training.
            </p>
          </div>
          <div className="relative md:h-100 md:w-100 h-96 w-full md:mx-0 mx-4">
            <Image
              src="/digiHome.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="bg-repeat-x bg-cover w-full h-10 mt-32 bg-[url('/home-cropped2.png')]">
      </div> */}


    </>
  );
}

export default BackgroundSection;
