"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema, signUpInterface } from "@/types/form.schema";
import submitForm from "./submitForm";

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<signUpInterface>({
    resolver: yupResolver(signUpSchema),
  });

  return (
    <div className="bg-gray-100 w-[100vw] h-[100vh] flex items-center justify-center">
      <form
        className="flex flex-col py-5 px-8 shadow gap-4 bg-white rounded-lg"
        onSubmit={handleSubmit((data) => {
          submitForm({ data: data });
        })}
      >
        <h2 className="font-semibold text-md text-gray-700">Sign Up</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center">
            <div className="input-container">
              <label className="label-text required">User Name</label>
              <input placeholder="joe_doe" {...register("username")} />
              {errors.username != null ? (
                <p className="input-error">{errors.username.message}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="input-container">
              <label className="label-text required">Email</label>
              <input
                placeholder="joedoe@gmail.com"
                type="email"
                {...register("email")}
              />
              {errors.email != null ? (
                <p className="input-error">{errors.email.message}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="input-container">
              <label className="label-text required">First Name</label>
              <input placeholder="Joe" {...register("firstname")} />
              {errors.firstname != null ? (
                <p className="input-error">{errors.firstname.message}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="input-container">
              <label className="label-text required">Last Name</label>
              <input placeholder="Doe" {...register("lastname")} />
              {errors.lastname != null ? (
                <p className="input-error">{errors.lastname.message}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="input-container">
              <label className="label-text required">Password</label>
              <input
                placeholder="*******"
                type="password"
                {...register("password")}
              />
              {errors.password != null ? (
                <p className="input-error">{errors.password.message}</p>
              ) : (
                <></>
              )}
            </div>
            <div className="input-container">
              <label className="label-text required">Confirm Password</label>
              <input
                placeholder="********"
                type="password"
                {...register("confirmpassword")}
              />
              {errors.confirmpassword != null ? (
                <p className="input-error">{errors.confirmpassword.message}</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="input-container">
              <label className="label-text">Phone</label>
              <input placeholder="1234567890" type="number" {...register("phone")}/>
            </div>
            <div className="flex gap-2 items-center">
              <div className="input-container-sm">
                <label className="label-text required">Date of Brith</label>
                <input
                  max={new Date().toISOString().split("T")[0]}
                  type="date"
                  {...register("dob")}
                />
                {errors.dob != null ? (
                  <p className="input-error">{errors.dob.message}</p>
                ) : (
                  <></>
                )}
              </div>
              <div className="input-container-sm">
                <label className="label-text required">Gender</label>
                <select {...register("gender")}>
                  <option value={""}>Select Gender</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                  <option value={"other"}>Other</option>
                </select>
                {errors.gender != null ? (
                  <p className="input-error">{errors.gender.message}</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-brand w-[50%] mx-auto p-2 rounded-md text-xxs text-white font-semibold"
        >
          Create
        </button>
        <h4 className="text-center text-xxxs text-gray-600 font-semibold leading-[100%]">
          Already have an account ?{" "}
          <Link href={"/signin"}>
            <span className="text-brand font-bold">Click here</span>
          </Link>
        </h4>
      </form>
    </div>
  );
}
