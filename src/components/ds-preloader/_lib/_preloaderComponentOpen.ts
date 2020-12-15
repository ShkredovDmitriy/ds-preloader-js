import config from "./_config";
import modalComponentAnimation from "./_preloadComponentAnimation";

export default async function preloaderComponentOpen() {
  await modalComponentAnimation(config.prl, config.prlOpen);
}
