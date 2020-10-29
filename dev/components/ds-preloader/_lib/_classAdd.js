export default function classAdd(component, cls, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      document.querySelector(component).classList.add(cls);
      resolve();
    }, time);
  });
}
