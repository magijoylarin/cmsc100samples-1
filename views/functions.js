//first method
function cube(n){
	return n*n*n;
}
var cube=function(n){
	return n*n*n;
}

alert(cube(2));

function foo1(a){
	a=100;
	console.log("Inside the function a is: " +a);
}
function foo2(myObject){
	myObject.fname = "John";
}
function foo3(myObject){
	myObject = {fname: "Jane", lname: "Dizon", age: 25};
}

/*IN CONSOLE
var a = 10;
console.log("Outside the function a is: " +a);
foo1(a);
console.log("Outside the function a is: " +a);
var person = {fname: "Juan", lname: "Dela Cruz", age: 50};
console.log(person.fname);
foo2(person);
console.log(person.fname);
*/

//Object1 Initializer
var person = {
	fname: "Juan",
	lname: "Dela Cruz",
	age: 50
};

//Constructor function
function student(fname, lname, age){
	this.fname = fname;
	this.lname = lname;
	this.age = age;

	this.changeName = changeName;
	this.updateAge = updateAge;
}

/*IN CONSOLE
var student1 = new student("Michael", "V", 40);
var student2 = new student("Andrew", "E", 45);
student1;
student2;
*/

function changeName(newFirstName, newLastName){
	this.fname= newFirstName;
	this.lname= newLastName;
}

function updateAge(newAge){
	this.age= newAge;
}

/*
student1.changeName("Kristine","Bautista");
student1.updateAge(18);
*/