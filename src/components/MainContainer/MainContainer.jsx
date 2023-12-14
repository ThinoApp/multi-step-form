import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";

import "./mainContainer.css";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import { useContext } from "react";
import { CustomContext } from "../../Provider/Provider";
import { useFormContext } from "react-hook-form";
import ThankYou from "../ThankYou/ThankYou";

const MainContainer = () => {
  const { active, setActive } = useContext(CustomContext);
  const { handleSubmit } = useFormContext();

  const onSubmit = () => {
    setActive((prev) => prev + 1);
  };
  // console.log(formState.isValid);
  return (
    <div className="MainContainer px-0 lg:px-16 absolute sm:relative h-fit sm:h-full w-[90%] sm:w-full">
      {active === 1 && <Step1 />}
      {active === 2 && <Step2 />}
      {active === 3 && <Step3 />}
      {active === 4 && <Step4 />}
      {active === 5 && <ThankYou />}
      <div className="w-3/4 hidden sm:flex justify-between mb-8 absolute bottom-0">
        <button
          className={`btn-back ${
            active != 1 ? "" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setActive((prev) => --prev)}
        >
          Go Back
        </button>
        <button
          className={`btn-next 
          `}
          onClick={() => {
            if (active === 1) {
              handleSubmit(onSubmit)();
            } else {
              setActive((prev) => {
                if (prev + 1 > 5) {
                  return 1;
                } else {
                  return prev + 1;
                }
              });
            }
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default MainContainer;
