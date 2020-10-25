import config from "./_config";
import classAdd from "./_classAdd";

export default function initPreloader() {
  const preloader = document.createElement("div");
  preloader.classList.add("ds-preloader");
  document.body.prepend(preloader);

  // classAdd(config.body, "ds-preloader-body", 0);

  // window.onload = function() {
  //   classAdd(config.preloaderContainer, "ds-preloader-loaded", 500);
  //   classAdd(config.preloaderContainer, "ds-preloader-dnone", 1000);
  // };
}
