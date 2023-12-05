import Image from "next/image";

function PartnersSection() {
  return (
    <div className="h-full">

    <div className="w-full  px-10 pb-20 ">
    <h2 className="text-4xl pt-10 font-fredoka text-[#175DAA] text-center">Our Partners</h2>
      <div className="grid pt-20 md:grid-cols-3 grid-cols-1 md:gap-10 gap-20 pb-5">

        <div className="flex pt-5 md:pt-0 items-center justify-center">
          <a
            href="https://icogacc.com/"
            title="iCog-ACC"
            // target="_blank"
            className="relative w-36 h-36"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              src="/icog.fav-upscaled(3).png"
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center justify-center ">
          <a
            href="https://moe.gov.et/"
            //target="_blank"
            title="MoE"
            className="relative w-32 h-32 -ml-2"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              alt=""
              src="/logoMoE-upscaled.png"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent"
            title="Huawei"
            // target="_blank"
            className="relative w-28 h-28 "
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              src="/huaweiLogo-removebg-preview.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PartnersSection;
