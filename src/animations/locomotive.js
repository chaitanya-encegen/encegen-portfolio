// src/animations/locomotive.js
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

let locoScroll = null;

export function initLocomotive() {
  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (!scrollContainer) {
    console.warn("⚠️ LocomotiveScroll: [data-scroll-container] not found");
    return null;
  }

  locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    multiplier: 1.2,
    lerp: 0.08,
    smartphone: { smooth: true },
    tablet: { smooth: true },
  });

  // Update scroll when window resizes or content changes
  window.addEventListener("resize", () => locoScroll.update());

 

  // store global reference for footer/back-to-top
  window.locoScroll = locoScroll;

  return locoScroll;
}

export function getLocoScroll() {
  return locoScroll;
}
