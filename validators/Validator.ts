import { requiredValue, minValue, maxValue, emailValue } from "./Rules";
import { Validation } from "../types";
import { emailTest } from "./Regex";

type ValidatorFunction = {
  (value: string, validation: Validation): boolean;
};
const validator: ValidatorFunction = (value, validation) => {
  let validationResults = [];
  let rc = null;
  let ec = null;

  for (const validator of validation) {

    if (validator?.value === requiredValue) {
      value.trim().length === 0 && validationResults.push(false);
    }
    else if (validator?.value === minValue) {
      value.trim().length < validator.min && validationResults.push(false);
    }
    else if (validator?.value === maxValue) {
      value.trim().length > validator.max && validationResults.push(false);
    }
    else if (validator?.value === emailValue) {
      !emailTest(value.toLocaleLowerCase()) && validationResults.push(false);
    }
  }

  console.log({ rc, ec });

  if (validationResults.length) {
    return false;
  } else {
    return true;
  }
};

export default validator;
