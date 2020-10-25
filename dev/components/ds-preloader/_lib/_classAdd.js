export default function classAdd(component, cls, time) {
  setTimeout(() => {
    document.querySelector(component).classList.add(cls);
  }, time);
}
