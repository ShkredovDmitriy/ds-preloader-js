import config from "./_config";
import { message } from "./_log";

export default function configGet() {
  message("ds-preloader status:", true);
  message(`bgColorFrom: ${config.bgColorFrom}`, true);
  message(`counterColor: ${config.counterColor}`, true);
}
