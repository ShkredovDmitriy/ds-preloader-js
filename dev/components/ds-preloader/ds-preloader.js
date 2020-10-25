/* eslint-disable class-methods-use-this */
import initPreloader from "./_lib/_initPreloader";

class DsPreloaderComponent {
  constructor() {
    this.makeWithLove = true;
  }

  init() {
    initPreloader();
  }
}

window.dsPreloader = new DsPreloaderComponent();
window.dsPreloader.init();
export default window.dsPreloader;
