import config from "./_config";
import classAddRem from "./_classAddRem";

export default function open() {
  classAddRem(config.preloader, "ds-preloader-open", 50, true);
}
