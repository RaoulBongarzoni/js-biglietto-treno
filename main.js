let eta=prompt("Inserisci la tua età");
let ride=prompt("Inserisci la distanza percorsa dal tuo treno");
const price=0.21;
let final_price=0;

/*  var rounded = Math.round((numb + Number.EPSILON) * 100) / 100;  */

while(isFinite(eta)===false){
    eta=prompt(`Sembra che la tua età non sia compatibile
    Inserisci la tua età`);

};
while(isFinite(ride)===false){
    ride=prompt(`Sembra che la distanza non sia compatibile
    Inserisci la distanza`);
};


final_price= Math.round(((ride * price) + Number.EPSILON) * 100) /100;

if(parseInt(eta) < 18){
    final_price=Math.round(((final_price - (final_price * 20 / 100)) + Number.EPSILON) * 100) /100;
}
if(parseInt(eta) >= 65){
    final_price=Math.round(((final_price - (final_price * 40 / 100)) + Number.EPSILON) * 100) /100;
}


document.getElementById("costo").innerHTML=`Il costo del biglietto sarà di ${final_price}€`;
