export default function classAddRem(component, cls, time, add) {
  setTimeout(() => {
    const el = document.querySelector(component);
    add === true ? el.classList.add(cls) : el.classList.remove(cls);
  }, time);
}
