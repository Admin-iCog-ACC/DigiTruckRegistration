import Image from 'next/image';

function BackgroundSection() {
  return (
    <div className="max-w-[1225px] mx-auto bg-white shadow-md  px-5 py-16">
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-3 py-10">
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
        <div className="relative h-100 w-100">
          <Image src="/digiTruckHome.png" layout="fill" objectFit="contain" alt=''/>
        </div>
      </div>
    </div>
  );
}

export default BackgroundSection;
