export default function scrollToId(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView();
  }
}
