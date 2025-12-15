const balance = Number(process.argv[2]);
const amount = Number(process.argv[3]);
if (Number.isNaN(balance) || Number.isNaN(amount) || balance < 0 || amount < 0){
	console.log("Invalid lol");
}

else if (amount > balance){
	console.log("Insufficient balance");
}
else if (amount > 5000){
	console.log("Exceeds per-withdrawal limit");
}
else if (amount <= balance){
	console.log("Withdrawal approved");
}

