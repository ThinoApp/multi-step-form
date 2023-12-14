import "./step4.css";
import { itemList } from "../../utils/step3";
import { itemList as plans } from "../../utils/step2";
import { useContext } from "react";
import { CustomContext } from "../../Provider/Provider";

const Step4 = () => {
  const { perMonth, selectedAddOns, selectedPlan } = useContext(CustomContext);

  return (
    <div className="Step4">
      <h1 className="Step4-title">Finishing Up</h1>
      <p className="Step4-subtitle">
        Double-check everything looks OK before confirming
      </p>
      <div className="Step4-menu">
        <div className="Step4-top">
          <div className="Step4-top-heading">
            <div>
              <h2 className="font-ubuntu-b text-MarineBlue">
                {plans[selectedPlan].title} ({perMonth ? "Monthly" : "Yearly"})
              </h2>
              <p className="font-ubuntu text-CoolGray text-sm">
                <u>Change</u>
              </p>
            </div>
            <p className="font-ubuntu-b text-MarineBlue">
              $
              {perMonth
                ? plans[selectedPlan].priceMonth + "/mo"
                : plans[selectedPlan].priceYear + "/yr"}
            </p>
          </div>
          <hr className="w-3/4 self-center" />
          <div className="Step4-middle">
            {itemList
              .filter((item) => selectedAddOns.includes(item.id))
              .map((item) => (
                <div
                  className="w-full flex items-center justify-between px-3"
                  key={item.id}
                >
                  <p className="font-ubuntu text-CoolGray text-[0.7rem]">
                    {item.title}
                  </p>
                  <p className="font-ubuntu text-MarineBlue text-sm">
                    +$
                    {perMonth
                      ? item.priceMonth + "/mo"
                      : item.priceYear + "/yr"}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="Step4-bottom">
        <div className="w-full flex items-center justify-between px-3">
          <p className="font-ubuntu text-CoolGray text-sm">
            Total (per {perMonth ? "month" : "year"})
          </p>
          <h2 className="font-ubuntu-b text-[#483eff] text-lg">
            +$
            {perMonth
              ? itemList
                  .filter((item) => selectedAddOns.includes(item.id))
                  .reduce((acc, cur) => acc + cur.priceMonth, 0) +
                plans[selectedPlan].priceMonth +
                "/mo"
              : itemList
                  .filter((item) => selectedAddOns.includes(item.id))
                  .reduce((acc, cur) => acc + cur.priceYear, 0) +
                plans[selectedPlan].priceYear +
                "/yr"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Step4;
