var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    lienzo.clearRect(0, 0, d.width, d.height);
    var lineas = parseInt(texto.value);
    //var l = 0;
    var p = 0;
    // var yi, xf;
    // var xi, yf;
    // var yip, xfp;
    // var xip, yfp;
    var colorcito = "#ddff00"
    var espacio = ancho / lineas;

    // while(l < lineas)
    // {
    //     yip = 500 - p;
    //     xfp = espacio * (l + 1);
    //     xip = espacio * l;
    //     yfp = 500 - (p + 10);
    //     dibujarLinea(colorcito, 0, yip, xfp, 0);
    //     dibujarLinea(colorcito, xip, 500, 500, yfp);
    //     l = l + 1;
    //     p = p + espacio;
    // }

    // for (let l = 0; l < lineas; l++) {
    //     yip = 500 - p;
    //     xfp = espacio * (l + 1);
    //     xip = espacio * l;
    //     yfp = 500 - (p + 10);
    //     dibujarLinea(colorcito, 0, yip, xfp, 0);
    //     dibujarLinea(colorcito, xip, 500, 500, yfp);
    //     p = p + espacio;
    // }

    // for(l = 0; l < lineas; l++)
    // {
    //     xi = espacio * l;
    //     yf = espacio * (l + 1);
    //     yi = espacio * l;
    //     xf = espacio * (l + 1);
    //     dibujarLinea(colorcito, xi, 0, 500, yf);
    //     dibujarLinea(colorcito, 0, yi, xf, 500);
    //     console.log("Linea " + l);
    // }

    for (let l = 0; l < lineas; l++) {
        var yip = 500 - p;
        var xfp = espacio * (l + 1);
        var xip = espacio * l;
        var yfp = 500 - (p + 10);
        // dibuja la izquierda
        dibujarLinea(colorcito, 0, yip, xfp, 0);
        //
        dibujarLinea(colorcito, xip, 500, 500, yfp);
        dibujarLinea(colorcito, xip, 0, 500, xfp);
        dibujarLinea(colorcito, 0, xip, xfp, 500);
        p = p + espacio;
    }

    dibujarLinea(colorcito, 1, 1, 1, 500);
    dibujarLinea(colorcito, 1, 499, 500, 499);
    dibujarLinea(colorcito, 0, 1, 500, 1);
    dibujarLinea(colorcito, 499, 0, 499, 500);
}