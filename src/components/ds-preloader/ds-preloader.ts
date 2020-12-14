import "./ds-preloader.scss";
import create from "./_lib/_create";
import open from "./_lib/_open";
import load from "./_lib/_load";

class DsPreloader {

  init() {
    create();
    open();
    load();
  }
}

declare global { interface Window { dsModal: any; }}
window.dsModal = new DsPreloader();
export default window.dsModal;