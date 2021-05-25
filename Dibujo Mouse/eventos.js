var cuadrito = document.getElementById("area_de_dibujo");
cuadrito.addEventListener("mousemove", dibujarMouseMove);
cuadrito.addEventListener("mousedown", dibujarMouseDown);
cuadrito.addEventListener("mouseup", dibujarMouseUp);
cuadrito.addEventListener("mouseleave", dibujarMouseUp);

var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujarLimpiar);
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var mouse = false;

// dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.fillStyle = color;
    lienzo.lineWidth = 3;
    // lienzo.moveTo(xinicial,yinicial);
    // lienzo.lineTo(xfinal,yfinal);
    var r = 10;
    lienzo.arc(xfinal,yfinal,r,0,2 * Math.PI);
    lienzo.fill();
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarMouseMove(evento) {
    if (mouse) {
        var colorcito = "blue";
        console.log(x, y, evento.offsetX, evento.offsetY);
        dibujarLinea(colorcito, x, y, evento.offsetX, evento.offsetY, papel);
        x = evento.layerX;
        y = evento.layerY;
    }
}
function dibujarMouseDown(evento) {
    x = evento.layerX;
    y = evento.layerY;
    mouse = true;
}

function dibujarMouseUp(evento) {
    mouse = false;
}
function dibujarLimpiar(params) {
    papel.clearRect(0, 0, cuadrito.width, cuadrito.height);
}