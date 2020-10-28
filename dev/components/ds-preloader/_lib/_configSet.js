import config from "./_config";
import { message } from "./_log";

export default function configSet(data) {
  if (data) {
    if (data.colorFrom) {
      config.colorFrom = data.colorFrom;
      message(`ds-preloader: bg-color = ${data.colorFrom}`, true);
    }
  }
}
