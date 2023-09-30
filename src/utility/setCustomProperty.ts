export default function setCustomProperty(elementId: string, propertyName: string) {
  const root = document.documentElement;
  const element = document.getElementById(elementId);
  const elementHeight = element?.offsetHeight;
  if (elementHeight)
    root.style.setProperty(propertyName, elementHeight.toString() + "px");
}
