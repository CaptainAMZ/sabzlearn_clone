import { validator } from "../../shares";
import { Validation, InputState } from "../../types";

type Actions = {
  type: "CHANGE";
  validation: Validation;
} & InputState;

const inputReducer = (state: InputState, action: Actions) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validation),
      };
    }
    default: {
      return state;
    }
  }
};

export default inputReducer;
