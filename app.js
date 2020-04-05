(function () {


   //REEMPLAZAR COMER CON LONCHE , AGREGAR ALMUERZO DESPUES DE REFRIGERIO Y ELMINAR SOBRA
   var
   elementoUno = document.createElement('li'),
   elementoDos = document.createElement('li'),
   contenidoUno = document.createTextNode('Almuerzo'),
   contenidoDos = document.createTextNode('Lonche'),
   lista = document.getElementById('comida'),
   sobra = document.getElementById('sobrante'),
   comer = document.getElementById('Comer'),
   elementoPadre = document.getElementsByTagName('li')[2].parentNode,
   contenidoPadre = document.getElementsByTagName('li')[2];
   elementoUno.appendChild(contenidoUno);
   elementoDos.appendChild(contenidoDos);
   lista.removeChild(sobra);
   lista.replaceChild(elementoDos , comer);
   elementoPadre.insertBefore(elementoUno, contenidoPadre);
}())