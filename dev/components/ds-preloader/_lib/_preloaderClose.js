import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";

export default function modalClose(dataValue) {
  classRemove("body", "ds-preloader-body", 1200);
  classAdd(config.preloaderContainer, "ds-preloader-close", 1200);
}
