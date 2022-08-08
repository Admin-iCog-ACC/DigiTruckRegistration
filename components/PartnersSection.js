import Image from 'next/image';

function PartnersSection() {
  return (
    <div className="w-full bg-[#087b8d] p-10">
      <div className="flex flex-col items-center text-white my-10 space-y-3">
        <h2 className="text-4xl font-bold">DigiTruck Ethiopia</h2>
        <h3>Partners</h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex items-center justify-center">
          <a
            href="https://icogacc.com/"
            title="iCog-ACC"
            // target="_blank"
            className="relative w-48 h-48"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              src="/hnet.com-image.png"
              alt=''
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://www.huawei.com/en/?ic_medium=direct&ic_source=surlent"
            title="Huawei"
            // target="_blank"
            className="relative w-36 h-36"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              src="/huaweiLogo-removebg-preview.png"
              alt=''
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://www.close-the-gap.org/"
           // target="_blank"
            title="Close the Gap"
            className="relative w-48 h-48"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              alt=''
              src="/clodegap.png"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://moe.gov.et/"
            //target="_blank"
            title="MoE"
            className="relative w-60 h-36"
          >
            <Image
              className=""
              layout="fill"
              objectFit="fill"
              alt=''
              src="/MoeRemoved.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
