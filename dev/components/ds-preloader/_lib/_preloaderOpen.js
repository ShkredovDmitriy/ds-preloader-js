import config from "./_config";
import classAdd from "./_classAdd";
// import { message } from "./_log";

export default function modalOpen() {
  // document.querySelector(modal).style.zIndex = config.zIndex;
  classAdd(config.preloaderContainer, "ds-preloader-ani-1", 50);
  classAdd(config.preloaderContainer, "ds-preloader-ani-2", 800);
  // message(`ds-modal: ${dataValue} opened`, config.logs);
}
