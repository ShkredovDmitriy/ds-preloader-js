import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";

export default function initPreloader() {
  const preloader = document.createElement("div");
  preloader.classList.add("ds-preloader");
  document.body.prepend(preloader);
  classAdd(config.preloaderContainer, "ds-preloader-ani-1", 50);
  classAdd(config.preloaderContainer, "ds-preloader-ani-2", 350);

  window.onload = function() {
    classRemove(config.preloaderContainer, "ds-preloader-show", 1500);
    setTimeout(() => {
      preloader.remove();
    }, 2000);
  };
}
