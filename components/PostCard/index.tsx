"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import VerticalDot from "../../assets/icons/vertical_dot.svg";
import HeartFilled from "../../assets/icons/heart_filled.svg";
import HeartOuline from "../../assets/icons/heart_outline.svg";
import CommentOutline from "../../assets/icons/Comment_outline.svg";
import WorldOutline from "../../assets/icons/World_outline.svg";
import FriendsIcon from "../../assets/icons/friend_solid.svg";

const VideoPlayer = dynamic(() => import("./videoPlayer"), { ssr: false });

import { useEffect, useRef, useState } from "react";

export default function PostCard({
  images,
  videos,
}: {
  images: Array<string>;
  videos: Array<string>;
}) {
  const videoRef = useRef(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [isLike, setLike] = useState(false);

  return (
    <div className="flex flex-col bg-white rounded-lg max-w-[100%] min-w-[100%]  p-4 gap-3 shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-[40px] aspect-square rounded-full bg-brand"></div>
          <div>
            <h3 className="text-xxs font-semibold text-gray-800">
              prajwol_neupane
            </h3>
            <div className="flex items-center gap-1">
              <Image
                src={WorldOutline}
                width={10}
                height={10}
                alt="World Icon"
                className="w-[14px]"
              />
              <h3 className="text-sm font-bold text-gray-700">·</h3>
              <h3 className="text-xxxs font-semibold text-gray-500">Now</h3>
            </div>
          </div>
        </div>
        <Image
          src={VerticalDot}
          alt="vertical dot"
          height={10}
          width={10}
          className="w-[3px] m"
        />
      </div>
      <p className="text-xxs font-semibold leading-[150%] text-gray-600">
        This webiste is still now its development process. Beta version is
        comming soon. Stay tune!!!
      </p>
      {images?.length > 0 && (
        <div className="w-full aspect-[16/9] bg-brand"></div>
      )}
      {images.length == 2 && (
        <div className="w-full aspect-[16/9] bg-brand"></div>
      )}
      {images.length - 1 > 0 && images.length != 2 && (
        <div className="flex gap-3">
          <div className="w-[50%] aspect-[16/9] bg-brand opacity-80"></div>
          <div className="w-[50%] aspect-[16/9] bg-brand flex items-center justify-center">
            {images.length > 3 ? (
              <h3 className="text-white font-semibold text-2xl">
                +{images.length - 3}
              </h3>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
      {videos?.length > 0 && (
        <VideoPlayer
          url="https://firebasestorage.googleapis.com/v0/b/connect-wave-a0e30.appspot.com/o/post%2F65084daee43e61f8ee853b3d-169510146218670-postvideo.mp4?alt=media&token=3a247fa8-84e4-44fc-a8c3-ae69d1cd6847"
          width={"100%"}
        />
      )}
      {videos.length == 2 && (
        <VideoPlayer
          url="https://firebasestorage.googleapis.com/v0/b/connect-wave-a0e30.appspot.com/o/post%2F65084daee43e61f8ee853b3d-169510146218670-postvideo.mp4?alt=media&token=3a247fa8-84e4-44fc-a8c3-ae69d1cd6847"
          width={"100%"}
        />
      )}
      {videos.length - 1 > 0 && videos.length != 2 && (
        <div className="flex gap-3">
          <VideoPlayer
            url="http://dash.edgesuite.net/envivio/EnvivioDash3/manifest.mpd"
            width={"50%"}
          />
          {videos.length == 3 ? (
            <VideoPlayer
              url="https://firebasestorage.googleapis.com/v0/b/connect-wave-a0e30.appspot.com/o/post%2F65084daee43e61f8ee853b3d-169510146218670-postvideo.mp4?alt=media&token=3a247fa8-84e4-44fc-a8c3-ae69d1cd6847"
              width={"50%"}
            />
          ) : (
            <div className="relative w-[50%]">
              <VideoPlayer
                url="https://firebasestorage.googleapis.com/v0/b/connect-wave-a0e30.appspot.com/o/post%2F65084daee43e61f8ee853b3d-169510146218670-postvideo.mp4?alt=media&token=3a247fa8-84e4-44fc-a8c3-ae69d1cd6847"
                width={"100%"}
              />
              <div className="absolute top-0 left w-full bg-[rgb(0,0,0,0.7)] text-gray-50 flex justify-center items-center min-h-full">
                <h2 className="font-semibold text-2xl">+{videos.length - 3}</h2>
              </div>
            </div>
          )}
          {/* <div className="w-[50%] aspect-[16/9] bg-brand flex items-center justify-center">
            {images.length > 3 ? (
              <h3 className="text-white font-semibold text-2xl">
                +{images.length - 3}
              </h3>
            ) : (
              <></>
            )}
          </div> */}
        </div>
      )}
      {/* Action Icons */}
      <div className="flex items-center gap-2">
        <Image
          src={isLike ? HeartFilled : HeartOuline}
          width={10}
          height={10}
          alt="heart filled"
          className="w-[22px] cursor-pointer"
          onClick={() => {
            setLike(!isLike);
          }}
        />
        <Image
          src={CommentOutline}
          width={10}
          height={10}
          alt="comment filled"
          className="w-[20px]"
        />
      </div>
      {/* Comment Section */}
      <div className="flex gap-3 items-start">
        <div className="min-w-[40px] aspect-square bg-gray-500 rounded-full"></div>
        <div className="flex flex-col">
          <h3 className="text-xxxs font-bold text-gray-800">Saksham BC</h3>
          <p className="text-xxxs font-semibold text-gray-800">
            Really excited ❤😍
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <div className="min-w-[40px] aspect-square bg-gray-500 rounded-full"></div>
        <div className="flex flex-col">
          <h3 className="text-xxxs font-bold text-gray-800">Saran Adhikari</h3>
          <p className="text-xxxs font-semibold text-gray-800">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available...
          </p>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <div className="min-w-[40px] aspect-square bg-brand rounded-full"></div>
        <div className="w-full flex flex-col gap-1">
          <textarea
            placeholder="Write your comment"
            className="focus:outline-none resize-none w-full p-2 text-xxxs font-semibold text-gray-800 scroll bg-gray-100 rounded-lg"
            rows={3}
          ></textarea>
          <button className="bg-gray-100 hover:bg-gray-200 duration-500 text-xxxs font-semibold py-1 rounded-md text-gray-800">
            Comment
          </button>
        </div>
      </div>
    </div>
  );
}
