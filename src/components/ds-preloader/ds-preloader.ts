import "./ds-preloader.scss";
import preloaderComponentCreate from "./_lib/_preloaderComponentCreate";
import preloaderComponentOpen from "./_lib/_preloaderComponentOpen";
import preloaderComponentLoad from "./_lib/_preloaderComponentLoad";

class DsPreloader {

  async init() {
    await preloaderComponentCreate();
    await preloaderComponentOpen();
    await preloaderComponentLoad();
  }
}

declare global { interface Window { dsModal: any; }}
window.dsModal = new DsPreloader();
export default window.dsModal;