import config from "./_config";
import { message } from "./_log";

export default async function setCounterColor() {
  document.querySelector(config.counterContainer).style.color =
    config.counterColor;
  message(`ds-preloader: counter color ${config.counterColor}`, config.logs);
}
