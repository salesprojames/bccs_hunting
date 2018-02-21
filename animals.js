//creates array of animal objects
var animalObjects = [];

//function to create an animal
function createAnimal(name, size, x, y, speed){
    name = {
    size: size,
    x: x,
    y: y,
    speed: speed
    };
    animalObjects.push(name)
};

//draws enemies on screen
function drawAnimals(){
    //gives entity their data that's drawn on screen

    //draws on screen
    for (i = 0; i < animalObjects.length; i++){
    context.beginPath()
    context.fillRect(animalObjects[i].x, animalObjects[i].y, animalObjects[i].size, animalObjects[i].size)
    context.closePath()
    animalObjects[i].y += animalObjects[i].speed

    }
};

createAnimal("deer", 20, 0, (0 - 20), 1);
createAnimal("duck", 20, 200, (0 - 20), 1);
createAnimal("bear", 20, 400, (0 - 20), 1);
