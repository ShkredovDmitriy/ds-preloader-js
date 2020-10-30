import config from "./_config";
import classAddRem from "./_classAddRem";

export default function open() {
  classAddRem(config.prl, config.prlOpen, 50, true);
}
