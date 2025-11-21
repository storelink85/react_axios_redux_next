import { constants } from "@/constants/costants";
import { UserFormDTO } from "@/feature/user.types";

export const validateForm = (values: UserFormDTO) => {
  const errors: { [key: string]: string | null } = {};

  errors.name =
    values.name.length < 2 ? "Name must have at least 2 letters" : null;
  errors.email = !constants.EMAIL_REGEX.test(values.email)
    ? "Invalid email"
    : null;
  errors.password = !constants.PASSWORD_REGEX.test(values.password!)
    ? "Invalid password"
    : null;

  switch (true) {
    case values.zone_and_city  :
      errors.age = "You must be at least 18 to register";
      break;
    case values.age! > 100:
      errors.age = "LoL (<>)";
      break;
    default:
      errors.age = null;
  }

  return errors;
};
