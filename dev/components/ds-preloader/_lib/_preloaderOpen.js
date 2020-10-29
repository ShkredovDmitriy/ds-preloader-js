import config from "./_config";
import classAdd from "./_classAdd";
import { message } from "./_log";

export default async function preloaderOpen() {
  await classAdd(config.preloaderContainer, "ds-preloader-open", 50);
  message("ds-preloader: open", config.logs);
}
