var euro_input = +prompt("Enter amount in EURO ",'');
var usd_input = +prompt("Enter amount in USD",'');

var euro = 33.4602;	// EURO 33.4602
var usd = 27.1196;	// USD 27.1196

var output_uero_uah = euro_input * euro;
var output_usd_uah = usd_input * usd;

var one_uero = euro/usd;

console.log(euro_input + " euros are equal "+ Math.round(output_uero_uah) + " UAH, " + usd_input + " dollars are equal " + Math.round(output_usd_uah) + " UAH, one euro is equal " + one_uero.toFixed(3)+ " dollars.")
