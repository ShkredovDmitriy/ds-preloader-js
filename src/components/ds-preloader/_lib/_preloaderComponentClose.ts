import config from "./_config";
import singleSelector from "./_preloaderShortSelectors";
import modalComponentAnimation from "./_preloadComponentAnimation";

async function removeClassToPreloader() {
  singleSelector(config.prl).classList.remove(config.prlOpen);
}

async function removeClassFromBody() {
  singleSelector('body').classList.remove(config.bodyNoShow);
}

export default async function preloaderComponentClose() {
  await removeClassToPreloader();
  await removeClassFromBody();
  await modalComponentAnimation(config.prl, config.prlClose);
  singleSelector(config.prl).remove();
}
