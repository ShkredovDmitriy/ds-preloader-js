export default async function preloaderComponentCreate() {
  const preloader = document.createElement("div");
  preloader.classList.add("ds-prl");
  preloader.innerHTML = '<div class="ds-prl-load">0%</div>';
  document.body.prepend(preloader);
}
