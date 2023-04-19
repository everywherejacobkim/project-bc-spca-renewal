import { useState } from "react";
import classNames from "classnames";

const SubscribeForm = ({
  title,
  description,
  placeholder,
  bgColor,
  btnColor,
  btnTextColor,
}) => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setSubscribeEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subscribeEmail || !/\S+@\S+\.\S+/.test(subscribeEmail)) {
      setIsValidEmail(false);
      return;
    }
    console.log(subscribeEmail);
    setIsFormSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("w-full px-4 py-8", bgColor || "bg-gray-400")}
    >
      <label className="text-start">
        <h1 className="text-base font-semibold text-white mb-1">{title}</h1>
        <p>{description}</p>
      </label>
      <div>
        <input
          type="text"
          value={subscribeEmail}
          onChange={handleInputChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-3xl shadow-sm"
        />
        {!isValidEmail && (
          <p className="text-red-500 text-start ml-4">
            *Please enter a valid email address.
          </p>
        )}
        <button
          type="submit"
          className={classNames(
            "w-full text-base rounded-3xl py-2 mt-2",
            btnColor || "bg-black",
            btnTextColor || "text-white"
          )}
        >
          {isFormSubmitted ? "Thanks for subscribing!" : "SIGN UP"}
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
