import config from "./_config";
import classAdd from "./_classAdd";

export default function modalOpen() {
  setTimeout(() => {
    document.querySelector(".ds-preloader").style.backgroundColor =
      config.colorFrom;
    classAdd(config.preloaderContainer, "ds-preloader-open", 50);
  }, 50);
}
