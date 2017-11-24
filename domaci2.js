//Zadatak 1
//Varijanta 1
function parNepar() {
	for(var i = 1; i < 11; i++) {
		if(i % 2 == 0) {
			console.log(i + " paran broj");
		}
		else {
			console.log(i + " neparan broj");
		}
	}
}
parNepar()

// //Varijanta 2
function parNepar() {
	var i = 1;
	while (i <= 10) {
		if(i % 2 == 0) {
			console.log(i + " paran broj");
		}
		else {
			console.log(i + " neparan broj")
		}
	i += 1;
	}
}
parNepar()

// //Zadatak 2
function numberSum(N) {
	var i;
	var total = 0;
	var N = prompt("Unesi neki pozitivan broj");
	for(var i = 1; i <= N; i++) {
		total += i;
	}
	console.log("Suma prvih " + N + " prirodnih brojeva iznosi " + total + ".");
}
numberSum()

// //Zadatak 3
function faktoriel(N) {
	var f = 1;
	var N = prompt("Unesi neki pozitivan broj")
	var i = N;
	while(i >= 1) {
		f *= i;
		i -= 1;
	}
	console.log("Faktorijel od broja " + N + " iznosi " + f + ".");
}
faktoriel()

// //Zadatak 4
function shopping(sum, price) {
	var piece;
	var sum = prompt("Sa koliko para raspolazes?");
	var price = prompt("Koliko kosta jedan proizvod koji zelis da kupis?");
	piece = (sum - sum % price) / price;
	console.log("Ukupno mozes da kupis " + piece + " proizvoda sa parama kojim raspolazes.");
}
shopping()