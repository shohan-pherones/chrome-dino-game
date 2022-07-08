import { setupGround, updateGround } from "./ground.js";
import { setupDino, updateDino } from "./dino.js";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
const SPEED_INCREASE = 0.00001;

const worldEnv = document.querySelector("[data-world]");
const scoreElement = document.querySelector("[data-score]");
const startElement = document.querySelector("[data-start-screen]");

setPixToWorldScale();
window.addEventListener("resize", setPixToWorldScale);
document.addEventListener("keydown", handleStart, { once: true });

let lastTime;
let speedScale;
let score;
function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }

  const delta = time - lastTime;

  updateGround(delta, speedScale);
  updateDino(delta, speedScale);
  updateSpeedScale(delta);
  updateScore(delta);

  lastTime = time;
  window.requestAnimationFrame(update);
}

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

function handleStart() {
  startElement.classList.add("hide");
  lastTime = null;
  speedScale = 1;
  score = 0;
  setupGround();
  setupDino();
  window.requestAnimationFrame(update);
}

function updateSpeedScale(delta) {
  speedScale += delta * SPEED_INCREASE;
}

function updateScore(delta) {
  score += delta * 0.01;
  scoreElement.textContent = Math.floor(score);
}
