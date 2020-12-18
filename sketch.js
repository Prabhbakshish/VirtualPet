//Create variables here
var dog,dogImg,happyDogImg,database,foodS,foodStock;



function preload(){
  //load images here
  DogImg=loadImage("images/dogImage.png");
  happyDogImg=loadImage("images/happyDogImg.png");


}

function setup() {
	createCanvas(500, 500);
database=firebase.database();
foodstock=database.ref("Food");
foodstock.on("value",readStock);
foodStock.set(20);

dog =createSprite(250,350,10,60);
dog.addImage(dogImg);
dog.scale=0.2;

}


function draw() {  
background("green");
if(foodS!==undefined){
  textSize(20);
  fill(255);
  text("Note:Press UP ARROW to feed DRAGO milk",50,50);
  text("Food Remaining:"+foodS,150,150);

}
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}
  drawSprites();
  //add styles here



}



