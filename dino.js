import { setCustomProperty } from "./updateCustomProperty";

const dinoElement = document.querySelector("[data-dino]");
const JUMP_SPEED = 0.45;
const GRAVITY = 0.011;
const DINO_FR_COUNT = 2;
const FR_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;
let verticleVelocity;
export function setupDino() {
  isJumping = false;
  dinoFrame = 0;
  currentFrameTime = 0;
  verticleVelocity = 0;
  setCustomProperty(dinoElement, "--bottom", 0);
  document.removeEventListener("keydown", onJump);
  document.addEventListener("keydown", onJump);
}

export function updateDino(delta, speedScale) {
  handleRun(delta, speedScale);
  handleJump(delta);
}

function handleRun(delta, speedScale) {
  if (isJumping) {
    dinoElement.src = "./img/dino-stationary.png";
    return;
  }

  if (currentFrameTime >= FR_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FR_COUNT;
    dinoElement.src = `./img/dino-run-${dinoFrame}.png`;
    currentFrameTime -= FR_TIME;
  }
  currentFrameTime += delta * speedScale;
}

function handleJump() {}
