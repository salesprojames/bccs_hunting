
var gun = {
	x: 490,
	y: 200,
	movement: null,
	dir: null
}

function moveGunUp(){
  //Functionality goes here.  See keyclick.js
  gun.dir = "up"
    	
  	if (gun.y >= 130){ 		gun.y -= 1
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

function drawRightGun(){
	context.beginPath();
	context.arc(600, 200, 50, .5 * Math.PI, 1.5 * Math.PI);
	context.closePath();
	context.fillStyle = "black";
	context.fill();
	context.strokeStyle = "black";

	context.beginPath();
	context.lineWidth = 17
	context.moveTo(560, 200);
	context.lineTo(gun.x, gun.y);
	context.stroke();

	if (gun.y == 200){
		gun.movement = "positive"
		console.log("positive")
	}
	if (gun.y < 200 && gun.dir == "down"){
		gun.movement = "negative"
	}
	if (gun.y > 200 && gun.dir == "up"){
		gun.movement = "negative"
	}
	console.log(gun.movement)
	console.log(gun.y)
}
