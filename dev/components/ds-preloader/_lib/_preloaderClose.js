import config from "./_config";
import classAdd from "./_classAdd";
import classRemove from "./_classRemove";
import { message } from "./_log";

export default async function preloaderClose() {
  await classAdd("body", "ds-preloader-no-scroll", 0);
  await classRemove("body", "ds-preloader-body", 0);
  await classAdd(config.preloaderContainer, "ds-preloader-close", 50);
  await classRemove("body", "ds-preloader-no-scroll", 1000);
  message("ds-preloader: close", config.logs);
}
