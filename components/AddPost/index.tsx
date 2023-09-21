"use client";
import { useEffect } from "react";

export default function AddPostModal({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (open) {
    return (
      <div
        className="w-[100vw] h-[100vh] bg-[rgb(0,0,0,.2)] fixed top-0 left-0 z-[10] flex items-center justify-center"
        id="modal-overlay"
        onClick={(e: any) => {
          if (e.target.id == "modal-overlay") {
            close();
          }
        }}
      >
        <div className="flex flex-col w-[40%] bg-white rounded-md py-5 gap-2">
          <h3 className="text-center font-bold text-gray-800">Create a Post</h3>
          <hr className="w-full bg-gray-800 h-[1px]" />
          <div className="flex gap-2 px-5 items-center">
            <div className="w-[45px] aspect-square bg-brand rounded-full"></div>
            <div className="flex flex-col">
              <h3 className="text-xxs font-semibold text-gray-800">
                prajwol_neupane
              </h3>
              <select className="text-xxxs font-bold text-gray-600 focus:outline-none bg-gray-200 rounded-md p-1">
                <option>Friends</option>
                <option>Public</option>
              </select>
            </div>
          </div>
          <textarea
            rows={5}
            placeholder="Share your thoughts..."
            className="mx-4 mt-2 focus:outline-none text-xxs text-gray-800 placeholder:text-gray-800 resize-none"
          ></textarea>
          <button className="bg-brand mx-4 text-white text-xxs font-semibold py-2 rounded-md">
            Comment
          </button>
        </div>
      </div>
    );
  }
}
