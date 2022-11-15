import Image from "next/image";

function Resources() {
  return (
    <div>
      <h1 className="text-[45px] text-center font-bold text-[#175daa]">
        Resources
      </h1>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 px-16 py-10">
        <a
          href="https://docs.google.com/forms/d/1rH3Lol04VAnWpRb982xRDSKHYkNgAoUowf3FZaMxsYw/viewform?edit_requested=true"
          // target="_blank"
        >
          <div className="group flex flex-col justify-center items-center shadow-lg py-5 ">
            <div className="relative w-40 h-50 ">
              <Image
                height={850}
                width={750}
                src="/pdfFile.png"
                alt=""
                className="hover:stroke-white fill-white "
              />
            </div>
            <div className="px-2 py-4 ">
              <p className="text-gray-700 text-center ">
                  የስልጠና ግምገማ ቅጽ
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://drive.google.com/file/d/1wAZDFvix213b7TrDRfLqkKLcI3oQ8P9x/view?usp=sharing"
          // target="_blank"
        >
          <div className="group flex flex-col justify-center items-center shadow-lg py-5 ">
            <div className="relative w-40 h-50 ">
              <Image
                height={850}
                width={750}
                src="/reso2.png"
                alt=""
                className="hover:stroke-white fill-white "
              />
            </div>
            <div className="px-2 py-4 ">
              <p className="text-gray-700 text-center ">
               የወላጅ / አሳዳጊ የፍቃድ ቅጽ
              </p>
            </div>
          </div>
        </a>

        <a
          href="resor3.pdf"
          // target="_blank"
        >
          <div className="group flex flex-col justify-center items-center shadow-lg py-5 ">
            <div className="relative w-40 h-50 ">
              <Image
                height={850}
                width={750}
                src="/reso3.png"
                alt=""
                className="hover:stroke-white fill-white "
              />
            </div>
            <div className="px-2 py-4 ">
              <p className="text-gray-700 text-center ">
                About DigiTruck Ethiopia
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Resources;
