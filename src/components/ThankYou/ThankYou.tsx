import React from "react";
import "./thankyou.css";

type Props = {};

const ThankYou = (props: Props) => {
  return (
    <div className="ThankYou">
      <img
        src="/multi-step-form/assets/images/icon-thank-you.svg"
        alt="thank you icon"
      />
      <h2>Thank you</h2>
      <p>
        Thanks for confirming your subscription!We hope you have fun using our
        platform.If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default ThankYou;
