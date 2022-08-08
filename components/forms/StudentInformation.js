import Required from '../Required';
import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';

function StudentInformation() {
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
    <div className="flex flex-col  ">
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3 flex-1">
        <label className="label-style">Full Name :</label>
        <Required />
        <div className='input-div-style'>
          <input
            required
            className="input-style"
            onChange={handleChange}
            value={userData['fullName']?.value || ''}
            name="fullName"
            type="text"
          />
        </div>
        <p className="text-xs text-red-500">{userData['fullName']?.error}</p>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3 flex-1">
        <p>Gender: </p>
        <div className="flex gap-10">
          <div className="flex space-x-1 items-center">
            <label className="">Male</label>
            <input
              onChange={handleChange}
              value="Male"
              name="gender"
              type="radio"
            />
          </div>
          <div className="flex space-x-1 items-center">
            <label className="">Female</label>

            <input
              onChange={handleChange}
              value="Female"
              name="gender"
              type="radio"
            />
          </div>
        </div>
      </div>

      <div className="mx-2 mt-3 w-full flex">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Date of Birth:</label>
          <Required />

          <div className="input-div-style">
            <input
              required
              type="date"
              onChange={handleChange}
              value={userData['dob']?.value || ''}
              name="dob"
              className="input-style"
            />
          </div>
          <p className="text-xs text-red-500">{userData['dob']?.error}</p>
        </div>

        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Phone Number :</label>
          <div className="input-div-style">
            <input
              onChange={handleChange}
              value={userData['phoneNumber']?.value || ''}
              name="phoneNumber"
              className="input-style"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Email Address:</label>
          <Required />
          <p className="text-xs text-slate-400">
            We will be using the email as a primary mode of contact
          </p>
          <div className="input-div-style">
            <input
              required
              type="email"
              onChange={handleChange}
              value={userData['email']?.value || ''}
              name="email"
              className="input-style"
            />
          </div>
          <p className="text-xs text-red-500">{userData['email']?.error}</p>
        </div>
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Social Media:</label>
          <p className="text-xs text-slate-400">
            Your telegram and/or other social media account name
          </p>
          <div className="input-div-style">
            <input
              type="text"
              onChange={handleChange}
              value={userData['socialMedia']?.value || ''}
              name="socialMedia"
              className="input-style"
            />
          </div>
        </div>
      </div>
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">Address/City of Residence:</label>
        <Required />
        <div className="input-div-style">
          <input
            required
            type="address"
            onChange={handleChange}
            value={userData['address']?.value || ''}
            name="address"
            className="input-style"
          />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">School Name:</label>
          <Required />

          <div className="input-div-style">
            <input
              required
              type="schoolName"
              onChange={handleChange}
              value={userData['schoolName']?.value || ''}
              name="schoolName"
              className="input-style"
            />
          </div>
        </div>
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Grade Level:</label>
          <Required />
          <div className="input-div-style">
          <select
                required
                name="gradeLevel"
                value={userData['gradeLevel']?.value || ''}
                onChange={handleChange}
                className="select-style md:w-2/3"
              >
                <option value="">- Select -</option>
                <option>Middle School</option>
                <option>High School</option>
                <option>University</option>
                <option>College</option>
                <option>TVET</option>
              </select>
            {/* <input
              
              type="text"
              onChange={handleChange}
              value={userData['gradeLevel']?.value || ''}
              name="gradeLevel"
              className="input-style"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentInformation;
