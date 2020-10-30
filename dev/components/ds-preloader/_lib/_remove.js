import config from "./_config";

export default function remove() {
  setTimeout(() => {
    if (document.querySelector(config.preloader)) {
      document.querySelector(config.preloader).remove();
    }
  }, 1500);
}
