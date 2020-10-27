import config from "./_config";
import classRemove from "./_classRemove";
// import { message } from "./_log";

export default function modalClose(dataValue) {
  classRemove("body", "ds-preloader-body", 1300);
  classRemove(config.preloaderContainer, "ds-preloader-ani-2", 1300);
  classRemove(config.preloaderContainer, "ds-preloader-ani-1", 1950);
  // message(`ds-modal: ${dataValue} closed`, config.logs);
}
