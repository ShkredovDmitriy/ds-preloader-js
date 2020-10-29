import config from "./_config";
import preloaderClose from "./_preloaderClose";
import preloaderRemove from "./_preloaderRemove";

export default function preloaderCounter() {
  let counter = 0;
  const counterContainer = document.querySelector(config.counterContainer);
  const imgs = document.querySelectorAll("img");
  const imgCount = imgs.length;

  if (imgCount > 0) {
    const perImg = Math.floor(100 / imgCount) + 1;

    function updateCounter() {
      counter += perImg;
      if (counter > 0 && counter < 100) {
        counterContainer.innerHTML = `${counter}%`;
      } else {
        counterContainer.innerHTML = `100%`;
        preloaderClose();
        preloaderRemove();
      }
    }

    function testImage(url) {
      var tester = new Image();
      tester.addEventListener("load", updateCounter());
      tester.addEventListener("error", updateCounter());
      tester.src = url;
    }

    imgs.forEach(img => {
      testImage(img.src);
    });
  } else {
    window.onload = () => {
      setTimeout(() => {
        preloaderClose();
        counterContainer.innerHTML = `100%`;
        preloaderRemove();
      }, 1500);
    };
  }
}
