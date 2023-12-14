import "./step2.css";
import { itemList } from "../../utils/step2";
import Switch from "../Switch/Switch";
import { useContext } from "react";
import { CustomContext } from "../../Provider/Provider";
const Step2 = () => {
  const { selectedPlan, setSelectedPlan, perMonth, setPerMonth } =
    useContext(CustomContext);
  return (
    <div className="Step2">
      <h1 className="Step2-title">Select your plan</h1>
      <p className="Step2-subtitle">
        You have the option of monthly or yearly billing
      </p>
      <div className="Step2-menu">
        <div className="Step2-menu-container flex-col sm:flex-row">
          {itemList.map((item, index) => (
            <div
              className={`Step2-menu-item ${
                index === selectedPlan ? "selected" : ""
              } ${!perMonth ? "h-40" : "h-44"}
                flex-row gap-4 sm:flex-col
                h-fit w-full sm:w-2/3
              `}
              onClick={() => setSelectedPlan(index)}
              key={index}
            >
              <img src={item.icon} className="Step2-menu-item-icon" />
              <div className="mt-0 sm:mt-4">
                <h2 className="mt-auto font-ubuntu-b text-MarineBlue">
                  {item.title}
                </h2>
                <p className="font-ubuntu text-CoolGray text-sm">
                  ${perMonth ? item.priceMonth + "/mo" : item.priceYear + "/yr"}
                </p>
                {perMonth && (
                  <p className="text-sm text-MarineBlue">
                    <small>2 month free</small>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        <Switch
          labels={{ left: "Monthly", right: "Yearly" }}
          onclick={() => setPerMonth((prev) => !prev)}
          perMonth={perMonth}
        />
      </div>
    </div>
  );
};

export default Step2;
