const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.rect(10,10,20,40);
ctx.fill();

ctx.beginPath();

ctx.rect(100,10,20,40);
ctx.fillStyle = "red";
setTimeout(()=>{
  ctx.fill();
},5000)
ctx.rect(200,10,20,40);

