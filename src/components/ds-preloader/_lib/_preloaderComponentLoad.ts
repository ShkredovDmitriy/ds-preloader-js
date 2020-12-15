import config from "./_config";
import singleSelector from "./_preloaderShortSelectors";
import preloaderComponentClose from "./_preloaderComponentClose";

let counterHtmlElement:HTMLElement;

async function selectCounterHtmlElement(){
  counterHtmlElement = singleSelector(config.load);
}

async function updateCounter() {
  config.counter += config.progressPerImage;
  console.log(config.counter);
  if(config.counter > 100) {
    config.counter = 100;
  }
  counterHtmlElement.innerHTML = `${config.counter}%`;
  if(config.counter >= 100) {
    await preloaderComponentClose();
  }
}

function listenLoadEvent(url:string) {
  var virtualImage = new Image();
  console.log("create new image");
  virtualImage.addEventListener("load", updateCounter);
  virtualImage.addEventListener("error", updateCounter);
  virtualImage.src = url;
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