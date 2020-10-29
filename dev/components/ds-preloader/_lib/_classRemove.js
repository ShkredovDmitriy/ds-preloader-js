export default function classRemove(component, cls, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      document.querySelector(component).classList.remove(cls);
      resolve();
    }, time);
  });
}
