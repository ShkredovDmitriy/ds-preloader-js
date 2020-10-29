import config from "./_config";
import { message } from "./_log";

export default function preloaderCounter(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      let counter = 0;
      const counterContainer = document.querySelector(config.counterContainer);
      const imgs = document.querySelectorAll("img");

      if (imgs.length > 0) {
        const perImg = Math.floor(100 / imgs.length) + 1;

        function updateCounter() {
          counter += perImg;
          if (counter > 0 && counter < 100) {
            counterContainer.innerHTML = `${counter}%`;
          } else {
            counterContainer.innerHTML = `100%`;
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
          counterContainer.innerHTML = `100%`;
        };
      }
      message("ds-preloader: counter work", config.logs);
      resolve();
    }, time);
  });
}
