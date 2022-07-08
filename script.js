const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldEnv = document.querySelector("[data-world]");

setPixToWorldScale();
window.addEventListener("resize", setPixToWorldScale);

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
