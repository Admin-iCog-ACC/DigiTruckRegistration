import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';
import Required from '../Required';

function InformationAboutTheProgram() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value, required } = e.target;
    setUserData({
      ...userData,
      [name]: {
        value,
        required,
        error: required ? validateInputs(name, value) : null,
      },
    });
  };
  return (
    <div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
          Where did you hear about this program?
        </label>
        <Required />

        <div className="input-div-style">
          <input
            type="text"
            required
            onChange={handleChange}
            value={userData['wdyhbtp']?.value || ''}
            name="wdyhbtp"
            className="input-style"
          />
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
          Have you participated in such kinds of programs before?
        </label>
        <Required />

        <div className="input-div-style">
          <input
            type="text"
            required
            onChange={handleChange}
            value={userData['hypiskopb']?.value || ''}
            name="hypiskopb"
            className="input-style"
          />
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
          What is your experience with that program?
        </label>
        <Required />

        <div className="input-div-style">
          <input
            type="text"
            required
            onChange={handleChange}
            value={userData['wiyewtp']?.value || ''}
            name="wiyewtp"
            className="input-style"
          />
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
          How do you describe coding/programming?
        </label>
        <Required />

        <div className="input-div-style">
          <input
            type="text"
            required
            onChange={handleChange}
            value={userData['hdydc']?.value || ''}
            name="hdydc"
            className="input-style"
          />
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">
          What do you expect from this program?
        </label>
        <Required />

        <div className="input-div-style">
          <textarea
            rows={2}
            required
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
