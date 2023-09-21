"use client";
import Link from "next/link";
import GoggleLogo from "@/assets/logos/google-logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 w-[100vw] h-[100vh] flex flex-col gap-8 items-center justify-center">
      <div className="flex flex-col py-5 px-8 shadow gap-4 bg-white rounded-lg">
        <h2 className="font-semibold text-md text-gray-700">Sign In</h2>
        <div className="flex flex-col gap-5 items-center">
          <div className="input-container">
            <label className="label-text required">Email</label>
            <input placeholder="joedoe@gmail.com" type="email" />
          </div>
          <div className="input-container">
            <label className="label-text required">Password</label>
            <input placeholder="*******" type="password" />
          </div>
        </div>
        <button className="bg-brand w-[50%] mx-auto p-2 rounded-md text-xxs text-white font-semibold">
          Log In
        </button>
        <h4 className="text-center text-xxxs text-gray-600 font-semibold leading-[100%]">
          Doesn't have an account ?{" "}
          <Link href={"/signup"}>
            <span className="text-brand font-bold">Click here</span>
          </Link>
        </h4>
      </div>
      <div className="flex items-center bg-white shadow px-5 py-2 rounded-md gap-5 w-[360px]">
        <Image
          src={GoggleLogo}
          alt="Google Logo"
          width={30}
          height={30}
          className="w-[25px] object-cover"
        />
        <h2 className="text-xxs font-semibold text-gray-800">
          Sign in with Google
        </h2>
      </div>
    </div>
  );
}
