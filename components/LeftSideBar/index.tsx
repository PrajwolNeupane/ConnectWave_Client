"use client";

import { useAppSelector } from "@/features/hooks";
import Image from "next/image";

export default function LeftSideBar() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="max-lg:hidden w-[22%] px-[1.5%] py-[1%] bg-white min-h-[70vh] max-h-[80vh] rounded-lg fixed left-[5%] flex flex-col shadow">
      <Image
        src={user?.coverphotourl!}
        width={1000}
        height={1000}
        alt={`Profile Photo of ${user?.username}`}
        className="w-full min-h-[130px] rounded-md"
      />
      <div></div>
      <div className="mt-[-10%] ml-[5%] flex justify-start items-end gap-1">
        <Image
          src={user?.photourl!}
          width={100}
          height={100}
          className="w-[80px] aspect-square rounded-full bg-brand  border-[5px] border-white"
          alt={`Profile Photo of ${user?.username}`}
        />
        <div className="flex flex-col w-[calc(100%-80px)] items-start mb-3">
          <h2 className="text-xxs font-bold text-gray-800">
            @{user?.username}
          </h2>
          <h4 className="text-xxxs font-semibold text-gray-600">
            {user?.firstname + " " + user?.lastname}
          </h4>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex flex-col items-center max-w-[33%]">
          <h2 className="text-sm font-bold text-gray-800">
            {user?.followers.length}
          </h2>
          <h4 className="text-xxxs font-semibold text-gray-400">Followers</h4>
        </div>
        <div className="flex flex-col items-center max-w-[33%]">
          <h2 className="text-sm font-bold text-gray-800">
            {user?.following.length}
          </h2>
          <h4 className="text-xxxs font-semibold text-gray-400">Following</h4>
        </div>
        <div className="flex flex-col items-center max-w-[33%]">
          <h2 className="text-sm font-bold text-gray-800">1.2M</h2>
          <h4 className="text-xxxs font-semibold text-gray-400">Likes</h4>
        </div>
      </div>
      <hr className="w-[100%] h-[1px] bg-gray-300 my-4" />
      <h4 className="text-xxs font-bold text-gray-800">Bio</h4>
      <p className="text-xxxs font-semibold text-gray-600 ">
        I am Prajwol Neupane. A skilled developer with a passion for web and app
        creation. Experienced in React.js, Node.js, and more. My dedication to
        problem-solving and learning is evident through their commitment to
        coding challenges and staying updated with tech trends. With a strong
        background in web development and a keen eye for design, valuable asset
        in any development endeavor.
      </p>
    </div>
  );
}
