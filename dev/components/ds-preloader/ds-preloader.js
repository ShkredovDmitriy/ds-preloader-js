/* eslint-disable class-methods-use-this */
import initPreloader from "./_lib/_initPreloader";
import configSet from "./_lib/_configSet";
import configGet from "./_lib/_configGet";

class DsPreloaderComponent {
  constructor() {
    this.makeWithLove = true;
  }

  config(data) {
    configSet(data);
  }

  init() {
    initPreloader();
  }

  status() {
    configGet();
  }
}

window.dsPreloader = new DsPreloaderComponent();
window.dsPreloader.init();
export default window.dsPreloader;
