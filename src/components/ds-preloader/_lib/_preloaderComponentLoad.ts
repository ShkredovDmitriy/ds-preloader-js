import config from "./_config";
import singleSelector from "./_preloaderShortSelectors";
import close from "./_close";

async function selectCounterHtmlElement(){
  config.counterHtmlElement = singleSelector(config.load);
}

function updateCounter() {
  config.counter += config.progressPerImage;
  console.log(config.counter);
  if(config.counter > 100) {
    config.counter = 100;
    close();
  }
  config.counterHtmlElement.innerHTML = `${config.counter}%`;
}

function listenLoadEvent(url:string) {
  var tester = new Image();
  console.log("create new image");
  tester.addEventListener("load", updateCounter);
  tester.addEventListener("error", updateCounter);
  tester.src = url;
}

async function listenLoadAllImages(){
  const imagesOnPage = document.querySelectorAll("img");
  if (imagesOnPage.length > 0) {
    config.progressPerImage = Math.floor(100 / imagesOnPage.length) + 1;
    imagesOnPage.forEach(img => listenLoadEvent(img.src));
  } 
}

export default async function preloaderComponentLoad() {
  await selectCounterHtmlElement();
  await listenLoadAllImages();
}