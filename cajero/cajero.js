class Billete
{
    constructor(v, c, n)
    {
        this.valor = v;
        this.cantidad = c;
        this.nombre = n;
        this.imagen = new Image();

        this.imagen.src = imagenes[this.nombre];
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);    
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }   
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        resultado.innerHTML = "Soy un cajero malo, he sido malo y no tengo esa cantidad >:(";
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }
        }
    }
}

var caja = [];
var imagenes = [];
imagenes["cinc"] = "cinc.png";
imagenes["vein"] = "vein.png";
imagenes["diez"] = "diez.png";
var entregado = [];
caja.push(new Billete(50, 3, "cinc"));
caja.push(new Billete(20, 2, "vein"));
caja.push(new Billete(10, 2, "diez"));
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);