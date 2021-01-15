//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
var dog_sprite,dog_img,dog_happy_img;

var database;
function preload(){
    dog_img = loadImage ("dog.png");

    dog_happy_img = loadImage ("happydog.png");
}

function setup(){
    var canvas = createCanvas (500,500);
    
    database = firebase.database();
    foodStock = database.ref('food');
    foodStock.on("value",readStock)

    dog_sprite = createSprite(250,250);
    dog_sprite = addImage ("dog_img");
}

function draw(){
    background(46, 139, 87);

    if (keyWentDown (UP_ARROW)){
        writeStock(foods);
        dog_sprite.addImage(dog_happy_img);
    }

    drawSprite();
}

function readStock (data){
    foodS = data.val();
}

function writeStock(x){

    if (x <= 0){
        x=0;
    }else{
        x=x-1;
    }
    database.ref('/').update({
        food:x
    })
}