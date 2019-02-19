// funcion Selva

function resultado() {
let preg4, preg5, preg6,suma;

if (document.getElementById('resp44').checked==true) {
  preg4=1
}
else {
  preg4=0
}

if (document.getElementById('resp55').checked==true) {
  preg5=1
}
else {
  preg5=0
}

if (document.getElementById('resp66').checked==true) {
  preg6=1
}
else {
  preg6=0
}

suma=preg4+preg5+preg6;
alert(" Aciertos: " + suma);

}
