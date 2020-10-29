import config from "./_config";
import { message } from "./_log";

export default async function setPreloaderColor() {
  document.querySelector(config.preloaderContainer).style.backgroundColor =
    config.bgColorFrom;
  message(`ds-preloader: container color ${config.bgColorFrom}`, config.logs);
}
