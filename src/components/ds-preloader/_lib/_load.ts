import config from "./_config";
import close from "./_close";
import remove from "./_remove";

export default function load() {
  // setTimeout(() => {
  //   let counter = 0;
  //   const item = document.querySelector(config.load);
  //   const imgs = document.querySelectorAll("img");

  //   function hide() {
  //     item.innerHTML = `100%`;
  //     close();
  //     remove();
  //   }

  //   if (imgs.length > 0) {
  //     const perImg = Math.floor(100 / imgs.length) + 1;

  //     function updateCounter() {
  //       counter += perImg;
  //       counter < 100 ? (item.innerHTML = `${counter}%`) : hide();
  //     }

  //     function testImage(url) {
  //       var tester = new Image();
  //       tester.addEventListener("load", updateCounter);
  //       tester.addEventListener("error", updateCounter);
  //       tester.src = url;
  //     }

  //     imgs.forEach(img => {
  //       testImage(img.src);
  //     });
  //   } else {
  //     window.onload = () => {
  //       hide();
  //     };
  //   }
  // }, time);
}
