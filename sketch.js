
var grocery=["tomato","apple","banana","grapes","carrot"]

var eraser1,eraser2;








function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  //new = new object
  eraser1 = new Eraser(0,0,10,20);

  eraser2 = new Eraser(300, 200,30,60);
  


}






function draw() {
  background(255,255,255);  


  fill("red");
  textSize(20);


  //i = 5
  for(var i=0;i<=4;i=i+1){
    text(grocery[i],300,100+20*i);
  }


/*   text(grocery[0],300,100);
  text(grocery[1],300,120);
  text(grocery[2],300,140);
  text(grocery[3],300,160);
  text(grocery[4],300,180);
 */
  eraser1.display();
  eraser2.display();
  drawSprites();
}