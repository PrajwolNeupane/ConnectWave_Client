"use client";

import { useAppSelector } from "@/features/hooks";
import { editProfileInterface, editProfileSchema } from "@/types/form.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import editProfileAction from "./editProfileAction";
import { toast } from "react-toastify";

export default function ProfileEditModal() {
  const { user } = useAppSelector((state) => state.auth);
  const { handleSubmit, register, setValue } = useForm<editProfileInterface>({
    resolver: yupResolver(editProfileSchema),
  });

  useEffect(() => {
    setValue("username", user?.username!);
    setValue("firstname", user?.firstname!);
    setValue("lastname", user?.lastname!);
    setValue("gender", user?.gender!);
    setValue("dob", Date.now().toString());
    setValue("phone", user?.phone);
    setValue("description", user?.description);
  }, [user]);

  return (
    <form
      className="w-2/3 p-5 bg-white rounded-md shadow"
      onSubmit={handleSubmit((data) => {
        editProfileAction({ data, toast: toast });
      })}
    >
      <Image
        src={user?.coverphotourl!}
        width={1000}
        height={1000}
        className="w-full h-[300px] object-cover rounded-md"
        alt={`${user?.username} Cover Photo`}
      />
      <div className="flex gap-5 mx-5 mt-[-50px] items-start">
        <Image
          src={user?.photourl!}
          alt={`${user?.username} Profile Photo`}
          width={100}
          height={100}
          className="w-[180px] aspect-square rounded-full border-[8px] border-white"
        />
        <div className="flex flex-col  mb-2 mt-[60px] gap-3">
          <div>
            <h3 className="text-xxxs font-semibold text-gray-800">
              Username :
            </h3>
            <div className="font-semibold text-xs text-gray-800 border border-gray-400 rounded-md px-2 py-1">
              @
              <input
                placeholder={"Username"}
                {...register("username")}
                className="focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <h3 className="text-xxxs font-semibold text-gray-800">
                Firstname :
              </h3>
              <div className="font-semibold text-xs text-gray-800 border border-gray-400 rounded-md px-2 py-1">
                <input
                  placeholder={"Firstname"}
                  {...register("firstname")}
                  className="focus:outline-none"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xxxs font-semibold text-gray-800">
                Lastname :
              </h3>
              <div className="font-semibold text-xs text-gray-800 border border-gray-400 rounded-md px-2 py-1">
                <input
                  placeholder={"Lastname"}
                  {...register("lastname")}
                  className="focus:outline-none"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xxxs font-semibold text-gray-800">Phone :</h3>
            <div className="font-semibold text-xs text-gray-800 border border-gray-400 rounded-md px-2 py-1">
              <input
                placeholder={"Phone"}
                {...register("phone")}
                className="focus:outline-none"
                type="number"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/2">
              <h3 className="text-xxxs font-semibold text-gray-800">
                Gender :
              </h3>
              <select
                {...register("gender")}
                className="p-2 border rounded-lg border-gray-400 w-full font-semibold"
              >
                <option value={""}>Select Gender</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
                <option value={"other"}>Other</option>
              </select>
            </div>
            <div className="w-1/2">
              <h3 className="text-xxxs font-semibold text-gray-800">
                Date of Brith :
              </h3>
              <div className="font-semibold text-xs text-gray-800 border border-gray-400 rounded-md px-2 py-1">
                <input
                  type="date"
                  placeholder={"Lastname"}
                  className="focus:outline-none"
                  {...register("dob")}
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xxxs font-semibold text-gray-800">Bio :</h3>
            <textarea
              placeholder="Your Description..."
              className="resize-none focus:outline-none border border-gray-400 rounded-md p-2 text-xxs font-semibold text-gray-800 w-full"
              rows={5}
              {...register("description")}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-brand rounded-[4px] w-1/2 py-1 text-xxs font-semibold text-white mx-auto"
          >
            Change
          </button>
        </div>
      </div>
    </form>
  );
}
