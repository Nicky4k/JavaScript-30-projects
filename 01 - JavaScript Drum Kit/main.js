document.addEventListener("keypress", (e) => {
  if (!"asdfghjkl".split("").includes(e.key)) return;

  const node = document.querySelector(`[data-key='${e.key}']`);
  node.classList.add("playing");

  document.querySelector(`audio[data-key='${e.key}']`).play();

  setTimeout(() => {
    node.classList.remove("playing");
  }, 100);
});
