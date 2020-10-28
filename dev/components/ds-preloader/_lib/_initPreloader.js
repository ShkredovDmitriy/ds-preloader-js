import preloaderOpen from "./_preloaderOpen";
import preloaderClose from "./_preloaderClose";

export default function initPreloader() {
  const preloader = document.createElement("div");
  preloader.classList.add("ds-preloader");
  preloader.innerHTML = '<div class="ds-preloader-counter">0%</div>';
  document.body.prepend(preloader);

  preloaderOpen();

  window.onload = function() {
    preloaderClose();
    setTimeout(() => {
      preloader.remove();
    }, 2000);
  };
}
