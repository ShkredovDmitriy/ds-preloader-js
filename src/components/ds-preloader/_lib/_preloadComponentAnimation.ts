import singleSelector from "./_preloaderShortSelectors";

export default function addAnimationToModal(componentSelector:string, animationClass:string) {
  const component = singleSelector(componentSelector);
  return new Promise((resolve) => {
    component.classList.add(animationClass);
    const onCssAnimationEnd = (event:Event) => {
      if(event.target === component) {
        resolve(true);
        component.removeEventListener(
          "animationend",
          onCssAnimationEnd
        );
        component.removeEventListener(
          "transitionend",
          onCssAnimationEnd
        );
      }
    }
    component.addEventListener("animationend", onCssAnimationEnd);
    component.addEventListener("transitionend", onCssAnimationEnd);
  });
}