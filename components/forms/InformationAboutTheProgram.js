import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';
import Required from '../Required';

function InformationAboutTheProgram({ labels, locale }) {
  const { userData, setUserData } = useStepperContext();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });   
  }, [])
  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: {
        value,
        required,
        error: required ? validateInputs(name, value, locale) : null,
      },
    });
  };
  return (
    <div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
        {labels.where}
        </label>
        <Required />

        <div className="input-div-style">
          {/* <input
            type="text"
            required
            title={labels.textInputRequired}
            onChange={handleChange}
            value={userData['wdyhbtp']?.value || ''}
            name="wdyhbtp"
            className="input-style"
          /> */}
          <select
              required
              title={labels.gradeLevelRequired}
              name="wdyhbtp"
              value={userData["wdyhbtp"]?.value || ""}
              onChange={handleChange}
              className="select-style md:w-2/3"
            >
              <option value="">{labels.whereOptions[0]}</option>
              <option value="Instagram">
                {labels.whereOptions[1]}
              </option>
              <option value="Facebook">{labels.whereOptions[2]}</option>
              <option value="LinkedIn">{labels.whereOptions[3]}</option>
              <option value="Telegram">{labels.whereOptions[4]}</option>
              <option value="From a friend">{labels.whereOptions[5]}</option>
              <option value="Other">{labels.whereOptions[6]}</option>
              
            </select>
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
        {labels.participation}
        </label>
        <Required />

        <div className="input-div-style">
          {/* <input
            type="text"
            required
            title={labels.textInputRequired}
            onChange={handleChange}
            value={userData['hypiskopb']?.value || ''}
            name="hypiskopb"
            className="input-style"
          /> */}
          <select
              required
              title={labels.gradeLevelRequired}
              name="hypiskopb"
              value={userData["hypiskopb"]?.value || ""}
              onChange={handleChange}
              className="select-style md:w-2/3"
            >
              <option value="">{labels.participationOptions[0]}</option>
              <option value="Yes">
                {labels.participationOptions[1]}
              </option>
              <option value="No">{labels.participationOptions[2]}</option>
             
              
            </select>
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
        {labels.experience}
        </label>
        {/* <Required /> */}

        <div className="input-div-style">
          <input
            type="text"
            // required
            // title={labels.textInputRequired}
            onChange={handleChange}
            value={userData['wiyewtp']?.value || ''}
            name="wiyewtp"
            className="input-style"
          />
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
        {labels.coding}
        </label>
        <Required />

        <div className="input-div-style">
          <input
            type="text"
            required
            title={labels.textInputRequired}
            onChange={handleChange}
            value={userData['hdydc']?.value || ''}
            name="hdydc"
            className="input-style"
          />
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
        {labels.expectations}
        </label>
        <Required />

        <div className="input-div-style">
          <textarea
            rows={2}
            required
            title={labels.textInputRequired}
            onChange={handleChange}
            value={userData['wdyeftp']?.value || ''}
            name="wdyeftp"
            className="input-style"
          />
        </div>
      </div>
    </div>
  );
}

export default InformationAboutTheProgram;
