import { createContext, useState } from "react";
import PropTypes from "prop-types";
const CustomContext = createContext();
const Provider = ({ children }) => {
  const [active, setActive] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [perMonth, setPerMonth] = useState(true);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  return (
    <CustomContext.Provider
      value={{
        active,
        setActive,
        selectedPlan,
        setSelectedPlan,
        perMonth,
        setPerMonth,
        selectedAddOns,
        setSelectedAddOns,
      }}
    >
      {children}
    </CustomContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node,
};

export { CustomContext };
export default Provider;
