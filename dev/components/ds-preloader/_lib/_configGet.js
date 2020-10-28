import config from "./_config";
import { message } from "./_log";

const configGet = () => {
  message("ds-preloader status:", true);
  message(`colorFrom: ${config.colorFrom}`, true);
};

export default configGet;
