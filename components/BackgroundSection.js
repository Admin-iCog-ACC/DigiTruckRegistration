import Image from 'next/image';

function BackgroundSection() {
  return (
    <><div className="max-w-[1225px] mx-auto bg-white shadow-md  px-5 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-3 py-10 lg:pl-4">
          <h2 className="text-4xl">Innovative Project</h2>
          <p className="text-lg text-gray-600">

            What makes DigiTruck Ethiopia unique is that it is a fully refurbished
            and digital 40ft (12m) container trailer truck crafted to be powered
            by sunlight or electricity and outfitted with a variety of 21st-century
            electronic devices for student learning and training such as laptop
            computers, robotic devices, microelectronics and many more for student
            learning and training.

          </p>
        </div>
        <div className="relative md:h-100 md:w-100 h-60 w-full md:mx-0 mx-4">
          <Image src="/digiHome.png" layout="fill" objectFit="contain" alt='' />
        </div>
      </div>
    </div>
    <div className="relative h-24 mt-14 md:mb-1 md:-mx-12 -mx-0 ">
        <Image layout="fill" objectFit="contain" alt="" src="/home.png" />
      </div></>
  );

}

export default BackgroundSection;
