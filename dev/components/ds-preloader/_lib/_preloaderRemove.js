import config from "./_config";
import { message } from "./_log";

export default function preloaderRemove() {
  return new Promise(resolve => {
    setTimeout(() => {
      if (document.querySelector(config.preloaderContainer)) {
        document.querySelector(config.preloaderContainer).remove();
        message("ds-preloader: remove", config.logs);
        resolve();
      }
    }, 1500);
  });
}
