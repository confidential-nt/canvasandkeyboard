const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
window.addEventListener("keydown", detectWhichKey);

canvas.width = 700;
canvas.height = 700;
canvas.strokeStyle = "black";
canvas.fillStyle = "blue";

ctx.rect(10, 20, 30, 40);
ctx.stroke();
ctx.fill();

function hanldeCanvasLeft() {
  ctx.clearRect(10, 20, 30, 40);
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.rect(5, 20, 30, 40);
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
    let count = 0;
    count++;
    handleCanvasRight(count++);
  } else if (event.keyCode == 37) {
    hanldeCanvasLeft();
  } else return;
}
