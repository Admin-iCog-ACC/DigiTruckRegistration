function Landing() {
  return (
    <div className="card-container my-14 grid md:grid-cols-2 grid-cols-1 gap-5 justify-between max-w-[1225px] mx-auto px-10">
      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[40rem] flex-row md:w-full md:max-w-none md:m-2">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src="/11.jpg"
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h4 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-[#178c9f]">
            Social Impact
          </h4>
          <p className="block pt-5  mb-14 font-raleway text-base antialiased font-normal leading-relaxed text-gray-700">
            The digital revolution is transforming the world, but the digital
            divide leaves many young Ethiopians behind. Ethiopian public school
            students, in particular, face challenges in STEM education due to a
            lack of comprehensive curriculum and adequate infrastructure.
          </p>
          <a href="https://impact.icogacc.com/" className="inline-block">
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-500 shadow-md w-full max-w-[40rem] flex-row md:w-full md:max-w-none md:m-2">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src="/2.jpg"
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h4 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-[#178c9f]">
            Digital Literacy
          </h4>
          <p className="block mb-8 font-raleway text-base antialiased font-normal leading-relaxed text-gray-700">
            iCog&apos;s Digital Literacy Initiative is an inclusive program
            designed to provide a comprehensive understanding of digital
            technologies, including computer skills, online communication, and
            digital marketing, for individuals and institutions ranging from
            students to business owners.
          </p>
          {/* <a
            href="https://icogacc.com/impact/public+workshops"
            className="inline-block"
          >
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a> */}
        </div>
      </div>

      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[40rem] flex-row md:w-full md:max-w-none md:m-2">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src="/aysrh.jpg"
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h4 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-[#178c9f]">
            AYSRH
          </h4>
          <p className="block mb-7 font-raileway text-base antialiased font-normal leading-relaxed text-gray-700">
            The younger generation looks for digital platforms for information
            about their bodies, health and relationships; yet often has a hard
            time finding credible sources. This campaign was designed to
            disseminate positive AYSRH information.
          </p>
          <a href="https://aysrh.icogacc.com/" className="inline-block">
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[40rem] flex-row md:w-full md:max-w-none md:m-2">
        <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
          <img
            src="/5.jpg"
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <h4 className="block mb-2 font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-[#178c9f]">
            Solve IT
          </h4>
          <p className="block mb-12 font-raleway text-base antialiased font-normal leading-relaxed text-gray-700">
            Solve IT is a nationwide innovation competition that targets young
            talents between the age of 18-28 and it aims to decentralize
            technology by reaching and empowering the grassroots of our society.
          </p>
          <a
            href="https://icogacc.com/impact/solve+it"
            className="inline-block"
          >
            <button
              className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
