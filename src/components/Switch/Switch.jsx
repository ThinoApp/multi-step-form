import "./switch.css";
import PropTypes from "prop-types";

const Switch = (props) => {
  return (
    <div className="Switch" onClick={() => props.onclick()}>
      <p
        className={`duration-300 text-sm ${
          props.perMonth ? "text-MarineBlue" : "text-CoolGray"
        }`}
      >
        {props.labels.left}
      </p>
      <div className={`Switch-toggle`}>
        <div className={`ball ${props.perMonth ? "" : "right"}`} />
      </div>
      <p
        className={`duration-300 text-sm ${
          !props.perMonth ? "text-MarineBlue" : "text-CoolGray"
        }`}
      >
        {props.labels.right}
      </p>
    </div>
  );
};

export default Switch;
Switch.propTypes = {
  labels: PropTypes.objectOf({
    left: PropTypes.string,
    right: PropTypes.string,
  }),
  perMonth: PropTypes.bool,
  onclick: PropTypes.func,
};
