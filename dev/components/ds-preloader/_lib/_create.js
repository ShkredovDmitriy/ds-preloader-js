import config from "./_config";

export default function create() {
  const preloader = document.createElement("div");
  preloader.classList.add("ds-preloader");
  preloader.innerHTML = '<div class="ds-preloader-counter">0%</div>';
  document.body.prepend(preloader);
}
