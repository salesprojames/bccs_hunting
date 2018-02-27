var bullets =[];

function drawBullets(){
	for (i = 0; i < bullets.length; i++){
		context.fillStyle = "grey";
		context.beginPath();
 		context.fillRect(bullets[i].x, bullets[i].y, bullets[i].size, bullets[i].size);
		context.stroke();
		context.fillStyle = 'black';
		
	}
}

function fireBullet(){
	bullets.push({
		x: barrel.x,
		y: barrel.y,
		size: 14.7,
		speed: 4
	})
}

function moveBullets(){
	for (i=0; i < bullets.length; i++){
		bullets[i].x -= bullets[i].speed;
	}
}