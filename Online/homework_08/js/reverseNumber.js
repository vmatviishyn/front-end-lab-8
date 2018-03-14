function reverseNumber(n){
	n = n + "";

	n < 0 ? 
		console.log(n.split("").reverse().join("")) : 
		console.log(Math.floor(n.split("").reverse().join("")));
}

reverseNumber(-456);