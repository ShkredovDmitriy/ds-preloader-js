import config from "./_config";
import singleSelector from "./_preloaderShortSelectors";
import modalComponentAnimation from "./_preloadComponentAnimation";

async function removeClassToPreloader() {
  singleSelector(config.prl).classList.add(config.prlClose);
  singleSelector('body').classList.remove(config.bodyNoShow);
}

export default async function preloaderClose() {
  await modalComponentAnimation(config.prl, config.prlClose);
  await removeClassToPreloader();
}
