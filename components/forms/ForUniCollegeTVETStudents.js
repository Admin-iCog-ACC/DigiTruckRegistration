import React from 'react';
import { useStepperContext } from '../../contexts/StepperContext';

function ForUniCollegeTVETStudents() {
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
      <div className="flex gap-10">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Name:</label>
          <div className="input-div-style">
            <input
              type="text"
              onChange={handleChange}
              value={userData['collageName']?.value || ''}
              name="collageName"
              className="input-style"
            />
          </div>
        </div>
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Attending Year:</label>
          <div className="input-div-style">
            <input
              type="number"
              onChange={handleChange}
              value={userData['attendingYear']?.value || ''}
              name="attendingYear"
              className="input-style"
            />
          </div>
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">Department/Field of Study:</label>

        <div className="input-div-style">
          <textarea
            rows={2}
            onChange={handleChange}
            value={userData['department']?.value || ''}
            name="department"
            className="input-style"
          />
        </div>
      </div>
    </div>
  );
}

export default ForUniCollegeTVETStudents;
