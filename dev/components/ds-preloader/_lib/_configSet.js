import config from "./_config";
import { message } from "./_log";

export default function configSet(data) {
  if (data) {
    if (data.bgColorFrom) {
      config.bgColorFrom = data.bgColorFrom;
      message(`ds-preloader: bg-color = ${data.bgColorFrom}`, true);
    }
    if (data.counterColor) {
      config.counterColor = data.counterColor;
      message(`ds-preloader: counter-color = ${data.counterColor}`, true);
    }
  }
}
