import Required from '../Required';
import { useStepperContext } from '../../contexts/StepperContext';
import { validateInputs } from '../../utils/validateInputs';
function EmergencyContact() {
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
    <div className=" ">
      <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
        <label className="label-style">Contact Full Name:</label>
        <Required />
        <div className="input-div-style">
          <input
            required
            type="contactFullName"
            onChange={handleChange}
            value={userData['contactFullName']?.value || ''}
            name="contactFullName"
            className="input-style"
          />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Contact Phone:</label>
          <Required />

          <div className="input-div-style">
            <input
              required
              type="text"
              onChange={handleChange}
              value={userData['contactPhone']?.value || ''}
              name="contactPhone"
              className="input-style"
            />
          </div>
        </div>
        <div className="mx-2 w-full sm:w-1/2 md:w-2/3  flex-1">
          <label className="label-style">Contact Other Phone:</label>

          <div className="input-div-style">
            <input
              type="text"
              onChange={handleChange}
              value={userData['contactOtherPhone']?.value || ''}
              name="contactOtherPhone"
              className="input-style"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmergencyContact;
