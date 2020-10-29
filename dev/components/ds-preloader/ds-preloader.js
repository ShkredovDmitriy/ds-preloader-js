/* eslint-disable class-methods-use-this */
import "./ds-preloader.scss";
import configSet from "./_lib/_configSet";
import configGet from "./_lib/_configGet";
import preloaderCreate from "./_lib/_preloaderCreate";
import preloaderOpen from "./_lib/_preloaderOpen";
import preloaderCounter from "./_lib/_preloaderCounter";

class DsPreloaderComponent {
  constructor() {
    this.makeWithLove = true;
  }

  config(data) {
    configSet(data);
  }

  init() {
    preloaderCreate();
    preloaderOpen();
    preloaderCounter();
  }

  status() {
    configGet();
  }
}

window.dsPreloader = new DsPreloaderComponent();
window.dsPreloader.init();
export default window.dsPreloader;
