var canvas;
var gameState=0;
var contestantCount,database,quiz,question;
var contestant;
var database;

function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-150);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  contestant = new Contestant();
  

}


function draw(){
  background("pink");
  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
 
}
