import isEmpty from "validator/es/lib/isEmpty";

export const isRequired = [
  (value: string) => !isEmpty(value) || "This field is required",
];
