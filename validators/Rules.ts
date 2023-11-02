import {
  RequiredValidatorRule,
  MinValidatorRule,
  MaxValidatorRule,
  EmailValidatorRule,
} from "../types";

export const requiredValue: "REQUIRED_VALUE" = "REQUIRED_VALUE";
export const minValue: "MIN_VALUE" = "MIN_VALUE";
export const maxValue: "MAX_VALUE" = "MAX_VALUE";
export const emailValue: "EMAIL_VALUE" = "EMAIL_VALUE";

export const requiredValidator = (): RequiredValidatorRule => ({
  value: requiredValue,
});
export const minValidator = (min: number): MinValidatorRule => ({
  value: minValue,
  min,
});
export const maxValidator = (max: number): MaxValidatorRule => ({
  value: maxValue,
  max,
});
export const emailValidator = (): EmailValidatorRule => ({
  value: emailValue,
});
