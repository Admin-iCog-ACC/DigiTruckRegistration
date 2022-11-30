import Required from "../Required";
import React from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import { validateInputs } from "../../utils/validateInputs";
function EmergencyContact({ labels, locale }) {
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
          : name === "contactPhone" || name === "contactOtherPhone"
          ? validateInputs(name, value, locale)
          : null,
      },
    });
  };
  return (
    <div className=" ">
      <div className="md:flex flex-row gap-10">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.fullName}</label>
          <Required />
          <div className="input-div-style">
            <input
              required
              type="text"
              title={labels.textInputRequired}
              onChange={handleChange}
              value={userData["contactFullName"]?.value || ""}
              name="contactFullName"
              className="input-style"
            />
          </div>
          <p className="text-xs text-red-500">
            {userData["contactFullName"]?.error}
          </p>
        </div>
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.relation}</label>
          <Required />
          <div className="input-div-style">
            {/* <input
              required
              type="text"
              title={labels.textInputRequired}
              onChange={handleChange}
              value={userData["contactRelation"]?.value || ""}
              name="contactRelation"
              className="input-style"
            /> */}
            <select
              required
              title={labels.gradeLevelRequired}
              name="contactRelation"
              value={userData["contactRelation"]?.value || ""}
              onChange={handleChange}
              className="select-style md:w-2/3"
            >
              <option value="">{labels.relationOptions[0]}</option>
              <option value="Father">
                {labels.relationOptions[1]}
              </option>
              <option value="Mother">{labels.relationOptions[2]}</option>
              <option value="Brother">{labels.relationOptions[3]}</option>
              <option value="Sister">{labels.relationOptions[4]}</option>
              <option value="Uncle">{labels.relationOptions[5]}</option>
              <option value="Aunt">{labels.relationOptions[6]}</option>
              <option value="Guardian">{labels.relationOptions[7]}</option>
              <option value="Other">{labels.relationOptions[8]}</option>
              
            </select>
          </div>
          <p className="text-xs text-red-500">
            {userData["contactRelation"]?.error}
          </p>
        </div>
      </div>

      <div className="md:flex flex-row gap-10">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.phone}</label>
          <Required />

          <div className="input-div-style">
            <input
              required
              type="text"
              title={labels.textInputRequired}
              onChange={handleChange}
              value={userData["contactPhone"]?.value || ""}
              name="contactPhone"
              className="input-style"
            />
          </div>
          <p className="text-xs text-red-500">
            {userData["contactPhone"]?.error}
          </p>
        </div>
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">{labels.otherPhone}</label>

          <div className="input-div-style">
            <input
              type="text"
              onChange={handleChange}
              value={userData["contactOtherPhone"]?.value || ""}
              name="contactOtherPhone"
              className="input-style"
            />
          </div>
          <p className="text-xs text-red-500">
            {userData["contactOtherPhone"]?.error}
          </p>
        </div>
      </div>
    </div>
  );
}
export default EmergencyContact;
