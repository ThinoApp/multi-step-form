import "./step3.css";
import { itemList } from "../../utils/step3";
import { useContext, useEffect, useState } from "react";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
import PropTypes from "prop-types";
import { CustomContext } from "../../Provider/Provider";

const CustomCheckbox = (props) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (props.selected.includes(props.index)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [props.selected]);

  CustomCheckbox.propTypes = {
    selected: PropTypes.arrayOf(PropTypes.number),
    index: PropTypes.number,
  };
  return (
    <div>
      {checked ? (
        <FiCheckSquare
          size={20}
          onClick={() => setChecked((prev) => !prev)}
          color="blue"
        />
      ) : (
        <FiSquare
          size={20}
          onClick={() => setChecked((prev) => !prev)}
          color="blue"
        />
      )}
    </div>
  );
};
const Step3 = () => {
  const { perMonth, selectedAddOns, setSelectedAddOns } =
    useContext(CustomContext);
  // const [selected, setSelected] = useState([]);

  const handleSelect = (value) => {
    setSelectedAddOns((prev) => {
      const isSelected = selectedAddOns.includes(value);
      if (isSelected) return prev.filter((item) => item != value);
      return [...prev, value];
    });
  };
  return (
    <div className="Step3">
      <h1 className="Step3-title">Pick add-ons</h1>
      <p className="Step3-subtitle">
        Add-ons help enhance your gaming experience
      </p>
      <div className="Step3-menu">
        <div className="Step3-menu-container flex-col">
          {itemList.map((item, index) => (
            <div
              className={`Step3-menu-item ${
                selectedAddOns.includes(item.id) ? "selected" : ""
              }
              items-center
                flex-row gap-4
                h-fit w-full
              `}
              onClick={() => handleSelect(item.id)}
              key={index}
            >
              <CustomCheckbox selected={selectedAddOns} index={item.id} />
              <div className="">
                <h2 className="mt-auto font-ubuntu-b text-MarineBlue">
                  {item.title}
                </h2>
                <p className="font-ubuntu text-CoolGray text-xs">
                  {item.subtitle}
                </p>
              </div>
              <p className="font-ubuntu text-CoolGray text-sm ml-auto">
                ${perMonth ? item.priceMonth + "/mo" : item.priceYear + "/yr"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step3;
