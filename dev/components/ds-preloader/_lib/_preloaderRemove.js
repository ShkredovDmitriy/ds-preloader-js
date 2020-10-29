import config from "./_config";

export default function preloaderRemove() {
  setTimeout(() => {
    if (document.querySelector(config.preloaderContainer)) {
      document.querySelector(config.preloaderContainer).remove();
    }
  }, 2500);
}
