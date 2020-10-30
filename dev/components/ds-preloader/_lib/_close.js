import config from "./_config";
import classAddRem from "./_classAddRem";

export default function preloaderClose() {
  classAddRem("body", config.bodyNoScroll, 0, true);
  classAddRem("body", "ds-preloader-body", 0, false);
  classAddRem(config.preloader, "ds-preloader-close", 50, true);
  classAddRem("body", config.bodyNoScroll, 1000, false);
}
