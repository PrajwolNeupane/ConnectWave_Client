"use client";

import Image from "next/image";
import EditOutline from "../../assets/icons/Edit_Outline.svg";
import AddPostModal from ".";
import { useState } from "react";

export default function AddPostButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="flex p-4 bg-white shadow mx-5 mt-5 rounded-md items-center gap-3">
        <div className="w-[45px] aspect-square rounded-full bg-brand"></div>
        <h3
          className=" bg-gray-100 rounded-lg py-2 px-4 w-full text-xxs font-semibold text-gray-600 cursor-pointer"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Share your thoughts....
        </h3>
      </div>
      <div
        className="w-[65px] aspect-square bg-white shadow rounded-full fixed right-10 bottom-5 z-[2] flex items-center justify-center cursor-pointer"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <Image
          src={EditOutline}
          alt="Edit Icon"
          width={10}
          height={10}
          className="w-[28px]"
        />
      </div>
      <AddPostModal
        open={openModal}
        close={() => {
          setOpenModal(false);
        }}
      />
    </>
  );
}
