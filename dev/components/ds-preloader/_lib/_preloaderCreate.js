import config from "./_config";
import { message } from "./_log";

export default function preloaderCreate() {
  return new Promise(resolve => {
    const preloader = document.createElement("div");
    preloader.classList.add("ds-preloader");
    preloader.innerHTML = '<div class="ds-preloader-counter">0%</div>';
    document.body.prepend(preloader);
    message("ds-preloader: create", config.logs);
    resolve();
  });
}
