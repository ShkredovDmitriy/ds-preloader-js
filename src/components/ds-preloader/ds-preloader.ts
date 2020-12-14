import "./ds-preloader.scss";
import create from "./_lib/_create";
import open from "./_lib/_open";

class DsPreloader {

  init() {
    create();
    open();
  }
}

declare global { interface Window { dsModal: any; }}
window.dsModal = new DsPreloader();
export default window.dsModal;