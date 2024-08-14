let cor;
let circuloX; // horizontal
let circuloY; // vertical

function mouseYes(){
  fill(cor)
  textSize(22);
  text4 = "Você esta desenhando com javascript!!!" 
  nome = " Giovanna 2D";
  let ex = text(text4, 6, 20); 
  let exr = text(nome, 150, 50); 
  expo = ex + exr
  return expo
}
function setup() {
  createCanvas(500, 500);
  background(color(100,50,60));
  cor = color(random(0, 155), random(0, 165), random(0, 155));
  
  circuloX = [0, 0, 0];
  circuloY = [random(width), random(height), random(width)];
}

function draw() {
  
  fill(cor);
  
  for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 50);    
    circuloX[contador]+= random(0,3);
    circuloY[contador]+= random(-3,3); 
    if (mouseIsPressed == true){
       mouseYes()
        
     }
    if(circuloX[contador] >= width){
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
      
    }
  }
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}