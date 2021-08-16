var canvas, backgroundImage;

var gameState = 0;
var levelno=0;
var database;

var form, game;
var xpos=50;
    var ypos=250;
var bgImg1,bgImg2;
var alienImg,tankImg;
var alien1,alien2,alien3;
var alien;
var edges;
var tank;
var tanklaser;
var tanklasergroup;
var alien1laser ,alien1lasergroup;
var alien2laser,alien2lasergroup;
var alien3laser,alien3lasergroup;
var count=0;


function preload(){
  bgImg1 = loadImage("images/firstbg.jpg");
  bgImg2 = loadImage("images/secondbg.jpg");
  alienImg = loadImage("images/alien.png");
  tankImg = loadImage("images/tank.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-120);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
  background(bgImg1);
  
  if(gameState === 1){
    //clear();
   game.play();
  }
  if(gameState === 2){
    // game.end();
  }
  // drawSprites();
}
