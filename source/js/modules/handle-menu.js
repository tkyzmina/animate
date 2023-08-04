export function handleMenu() {
  const burger = document.querySelector(".header__burger");
  const header = document.querySelector(".header");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    header.classList.toggle("header--open");

    if (body.classList.contains("scroll-lock")) {
      window.scrollLock.enableScrolling();
    } else {
      window.scrollLock.disableScrolling();
    }
  });
}
