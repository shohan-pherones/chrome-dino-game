const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldEnv = document.querySelector("[data-world]");

setPixToWorldScale();
window.addEventListener("resize", setPixToWorldScale);

let lastTime;
function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }

  const delta = time - lastTime;
  console.log(delta);

  lastTime = time;
  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);

function setPixToWorldScale() {
  let worldToPixScale;
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    worldToPixScale = window.innerWidth / WORLD_WIDTH;
  } else {
    worldToPixScale = window.innerHeight / WORLD_HEIGHT;
  }

  worldEnv.style.width = `${WORLD_WIDTH * worldToPixScale}px`;
  worldEnv.style.height = `${WORLD_HEIGHT * worldToPixScale}px`;
}
