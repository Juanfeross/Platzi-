var n = prompt("Coloca el numero de X para dibujar");

for(i = 0; i < n; i++)
{
    var j = n - 1 - i;
    for(k = 0; k < n; k++)
    {
        if(k == i || k == j)
        {
            document.write("X");
        }        
        else
        {
            document.write("_");
        }
    }
    document.write("<br>");
}



