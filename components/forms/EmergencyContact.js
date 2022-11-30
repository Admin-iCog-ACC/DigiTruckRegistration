import Required from "../Required";
import React from "react";
import {useStepperContext} from "../../contexts/StepperContext";
import {validateInputs} from "../../utils/validateInputs";
function EmergencyContact({labels, locale}) {
  const {userData, setUserData} = useStepperContext();
  React.useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, []);
  const handleChange = (e) => {
    const {name, value, required} = e.target;
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
    <div className=' '>
      <div className='mx-2 w-full sm:w-1/2 md:w-2/3  flex-1'>
        <label className='label-style'>{labels.fullName}</label>
        <Required />
        <div className='input-div-style'>
          <input
            required
            type='text'
            title={labels.textInputRequired}
            onChange={handleChange}
            value={userData["contactFullName"]?.value || ""}
            name='contactFullName'
            className='input-style'
          />
        </div>
        <p className='text-xs text-red-500'>
          {userData["contactFullName"]?.error}
        </p>
      </div>
      <div className='flex gap-10'>
        <div className='mx-2 w-full sm:w-1/2 md:w-2/3  flex-1'>
          <label className='label-style'>{labels.phone}</label>
          <Required />

          <div className='input-div-style'>
            <input
              required
              type='text'
              title={labels.textInputRequired}
              onChange={handleChange}
              value={userData["contactPhone"]?.value || ""}
              name='contactPhone'
              className='input-style'
            />
          </div>
          <p className='text-xs text-red-500'>
            {userData["contactPhone"]?.error}
          </p>
        </div>
        <div className='mx-2 w-full sm:w-1/2 md:w-2/3  flex-1'>
          <label className='label-style'>{labels.contactRelationship}</label>
          <Required />
          <div className='input-div-style'>
            <input
              required
              type='text'
              title={labels.contactRelationship}
              onChange={handleChange}
              value={userData["contactRelationship"]?.value || ""}
              name='contactRelationship'
              className='input-style'
            />
          </div>
          <p className='text-xs text-red-500'>
            {userData["contactFullName"]?.error}
          </p>
        </div>

        <div className='mx-2 w-full sm:w-1/2 md:w-2/3  flex-1'>
          <label className='label-style'>{labels.otherPhone}</label>

          <div className='input-div-style'>
            <input
              type='text'
              onChange={handleChange}
              value={userData["contactOtherPhone"]?.value || ""}
              name='contactOtherPhone'
              className='input-style'
            />
          </div>
          <p className='text-xs text-red-500'>
            {userData["contactOtherPhone"]?.error}
          </p>
        </div>
      </div>
    </div>
  );
}
export default EmergencyContact;
