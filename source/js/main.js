import { iosVhFix } from "./utils/ios-vh-fix";
import { ScrollLock } from "./utils/scroll-lock";
import { getText } from "./modules/print-text";
import { handleMenu } from "./modules/handle-menu";
import { handleInput } from "./modules/handle-input";
// ---------------------------------

window.addEventListener("DOMContentLoaded", () => {
  // Utils
  // ---------------------------------
  window.scrollLock = new ScrollLock();
  iosVhFix();
  getText();
  handleMenu();
  handleInput();
  // Modules
  // ---------------------------------

  window.addEventListener("load", () => {
    const tl = gsap.timeline({
      duration: 0.4,
      delay: 0.4,
      ease: "power2.out",
    });

    tl.fromTo(
      "#flag1",
      { xPercent: 100, opacity: 0 },
      { xPercent: 0, opacity: 1 }
    );
    tl.fromTo(
      "#flag2",
      { xPercent: 100, yPercent: 45, opacity: 0 },
      { xPercent: 10, yPercent: 0, opacity: 1 }
    );
    tl.fromTo(
      "#flag3",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1 }
    );
    tl.fromTo(
      "#flag4",
      { xPercent: -85, yPercent: 100, opacity: 0 },
      { xPercent: 0, yPercent: 0, opacity: 1 }
    );
    tl.fromTo(
      "#flag5",
      { xPercent: -100, opacity: 0 },
      { xPercent: 0, opacity: 1 }
    );
    tl.to(
      "#animate-circle",
      {
        rotation: 360,
        x: 0,
        y: 0,
        duration: 7,
        repeat: -1,
        ease: "none",
      },
      ">"
    );
  });
});
