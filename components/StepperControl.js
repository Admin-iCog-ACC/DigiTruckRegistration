import { useMutation } from 'react-query';
import { useStepperContext } from '../contexts/StepperContext';
import { modifyObj } from '../utils/modifyObject';
import { acc } from '../utils/api';

export default function StepperControl({ handleClick, currentStep, steps }) {
  const { userData } = useStepperContext();

  const { isFetching, data, error, mutate } = useMutation(acc);
  // const router = useRouter();

  const sendForm = () => {
    if (userData !== null || userData === {}) {
      const newData = modifyObj(userData);
      mutate(newData);
    }
    handleClick('next');
  };

  // useEffect(() => {
  //   if (data && !error) {
  //     handleClick('next');
  //   }
  // }, [data]);

  let unfinishedStep = true;
  const values = Object.values(userData);
  const count = values.filter((data) => data?.required).length;
  switch (currentStep) {
    case 1:
      unfinishedStep = count < 6;
      break;
    case 2:
      unfinishedStep = count < 6;
      break;
    case 3:
      unfinishedStep = count < 8;
      break;
    case 4:
      unfinishedStep = count < 13;
      break;
    default:
      break;
  }

  const hasError = values.some((e) => e?.required && e?.error != null);
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? ' cursor-not-allowed opacity-50 ' : ''
        }`}
      >
        Back
      </button>

      <button
        disabled={unfinishedStep || hasError}
        onClick={() => {
          currentStep === steps.length - 1 ? sendForm() : handleClick('next');
        }}
        className="cursor-pointer disabled:bg-gray-400 rounded-lg bg-[#EE4823] py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white"
      >
        {currentStep === steps.length - 1 ? 'Submit Form' : 'Continue'}
      </button>
    </div>
  );
}