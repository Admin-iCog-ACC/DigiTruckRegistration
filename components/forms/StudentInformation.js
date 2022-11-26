import React from "react";
import Required from "../Required";
import { useStepperContext } from "../../contexts/StepperContext";
import { validateInputs } from "../../utils/validateInputs";

function StudentInformation({ labels, locale }) {
  const { userData, setUserData } = useStepperContext();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: {
        value,
        required,
        error: required
          ? validateInputs(name, value, locale)
          : name === "phoneNumber"
          ? validateInputs(name, value, locale)
          : null,
      },
    });
  };
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex mx-2 mt-3 w-full">
          <div className="w-full mt-1 md:mt-0 sm:w-1/2 md:w-2/3 flex-1">
            <label className="label-style">{labels.fullName}</label>
            <Required />
            <div className="input-div-style">
              <input
                required
                className="input-style"
                title={labels.textInputRequired}
                onChange={handleChange}
                value={userData["fullName"]?.value || ""}
                name="fullName"
                type="text"
              />
            </div>
            <p className="text-xs text-red-500">
              {userData["fullName"]?.error}
            </p>
          </div>
          <div className="mx-2 mt-1 w-full sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">{labels.phoneNumber}</label>
            <Required />
            <div className="input-div-style">
              <input
                required
                onChange={handleChange}
                value={userData["phoneNumber"]?.value || ""}
                name="phoneNumber"
                className="input-style"
              />
            </div>
            <p className="text-xs text-red-500">
              {userData["phoneNumber"]?.error}
            </p>
          </div>
        </div>
        <div className="flex mx-2 mt-3 w-full">
          <div className="mt-4 w-full sm:w-1/2 md:w-2/3 flex-1 ">
            <p>{labels.gender.gender}</p>
            <div className="flex md:gap-10 gap-2 mt-1">
              <div className="flex space-x-1 items-center">
                <label className="">{labels.gender.male}</label>
                <input
                  onChange={handleChange}
                  value={"Male"}
                  name="gender"
                  type="radio"
                />
              </div>
              <div className="flex space-x-1 items-center">
                <label className="">{labels.gender.female}</label>

                <input
                  onChange={handleChange}
                  value="Female"
                  name="gender"
                  type="radio"
                />
              </div>
            </div>
          </div>
          <div className="mx-2 mt-1 w-full sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">
              {labels.socialMedia.socialMedia}
            </label>
            <p className="text-xs text-slate-400">
              {labels.socialMedia.description}{" "}
            </p>
            <div className="input-div-style">
              <input
                type="text"
                onChange={handleChange}
                value={userData["socialMedia"]?.value || ""}
                name="socialMedia"
                className="input-style"
              />
            </div>
          </div>
        </div>
        <div className="flex mx-2 mt-3  w-full">
          <div className="mr-2 w-full sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">{labels.dateOfBirth}</label>
            <Required />

            <div className="input-div-style w-28 md:w-80 text-xs md:">
              <input
                required
                title={labels.textInputRequired}
                type="date"
                onChange={handleChange}
                value={userData["dob"]?.value || ""}
                name="dob"
                className="input-style"
              />
            </div>
            <p className="text-xs text-red-500">{userData["dob"]?.error}</p>
          </div>
          <div className="mr-2  w-full sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">{labels.schoolName}</label>
            <Required />

            <div className="input-div-style">
              <input
                required
                title={labels.textInputRequired}
                type="schoolName"
                onChange={handleChange}
                value={userData["schoolName"]?.value || ""}
                name="schoolName"
                className="input-style"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 md:gap-0 mx-2 mt-3 w-full">
          <div className=" w-full sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">{labels.emailAddress.email}</label>
            <Required />
            <p className="text-xs text-slate-400">
              {labels.emailAddress.description}{" "}
            </p>
            <div className="input-div-style">
              <input
                required
                title={labels.textInputRequired}
                type="email"
                onChange={handleChange}
                value={userData["email"]?.value || ""}
                name="email"
                className="input-style"
              />
            </div>
            <p className="text-xs text-red-500">{userData["email"]?.error}</p>
          </div>
          <div className=" w-full mt-9 md:mt-0 sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">{labels.gradeLevel}</label>
            <Required />
            <div className="input-div-style">
              <select
                required
                title={labels.gradeLevelRequired}
                name="gradeLevel"
                value={userData["gradeLevel"]?.value || ""}
                onChange={handleChange}
                className="select-style md:w-2/3"
              >
                <option value="">{labels.gradeLevelOptions[0]}</option>
                <option value="Middle School">
                  {labels.gradeLevelOptions[1]}
                </option>
                <option value="High School">
                  {labels.gradeLevelOptions[2]}
                </option>
                <option value="University">
                  {labels.gradeLevelOptions[3]}
                </option>
                <option value="College">{labels.gradeLevelOptions[4]}</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
            <label className="label-style">{labels.address}</label>
            <Required />
            <div className="input-div-style">
              <select
                required
                title={labels.addressRequired}
                onChange={handleChange}
                value={userData["address"]?.value || ""}
                name="address"
                className="select-style md:w-2/3"
              >
                <option value="">{labels.addressOptions[0]}</option>
                <option value="Addis Ababa">{labels.addressOptions[1]}</option>
                <option value="Harar">{labels.addressOptions[2]}</option>
                <option value="Arbaminch">{labels.addressOptions[3]}</option>
                <option value="Hawassa">{labels.addressOptions[4]}</option>
                <option value="Bahirdar">{labels.addressOptions[5]}</option>
                <option value="Gonder">{labels.addressOptions[6]}</option>
                <option value="Gambella">{labels.addressOptions[7]}</option>
                <option value="Jimma">{labels.addressOptions[8]}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentInformation;
