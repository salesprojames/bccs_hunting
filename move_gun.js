 var barrel = {
	x: 510,
	y: 195,
 	height: 15,
 	width: 70
 }

 function drawRightGun(){	
  	context.beginPath();
	context.arc(600, 200, 50, .5 * Math.PI, 1.5 * Math.PI);
	context.fill();

	context.beginPath();
 	context.fillRect(barrel.x,barrel.y,barrel.width,barrel.height);
	context.stroke();
}

function moveGunUp(){
  //Functionality goes here.  See keyclick.js
  console.log("up")
}

function moveGunDown(){
	console.log("down")
}