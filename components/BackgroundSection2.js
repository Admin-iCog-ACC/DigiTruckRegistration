import Image from "next/image";

function BackgroundSection() {
  return (
    <>
      <div className="max-w-[1300px] mb-5 mx-auto ml-1  px-5 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="relative md:h-100 md:w-100 h-96 w-full md:mx-0 mx-4">
            <Image
              src="/ethiopiabg.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>

          <div className="space-y-6 py-12 lg:pl-4">
            <h2 className="text-4xl font-fredoka text-[#175DAA] text-center">
              About US{" "}
            </h2>
            <p className="text-lg text-gray-600 text-center md:text-left">
              DigiTruck Ethiopia, the cutting-edge mobile technology education
              center on a mission to promote STEAM (science, technology,
              engineering, arts and mathematics) education throughout Ethiopia.
              We stand committed to providing coding and robotics training to
              underprivileged students and aspiring professionals by leveraging
              our state-of-the-art mobile platform.
            </p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-screen-lg p-4">
        <div class="card bg-[#ef4b20] text-white rounded-xl shadow-lg p-4">
          <h3 class="font-bold text-xl mb-2">
            Train Students in Emerging Technologies
          </h3>
          <p>
            Equip students with the skills they need to succeed in the
            ever-changing tech landscape.
          </p>
        </div>

        <div class="card bg-[#1a5fab] text-white  rounded-xl shadow-lg p-4">
          <h3 class="font-bold text-xl mb-2">
            Narrow the Gender Gap in Digital Skills
          </h3>
          <p>Empower women and girls to become leaders in the digital world.</p>
        </div>

        <div class="card bg-[#ef4b20] text-white rounded-xl shadow-lg p-4">
          <h3 class="font-bold text-xl mb-2">
            Build a Digital Community for Students
          </h3>
          <p>
            Connect students with each other and provide them with resources and
            support.
          </p>
        </div>
      </div>
    </>
  );
}

export default BackgroundSection;
