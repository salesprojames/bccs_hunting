var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

function drawBoxGun(){
	context.beginPath();
	context.arc(600, 200, 50, .5 * Math.PI, 1.5 * Math.PI);
	context.closePath();
	context.fillStyle = "black";
	context.fill();
	context.strokeStyle = "black";

	//context.rotate(20 * Math.PI / 180);
	context.fillRect(490, 190, 100, 20);
	}

	

var gun = {
	x: 490,
	y: 200,
	movement: null,
	dir: null
}

function moveGunUp(){
  //Functionality goes here.  See keyclick.js
  gun.dir = "up"
  
  	
  	if (gun.y >= 130){
 	 gun.y -= 1
 		if (gun.movement == "negative"){
 		 gun.x -= .5
 		} else {
 		 gun.x += .5
 		}
  	}
 	
}

function moveGunDown(){
	gun.dir = "down"
	 
	 if (gun.y <= 270){
 	 	gun.y += 1
 	 	if (gun.movement == "negative"){
 		 gun.x -= .5
 		} else {
 		 gun.x += .5
 		}
 	 }
}