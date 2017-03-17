console.log("Animate.js is LOADED");

//offline testing using these libraries
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session2" --disable-web-security

//this js file is for the hero constructor and associated sprites, and movement functions


var dude, runsprites, bgImg, bgFloor, mapWidth = 8520;
var Gravity = 1;
var platform;
var platform_two;
var platform_three;

function Hero (name) {
  this.name = name;
  this.x = 200;
  this.y = height/2;
  this.xspeed = 0;
  this.gravity = 15;
  this.jump = -7 * 0.75;
  this.runsprites = createSprite(this.x, this.y, 800, 600);

  this.show = function () {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  };


  this.dir = function(x, y) {
    this.xspeed = x;
    this.gravity = y;
  };

  this.update = function () {

    this.x = this.x + this.xspeed;
    this.y = this.y + this.gravity *1.9;

    if (this.x > mapWidth - 780) {
      this.x = mapWidth - 780;
      this.xspeed = 0;
    }

    if (this.x < 0) {
      this.x = 0;
      this.xspeed = 0;
    }

    // if (this.y > height - 80) {
    //   this.y = height - 80;
    //   this.gravity = 0;
    // }

    // if (this.y < 20) {
    //   this.y = 30;
    //   this.gravity = 0;
    // }

    dude.runsprites.position.x = this.x;
    dude.runsprites.position.y = this.y;
  };
}



function setup () {
  createCanvas(800,600);
  dude = new Hero ();
  textSize(50);
  dude.runsprites.addAnimation("standing", "./img/hero/heroguy9.png", "./img/hero/heroguy9.png");
  dude.runsprites.addAnimation("jumping", "./img/hero/heroguy_jump1.png");
  dude.runsprites.addAnimation("crouching", "./img/hero/heroguy_crouch1.png");
  dude.runsprites.addAnimation("running", "./img/hero/heroguy1.png", "./img/hero/heroguy8.png");
  dude.runsprites.addAnimation("spinning", "./img/hero/heroguy1.png", "./img/hero/heroguy8.png");
  dude.runsprites.debug = true;
  bgImg = loadImage("./img/bg.jpg");
  bgFloor = createSprite(0, 600);
  bgFloor.addImage(loadImage("img/bgFloor.png"));
  bgFloor.debug = true;
  platform = createSprite(800, 400);
  platform.addImage(loadImage("img/platform.png"));
  platform.debug = true;
  platform_two = createSprite(1200, 200);
  platform_two.addImage(loadImage("img/platform.png"));
  platform_two.debug = true;
  platform_three = createSprite(1600, 100);
  platform_three.addImage(loadImage("img/platform.png"));
  platform_three.debug = true;
  // dude.setCollider("circle", 0,0,20);

}



function draw () {
  clear();
  image(bgImg, -400,0);
  dude.update();
  // dude.show();
  drawSprites();
  text(keyCode, 33,65);
  camera.position.x = dude.x;
  camera.position.y = height/2;
  camera.zoom = 1;


  if(bgFloor.overlapPixel(dude.x, dude.y + 30)==true) {
    console.log("Overlap detected");
    dude.gravity = 0;
    dude.y -= 10;
  }
  if(platform.overlapPixel(dude.x, dude.y + 30)==true) {
    console.log("Overlap detected");
    dude.gravity = 0;
    dude.y -= 10;
  }
  if(platform_two.overlapPixel(dude.x, dude.y + 30)==true) {
    console.log("Overlap detected");
    dude.gravity = 0;
    dude.y -= 10;
  }
  if(platform_three.overlapPixel(dude.x, dude.y + 30)==true) {
    console.log("Overlap detected");
    dude.gravity = 0;
    dude.y -= 10;
  }

  if (keyDown(UP_ARROW)) {
    dude.dir(0, dude.jump);
    dude.runsprites.changeAnimation("jumping");
    // dude.dir(0, dude.gravity);

  }

  if (keyDown(DOWN_ARROW)) {
    dude.runsprites.changeAnimation("crouching");

  }
  if (keyDown(RIGHT_ARROW)) {
    dude.x += 7;
    dude.runsprites.changeAnimation("running");
    dude.runsprites.mirrorX(1);
  }
  if (keyDown(LEFT_ARROW)) {
    dude.x -= 7;
    dude.runsprites.changeAnimation("running");
    dude.runsprites.mirrorX(-1);
  }
}


  function keyReleased() {
    dude.xspeed = 0;
    dude.gravity = 15;
    dude.runsprites.changeAnimation("standing");
    return false; // prevent any default behavior
  }

//-------------------------
// setTimeout(function (){
//   camera.position.y = height/2;
//   camera.zoom = 1;
// }, 3000);
//------POWER UP------------
//-----SUPER SPEED---------this.xspeed += x; this.gravity += y;
//-----SUPER SIZE---------    dude.runsprites.scale += 0.05;     dude.runsprites.scale -= 0.05;

// this.showHero = function () {
// }
//
// }
//
// function draw() {
//   background(255,255,255);
//
//   //up and down keys to change the scale
//   //note that scaling the image quality deteriorates
//   //and scaling to a negative value flips the image
//   if(keyIsDown(UP_ARROW))
//     ghost.scale += 0.05;
//   if(keyIsDown(DOWN_ARROW))
//     ghost.scale -= 0.05;
//
//   //draw the sprite
//   drawSprites();
// }







//
// width: 56px;
// height: 60px;
