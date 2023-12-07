import Image from "next/image";

function BackgroundSection() {
  return (
    <>
      <div className="max-w-[1300px] mb-5 mx-auto ml-1  px-5 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="relative md:h-100 md:w-100 h-96 w-full md:mx-0 mx-4">
            <Image
              src="/digiTruckHome2.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>

          <div className="space-y-6 py-12 lg:pl-4">
            <h2 className="text-4xl font-fredoka text-[#175DAA] text-center">
              Work With Us
            </h2>
            <p className="text-lg text-gray-600 text-center md:text-left">
              Work with us We're convinced that together, we can revolutionize
              students' future-shaping journey. Your valuable contribution would
              be a crucial asset, offering you the chance to share expertise,
              knowledge, and resources. Partnering with us not only makes a
              meaningful impact but also provides exposure for your brand. Join
              us in our journey of bridging the digital divide!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-repeat-x bg-cover w-full h-10 mt-32 bg-[url('/home-cropped2.png')]">

      </div> */}
    </>
  );
}

export default BackgroundSection;
