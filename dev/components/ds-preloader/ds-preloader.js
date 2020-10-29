/* eslint-disable class-methods-use-this */
import "./ds-preloader.scss";
import configSet from "./_lib/_configSet";
import configGet from "./_lib/_configGet";
import preloaderInit from "./_lib/_preloaderInit";

class DsPreloaderComponent {
  constructor() {
    this.makeWithLove = true;
  }

  config(data) {
    configSet(data);
  }

  init() {
    preloaderInit();
  }

  status() {
    configGet();
  }
}

window.dsPreloader = new DsPreloaderComponent();
window.dsPreloader.init();
export default window.dsPreloader;
