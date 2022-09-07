import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Register from '../components/Register';
import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import EmergencyContact from '../components/forms/EmergencyContact';
import StudentInformation from '../components/forms/StudentInformation';
import ForUniCollegeTVETStudents from '../components/forms/ForUniCollegeTVETStudents';
import InformationAboutTheProgram from '../components/forms/InformationAboutTheProgram';
import { UseContextProvider } from '../contexts/StepperContext';
import Stepper from '../components/Stepper';
import StepperControl from '../components/StepperControl';
import Final from '../components/forms/Final';


function Application() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    'Student Info',
    'College Students',
    'Emergency Contact',
    'Info about the Program',
    'Done',
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <StudentInformation />;
      case 2:
        return <ForUniCollegeTVETStudents />;
      case 3:
        return <EmergencyContact />;
      case 4:
        return <InformationAboutTheProgram />;
      case 5:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="bg-[#f6f9ff] font-raleway banner-bg-img">
      <RecoilRoot>
        <Nav />
      </RecoilRoot>
      <div>
        <UseContextProvider>
          <div className="bg-[#f6f9ff] ">
            <div className="bg-[#f6f9ff]  flex items-center">
              <div className="lg:w-4/5 mx-auto md:w-4/5 mt-10 rounded-2xl bg-white pb-2 shadow-xl font-raleway">
                <div className="horizontal container">
                  <Stepper steps={steps} currentStep={currentStep} />

                  <div className="my-10 p-10 ">{displayStep(currentStep)}</div>
                </div>

                {currentStep !== steps.length && (
                  <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                  />
                )}
              </div>
            </div>
          </div>
        </UseContextProvider>
      </div>

      <Footer />
    </div>
  );
}

export default Application
