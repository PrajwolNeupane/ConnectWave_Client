import * as y from "yup";
import YupPassword from "yup-password";
YupPassword(y);

//Sign Up
export const signUpSchema = y.object({
  username: y.string().required("Please enter username"),
  firstname: y.string().required("Please enter firstname"),
  lastname: y.string().required("Please enter lastname"),
  email: y
    .string()
    .required("Please enter email")
    .email("Please enter valid email"),
  password: y
    .string()
    .required()
    .min(6, "Password length must be greater than 6")
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number"),
  confirmpassword: y
    .string()
    .required()
    .oneOf([y.ref("password")], "Password must match")
    .required("Please enter confirm password"),
  dob: y.string().required("Please enter date of brith"),
  gender: y.string().required("Please enter gender"),
  phone: y.string(),
});

export type signUpInterface = y.InferType<typeof signUpSchema>;

//Login
export const logInSchema = y.object({
  email: y
    .string()
    .required("Please enter email")
    .email("Please enter valid email"),
  password: y.string().required("Please enter password"),
});

export type logInInterface = y.InferType<typeof logInSchema>;

//Edit Profile
export const editProfileSchema = y.object({
  username: y.string().required("Please enter username"),
  firstname: y.string().required("Please enter firstname"),
  lastname: y.string().required("Please enter lastname"),
  oldpassword: y.string().required(),
  newpassword: y
    .string()
    .min(6, "Password length must be greater than 6")
    .minLowercase(1, "Password must contain at least 1 lower case letter")
    .minUppercase(1, "Password must contain at least 1 upper case letter")
    .minNumbers(1, "Password must contain at least 1 number"),
  confirmpassword: y
    .string()
    .oneOf([y.ref("newpassword")], "Password must match"),
  dob: y.string().required("Please enter date of brith"),
  gender: y.string().required("Please enter gender"),
  phone: y.string(),
  bio: y.string(),
});

export type editProfileInterface = y.InferType<typeof editProfileSchema>;
