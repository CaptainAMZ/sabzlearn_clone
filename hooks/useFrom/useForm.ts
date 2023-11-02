import { useCallback, useReducer } from "react";
import {
  FormReducerType,
  OnInputHandlerType,
  UseFormType,
  InputReducerState,
  InputReducerAction,
} from "../../types";

const formReducer: FormReducerType = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      let isFormValid = true;
      for (const inputID in state.inputs) {
        if (inputID === action.inputId)
          isFormValid = isFormValid && action.isValid;
        else {
          isFormValid =
            isFormValid &&
            state.inputs[inputID as keyof typeof state.inputs]!.isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isFormValid,
      };
    }
    default:
      return state;
  }
};

export const useForm: UseFormType = (initInputs, initFormValid) => {
  const [formState, dispatch] = useReducer<
    React.Reducer<InputReducerState, InputReducerAction>
  >(formReducer, {
    inputs: initInputs,
    isFormValid: initFormValid,
  });
  const onInputHandler: OnInputHandlerType = useCallback(
    (id, value, isValid) => {
      dispatch({
        type: "INPUT_CHANGE",
        value,
        isValid,
        inputId: id,
      });
    },
    []
  );

  return [formState, onInputHandler];
};
