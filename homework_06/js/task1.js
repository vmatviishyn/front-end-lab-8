var a = +prompt("Enter first side",'');
var b = +prompt("Enter second side",'');
var c = +prompt("Enter third side",'');

var p, S;

p = (a+b+c)/2;
S = Math.sqrt(p*(p-a)*(p-b)*(p-c));

if ((( a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
	if (Math.pow(a,2)+Math.pow(b,2)==Math.pow(c,2) || Math.pow(a,2)+Math.pow(c,2)==Math.pow(b,2) || Math.pow(c,2)+Math.pow(b,2)==Math.pow(a,2)){
		console.log("Type of triangle is right triangle and square is " + Math.round(S * 100) / 100);
	}
	else if (a==b && b==c && c==a){
		console.log("Type of triangle is equilateral triangle and square is " + Math.round(S * 100) / 100);
	}
	else if (a==b || b==c || c==a){
		console.log("Type of triangle is isosceles triangle and square is " + Math.round(S * 100) / 100);
	}
	else if (a!=b && b!=c && c!=a){
		console.log("Type of triangle is scalene triangle and square is " + Math.round(S * 100) / 100);
	}
}
else console.log("Incorrect data");
