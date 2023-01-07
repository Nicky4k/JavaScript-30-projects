document.addEventListener("keypress", (e) => {
  if (!"asdfghjkl".split("").includes(e.key)) return;

  const node = document.querySelector(`div[data-key='${e.key}']`);
  node.classList.add("playing");

  const audioNode = document.querySelector(`audio[data-key='${e.key}']`);

  // rewinds to start of audio clip
  audioNode.currentTime = 0;
  audioNode.play();

  setTimeout(() => {
    node.classList.remove("playing");
  }, 100);
});
