"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="flex flex-col py-5 px-8 shadow gap-4 bg-white rounded-lg">
        <h2 className="font-semibold text-md text-gray-700">Sign Up</h2>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center">
            <div className="input-container">
              <label className="label-text required">User Name</label>
              <input placeholder="joe_doe" />
            </div>
            <div className="input-container">
              <label className="label-text required">Email</label>
              <input placeholder="joedoe@gmail.com" type="email" />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="input-container">
              <label className="label-text required">First Name</label>
              <input placeholder="Joe" />
            </div>
            <div className="input-container">
              <label className="label-text required">Last Name</label>
              <input placeholder="Doe" />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="input-container">
              <label className="label-text required">Password</label>
              <input placeholder="*******" type="password" />
            </div>
            <div className="input-container">
              <label className="label-text required">Confirm Password</label>
              <input placeholder="********" type="password" />
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div className="input-container">
              <label className="label-text required">Phone</label>
              <input placeholder="1234567890" type="number" />
            </div>
            <div className="flex gap-2 items-center">
              <div className="input-container-sm">
                <label className="label-text required">Date of Brith</label>
                <input
                  max={new Date().toISOString().split("T")[0]}
                  type="date"
                />
              </div>
              <div className="input-container-sm">
                <label className="label-text required">Gender</label>
                <select>
                  <option value={""}>Select Gender</option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                  <option value={"other"}>Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-brand w-[50%] mx-auto p-2 rounded-md text-xxs text-white font-semibold">
          Create
        </button>
        <h4 className="text-center text-xxxs text-gray-600 font-semibold leading-[100%]">
          Already have an account ?{" "}
          <Link href={"/signin"}>
            <span className="text-brand font-bold">Click here</span>
          </Link>
        </h4>
      </div>
    </div>
  );
}
