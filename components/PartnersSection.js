import Image from "next/image";

function PartnersSection() {
  return (
    <div className="w-full  partner-bg bg-[#087b8d] px-10 pb-20 ">
      <div className="flex flex-col items-center text-white my-10 space-y-3 pb-10">
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 pb-5">
        <div className="flex items-center justify-center">
          <a
            href="https://icogacc.com/"
            title="iCog-ACC"
            // target="_blank"
            className="relative md:w-56 md:h-60 w-64 h-52"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              src="/icog.fav.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent"
            title="Huawei"
            // target="_blank"
            className="relative lg:w-36 lg:h-36 w-20 h-20"
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
        <div className="flex items-center justify-center">
          <a
            href="https://www.close-the-gap.org/"
            // target="_blank"
            title="Close the Gap"
            className="relative lg:w-48 lg:h-48 w-36 h-36 "
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              alt=""
              src="/clodegap.png"
            />
          </a>
        </div>
        <div className="flex items-center justify-center ">
          <a
            href="https://moe.gov.et/"
            //target="_blank"
            title="MoE"
            className="relative lg:w-36 lg:h-36 w-20 h-20 "
          >
            <Image
              className=""
              layout="fill"
              objectFit="fill"
              alt=""
              src="/logoMoE.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
