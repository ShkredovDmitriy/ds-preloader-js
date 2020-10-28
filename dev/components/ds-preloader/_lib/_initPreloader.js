import preloaderOpen from "./_preloaderOpen";
import preloaderClose from "./_preloaderClose";

export default function initPreloader() {
  const preloader = document.createElement("div");
  preloader.classList.add("ds-preloader");
  preloader.innerHTML = '<div class="ds-preloader-counter">0%</div>';
  document.body.prepend(preloader);

  preloaderOpen();

  let counter = 0;
  const counterContainer = document.querySelector(".ds-preloader-counter");
  const imgs = document.querySelectorAll("img");
  const imgCount = imgs.length;

  const perImg = Math.floor(100 / imgCount) + 1;

  function updateCounter() {
    counter += perImg;
    if (counter > 0 && counter < 100) {
      counterContainer.innerHTML = `${counter}%`;
    } else {
      counterContainer.innerHTML = `100%`;
      preloaderClose();
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    }
  }

  function ifImageLoad() {
    setTimeout(function() {
      updateCounter();
    }, 1500);
  }

  function ifImageError() {
    setTimeout(function() {
      updateCounter();
    }, 1500);
  }

  function testImage(url) {
    var tester = new Image();
    tester.addEventListener("load", ifImageLoad);
    tester.addEventListener("error", ifImageError);
    tester.src = url;
  }

  imgs.forEach(img => {
    testImage(img.src);
  });

  // window.onload = () => {
  //   setTimeout(() => {
  //     preloaderClose();
  //     setTimeout(() => {
  //       preloader.remove();
  //     }, 2000);
  //   }, 2000);
  // };
}
