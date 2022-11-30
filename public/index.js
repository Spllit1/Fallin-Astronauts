const socket = io()


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(153);
  textSize(40)
  textAlign(CENTER);
  text("Loading...", width/2, height/2)
}

let txt;

function draw(){
  background(153);
  textSize(50)
  text(txt, width/2, height/2)
}




socket.on("update", function(number) {
  
}) 
