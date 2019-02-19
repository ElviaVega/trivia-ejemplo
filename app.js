//funcion Costa

function resultado() {
let preg1, preg2, preg3,suma;

if (document.getElementById('resp11').checked==true) {
  preg1=1
}
else {
  preg1=0
}

if (document.getElementById('resp33').checked==true) {
  preg2=1
}
else {
  preg2=0
}

if (document.getElementById('resp22').checked==true) {
  preg3=1
}
else {
  preg3=0
}

suma=preg1+preg2+preg3;
alert(" Aciertos: " + suma);

}
