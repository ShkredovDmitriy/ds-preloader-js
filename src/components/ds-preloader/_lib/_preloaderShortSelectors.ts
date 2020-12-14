import config from "./_config";

function singleSelector(selector:string):HTMLElement {
  return document.querySelector(selector);
}

export default singleSelector;