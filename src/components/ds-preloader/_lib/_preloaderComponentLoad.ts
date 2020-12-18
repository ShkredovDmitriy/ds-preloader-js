import config from "./_config";
import singleSelector from "./_preloaderShortSelectors";
import preloaderComponentClose from "./_preloaderComponentClose";

let counterHtmlElement:HTMLElement;
let counter:number = 0;
let progressPerImage:number = 0;

async function selectCounterHtmlElement(){
  counterHtmlElement = singleSelector(config.load);
}

async function updateCounter() {
  counter += progressPerImage;
  if(counter > 100) {
    counter = 100;
  }
  counterHtmlElement.innerHTML = `${counter}%`;
  if(counter >= 100) {
    await preloaderComponentClose();
  }
}

function listenLoadEvent(url:string) {
  var virtualImage = new Image();
  virtualImage.addEventListener("load", updateCounter);
  virtualImage.addEventListener("error", updateCounter);
  virtualImage.src = url;
}

async function listenLoadAllImages(){
  const imagesOnPage = document.querySelectorAll("img");
  if (imagesOnPage.length > 0) {
    progressPerImage = Math.floor(100 / imagesOnPage.length) + 1;
    imagesOnPage.forEach(img => listenLoadEvent(img.src));
  } else {
    counter = 101;
    updateCounter();
  }
}

export default async function preloaderComponentLoad() {
  await selectCounterHtmlElement();
  await listenLoadAllImages();
}