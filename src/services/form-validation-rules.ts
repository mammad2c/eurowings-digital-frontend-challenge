import isEmpty from "validator/es/lib/isEmpty";

export const isRequired = [
  (value: string) =>
    typeof value === "object" && value !== null
      ? true
      : !isEmpty(value) || "This field is required",
];
