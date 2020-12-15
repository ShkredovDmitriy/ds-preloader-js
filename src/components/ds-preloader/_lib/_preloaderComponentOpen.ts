import config from "./_config";
import singleSelector from "./_preloaderShortSelectors";
import modalComponentAnimation from "./_preloadComponentAnimation";

async function addClassToPreloader() {
  singleSelector(config.prl).classList.add(config.prlOpen);
}

export default async function preloaderComponentOpen() {
  await modalComponentAnimation(config.prl, config.prlOpen);
  await addClassToPreloader();
}
