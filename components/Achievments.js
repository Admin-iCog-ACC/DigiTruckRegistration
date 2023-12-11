export default function () {
  return (
    <div className="max-w-[1000px] mx-auto w-full flex-1 my-20 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-0 lg:space-x-5">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#ef4b20] flex justify-center items-center">
            <img
              className="w-10 h-10 mx-auto  fill-current"
              src="location.png"
            />
          </div>
          <span className="text-md font-bold">4 Cities</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#ef4b20] flex justify-center items-center">
            <img
              className="w-10 h-10 mx-auto  fill-current"
              src="school.png"
            />
          </div>
          <span className="text-md font-bold">67 Schools</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#ef4b20] flex justify-center items-center">
            <img
              className="w-10 h-10 mx-auto  fill-current"
              src="teachers.png"
            />
          </div>
          <span className="text-md font-bold">27 Teachers</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#ef4b20] flex justify-center items-center">
            <img
              className="w-10 h-10 mx-auto  fill-current"
              src="people.png"
            />
          </div>
          <span className="text-md font-bold">930 Students</span>
        </div>

        <div className="flex flex-col items-center md:col-start-1 md:col-span-2">
          <div className="w-16 h-16 rounded-full bg-[#ef4b20] flex justify-center items-center">
            <img
              className="w-10 h-10 mx-auto  fill-current"
              src="female.png"
            />
          </div>
          <span className="text-md font-bold">375 Female</span>
        </div>

        <div className="flex flex-col items-center md:col-start-3 md:col-span-2 ">
          <div className="w-16 h-16 rounded-full bg-[#ef4b20] flex justify-center items-center">
            <img
              className="w-10 h-10 mx-auto  fill-current"
              src="time.png"
            />
          </div>
          <span className="text-md font-bold">400 Hours</span>
        </div>
      </div>
    </div>
  );
}
