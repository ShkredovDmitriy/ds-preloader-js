/* eslint-disable class-methods-use-this */
import "./ds-preloader.scss";
import create from "./_lib/_create";
import open from "./_lib/_open";
import load from "./_lib/_load";

class DsPreloaderComponent {
  constructor() {
    this.makeWithLove = true;
  }

  init() {
    create();
    open();
    load(1500);
  }
}

window.dsPreloader = new DsPreloaderComponent();
window.dsPreloader.init();
export default window.dsPreloader;
