"use client";
import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({
  width,
  url,
}: {
  width: string;
  url: string;
}) {
  const [showControls, setShowControls] = useState(false);
  // const [play, setPlay] = useState(false);
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5,
  //   };
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     if (entry.isIntersecting) {
  //       setPlay(true);
  //     } else {
  //       setPlay(false);
  //     }
  //   }, options);
  //   if (videoRef.current) {
  //     observer.observe(videoRef?.current);
  //   }
  //   return () => {
  //     if (videoRef.current) {
  //       observer.unobserve(videoRef?.current);
  //     }
  //   };
  // }, []);

  return (
    <div
      onMouseEnter={() => {
        setShowControls(true);
      }}
      onMouseLeave={() => {
        setShowControls(false);
      }}
      className={`w-[${width}] aspect-[16/9]`}
    >
      <ReactPlayer
        url={url}
        controls={showControls}
        loop
        width={"100%"}
        height={"100%"}
      />
    </div>
  );
}
