const input = Number(process.argv[2]);
if (Number.isNaN(input) || input > 100 || input < 0){
	console.log("Invalid Input");
	process.exit();
}

if (input >= 80){
	console.log("A");
}
else if (input >= 70){
	console.log("B");
}
else if (input >= 60){
	console.log("C");
}
else if (input >= 50){
	console.log("D");
}
else if (input < 50){
	console.log("F");
}

