const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
window.addEventListener("keydown", detectWhichKey);

canvas.width = 700;
canvas.height = 700;
canvas.strokeStyle = "black";
canvas.fillStyle = "blue";

let count = 0;

ctx.rect(10, 20, 30, 40);
ctx.stroke();
ctx.fill();

function hanldeCanvasLeft(num) {
  ctx.clearRect(10, 20, 30, 40);
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.rect(2 * num, 20, 30, 40);
  ctx.stroke();
  ctx.fill();
}

function handleCanvasRight(num) {
  ctx.clearRect(10, 20, 30, 40);
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.rect(10 + 4 + num, 20, 30, 40);
  ctx.stroke();
  ctx.fill();
}

function detectWhichKey(event) {
  if (event.keyCode == 39) {
    count = count + 1;
    handleCanvasRight(count);
  } else if (event.keyCode == 37) {
    count = count + 1;
    hanldeCanvasLeft(count);
  } else return;
}
