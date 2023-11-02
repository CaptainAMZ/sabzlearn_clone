import { useReducer, useEffect } from "react";
import inputReducer from "../../../../reducers/Input/InputReducer";
import { InputProps, OnChangeEvent } from "../../../../types";

import "./Input.css";

const Input = (props: InputProps) => {
  const {
    id,
    element,
    type,
    placeholder,
    className,
    validation,
    onInputHandler,
  } = props;

  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = mainInput;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);

  const onChangeHandler = (e: OnChangeEvent): void => {
    dispatch({
      type: "CHANGE",
      value: e.target.value,
      validation: validation,
      isValid: true,
    });
  };

  const finalElement: React.ReactNode =
    element === "input" ? (
      <input
        type={type}
        placeholder={placeholder}
        className={`${className} ${mainInput.isValid ? "success" : "error"}`}
        value={mainInput.value}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={placeholder}
        className={`${className} ${mainInput.isValid ? "success" : "error"}`}
        value={mainInput.value}
        onChange={onChangeHandler}
      />
    );

  return <div> {finalElement} </div>;
};

export default Input;
