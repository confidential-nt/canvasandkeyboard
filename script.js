const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
window.addEventListener("keydown", detectWhichKey);

canvas.width = 700;
canvas.height = 700;
canvas.strokeStyle = "black";
canvas.fillStyle = "blue";

let countX = 0;
let countY = 0;

ctx.rect(10, 20, 30, 40);
ctx.stroke();
ctx.fill();

function handleCanvas(num1,num2){
    ctx.clearRect(10, 20, 30, 40);
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.rect(10+num1, 20+num2, 30, 40);
  ctx.stroke();
  ctx.fill();
}

let direction = [];

function detectWhichKey(event) {
  if (event.keyCode == 39) {
    countX = countX+ 1;
    direction[0] = countX;    
  }
  if(event.keyCode == 37){
    countX = countX -1;
    direction[0] = countX;
  }
  if(event.keyCode == 38){
    countY = countY -1;
    direction[1] = countY;
    
  }
  if(event.keyCode == 40){
    countY = countY + 1;
    direction[1] = countY;//마이너스조건 만들기
  }
  const [x,y] = direction;
  handleCanvas(x,y);
}
  



//한꺼번에


