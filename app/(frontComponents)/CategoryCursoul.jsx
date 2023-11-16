"use client";
import { useEffect, useRef } from "react";

export default function CategoryCoursel() {
  const carousel = useRef(null);
  let isDown = useRef(false);
  let scrollLeft = useRef(null);
  let startX = useRef(null);

  useEffect(() => {
    const sliderRef = carousel.current;

    const handleMouseDown = (e) => {
      isDown.current = true;
      startX.current =
        e.pageX - sliderRef.offsetLeft ||
        e.touches[0].pageX - sliderRef.offsetLeft;
      scrollLeft.current = sliderRef.scrollLeft;
    };
    const handleTouch = (e) => {
      console.log(e);
    };
    const handleMouseMove = (e) => {
      if (!isDown.current) return;
      const x =
        e.pageX - sliderRef.offsetLeft ||
        e.touches[0].pageX - sliderRef.offsetLeft;
      const walk = x - startX.current;
      sliderRef.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUp = () => {
      isDown.current = false;
    };

    sliderRef.addEventListener("mousedown", handleMouseDown);
    sliderRef.addEventListener("mousemove", handleMouseMove);
    sliderRef.addEventListener("mouseup", handleMouseUp);
    sliderRef.addEventListener("touchstart", handleMouseDown);
    sliderRef.addEventListener("touchend", handleMouseUp);
    sliderRef.addEventListener("touchcancel", handleMouseUp);
    sliderRef.addEventListener("touchmove", handleMouseMove);

    return () => {
      sliderRef.removeEventListener("mousedown", handleMouseDown);
      sliderRef.removeEventListener("mousemove", handleMouseMove);
      sliderRef.removeEventListener("mouseup", handleMouseUp);
      sliderRef.removeEventListener("touchstart", handleMouseDown);
      sliderRef.removeEventListener("touchend", handleMouseUp);
      sliderRef.removeEventListener("touchcancel", handleMouseUp);
      sliderRef.removeEventListener("touchmove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <h3>carousel</h3>
      <div
        className="w-3/4 m-auto border-red-500 border-4 h-80 flex flex-nowrap overflow-hidden"
        ref={carousel}
      >
        <div className="w-full border-green-100 h-80 border-4 min-w-full flex justify-center items-center">
          1
        </div>
        <div className="w-full border-green-100 h-80 border-4 min-w-full flex justify-center items-center">
          2
        </div>
        <div className="w-full border-green-100 h-80 border-4 min-w-full flex justify-center items-center">
          3
        </div>
        <div className="w-full border-green-100 h-80 border-4 min-w-full flex justify-center items-center">
          4
        </div>
      </div>
    </>
  );
}
