import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import NavBar from "./components/NavBar/NavBar";
import { CustomContext } from "./Provider/Provider";

function App() {
  const { active, setActive } = useContext(CustomContext);
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = () => {
    setActive((prev) => prev + 1);
  };
  return (
    <div className="App-container">
      <div className="App-container--content">
        <NavBar />
        <FormProvider {...{ register, formState, handleSubmit }}>
          <MainContainer />
        </FormProvider>
      </div>
      <div className="w-3/4  sm:hidden flex justify-between mb-8 absolute bottom-0">
        <button
          className={`btn-back ${
            active != 1 ? "" : "hidden pointer-events-none"
          }`}
          onClick={() => setActive((prev) => --prev)}
        >
          Go Back
        </button>
        <button
          className="btn-next"
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
}

export default App;
