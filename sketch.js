//santa radar:
// https://editor.p5js.org/yolabs007/sketches/JJvUoUV-0

//pendulum:
// https://editor.p5js.org/yolabs007/full/_Qks-1c3H

//Double pendulum:
// https://editor.p5js.org/yolabs007/sketches/aIGUbWYu
function preload(){
  bg1=loadImage("cm.jpg")
  bg2=loadImage("fatrat.jpg")
  bg3=loadImage("ab.jpg")
  song1=loadSound("CM OST.mp3")
  start1=createButton("song1")
  song2=loadSound("unity.mp3")
  start2=createButton("song2")
  song3=loadSound("may-ab.mp3")
  start3=createButton("song3")
  stopa=createButton("stop everything")
}
var bg=255;
function setup() {
  createCanvas(windowWidth, 400);
  s1=createSlider(0,1,100,0.01)
  stopall=stopa.mousePressed(stopa2z)
  play1_1=start1.mousePressed(playsong1)
  play2_2=start2.mousePressed(playsong2)
  play3_3=start3.mousePressed(playsong3)
}

function draw() {
  background(bg)
  song1.setVolume(s1.value())
  song2.setVolume(s1.value())
  song3.setVolume(s1.value())

  ellipse(windowWidth/2,200,s1.value(),s1.value())
  fill("black")
  s1.position(windowWidth/2-70,200)
  text("Volume="+(s1.value()/1)*100,windowWidth/2-70,180)
  textSize(25)
  fill(s1.value(),0,0)
}
function stopa2z(){
  background("white")
  song1.stop()
  song2.stop()
  song3.stop()
}
function playsong1(){
  bg=bg1
  song1.play()
  song2.stop()
  song3.stop()
}

function playsong2(){
  bg=bg2
  song2.play()
  song1.stop()
  song3.stop()
}

function playsong3(){
  bg=bg3
  song3.play()
  song1.stop()
  song2.stop()
}


