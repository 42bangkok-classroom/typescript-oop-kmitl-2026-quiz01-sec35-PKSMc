const input = Number(process.argv[2]);
let i: number;
let sum: number = 1;
if (Number.isNaN(input) || input < 0){
	console.log("Invalid input");
	process.exit();
}
for (i = 1;i <= input;i++)
{
	sum = sum * i;
}
	console.log(sum);


