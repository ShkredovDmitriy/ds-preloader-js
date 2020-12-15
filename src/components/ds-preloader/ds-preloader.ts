import "./ds-preloader.scss";
import preloaderComponentCreate from "./_lib/_preloaderComponentCreate";
import preloaderComponentOpen from "./_lib/_preloaderComponentOpen";
import preloaderComponentLoad from "./_lib/_preloaderComponentLoad";

async function dspreloader() {
  await preloaderComponentCreate();
  await preloaderComponentOpen();
  await preloaderComponentLoad();
}

document.addEventListener("DOMContentLoaded", dspreloader);