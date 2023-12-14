import "./step1.css";
import { useFormContext } from "react-hook-form";

const Step1 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="Step1">
      <h1 className="Step1-title">Personal info</h1>
      <p className="Step1-subtitle">
        Please provide your name, email address, and phone number.
      </p>
      <form className="Step1-form">
        <div className="Step1-form--item">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            {...register("name")}
          />
        </div>
        <div className="Step1-form--item">
          <div className="w-full flex items-center justify-between">
            <label htmlFor="email">Email Address</label>
            {errors.email && <p className="error">Enter a valid email</p>}
          </div>
          <input
            id="email"
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email", {
              required: true,
              pattern: /^[a-z]+@[a-z]{3,8}\.[a-z]{0,4}$/,
            })}
            className={`${errors.email ? "input--error" : ""}`}
          />
        </div>
        <div className="Step1-form--item">
          <div className="w-full flex items-center justify-between">
            <label htmlFor="phone">Phone Number</label>
            {errors.tel && <p className="error">This field is required</p>}
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            {...register("tel", {
              required: true,
              pattern: /^\+[0-9]{2,4}[0-9]{8,14}$/,
            })}
            className={`${errors.tel ? "input--error" : ""}`}
          />
        </div>
        {/* <button className="Step1-form--btn">Next Step</button> */}
      </form>
    </div>
  );
};

export default Step1;
