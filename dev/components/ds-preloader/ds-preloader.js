/* eslint-disable class-methods-use-this */
import "./ds-preloader.scss";
import create from "./_lib/_create";
import open from "./_lib/_open";
import counter from "./_lib/_counter";

class DsPreloaderComponent {
  constructor() {
    this.makeWithLove = true;
  }

  init() {
    create();
    open();
    counter(1500);
  }
}

window.dsPreloader = new DsPreloaderComponent();
window.dsPreloader.init();
export default window.dsPreloader;
