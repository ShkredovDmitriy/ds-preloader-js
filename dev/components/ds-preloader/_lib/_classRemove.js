export default function classRemove(component, cls, time) {
  setTimeout(() => {
    document.querySelector(component).classList.remove(cls);
  }, time);
}
