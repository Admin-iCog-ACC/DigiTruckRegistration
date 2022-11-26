import Image from "next/image";

function PartnersSection() {
  return (
    <div className="w-full partner-bg bg-[#087b8d] px-10 pb-20 ">
      <div className="flex flex-col items-center text-white my-10 space-y-3 pb-10">
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 pb-5">
        <div className="flex items-center justify-center">
          <a
            href="https://icogacc.com/"
            title="iCog-ACC"
            // target="_blank"
            className="relative md:w-56 md:h-60 w-64 h-44"
          >
            <Image
              className=""
              layout="fill"
              objectFit="fill"
              src="/icog.fav.png"
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center justify-center ">
          <a
            href="https://moe.gov.et/"
            //target="_blank"
            title="MoE"
            className="relative md:w-36 md:h-36 w-44 h-28 "
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
        <div className="flex items-center justify-center">
          <a
            href="https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent"
            title="Huawei"
            // target="_blank"
            className="relative md:w-36 md:h-36 w-28 h-28 "
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
  );
}

export default PartnersSection;
