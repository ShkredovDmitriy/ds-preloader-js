import config from "./_config";
import preloaderOpen from "./_preloaderOpen";
import preloaderClose from "./_preloaderClose";

export default function initPreloader() {
  const preloader = document.createElement("div");
  preloader.classList.add("ds-preloader");
  document.body.prepend(preloader);
  preloaderOpen();

  window.onload = function() {
    preloaderClose();
    setTimeout(() => {
      preloader.remove();
    }, 3000);
  };
}
