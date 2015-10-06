function car(plateNo, model, colors){
	this.plateNo = plateNo;
	this.model = model;
	this.colors = colors;
	this.speed = 0;

	this.startcar = startcar;
	this.stopcar = stopcar;
	this.accelerate = accelerate;
	this.decelerate = decelerate;
	this.repaintCar = repaintCar;
}

function startcar(){
	this.speed= 10;
}

function stopcar(){
	this.speed= 0;
}

function accelerate(n){
	this.speed += n;
}

function decelerate(n){
	this.speed -= n;
}

function repaintCar(color){
	this.colors= color;
}