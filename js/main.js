/*
    cada dia tendra asignado un color 
*/


//creamos el array para que contenga cada dia de la semana
var fechadia = new Date();
var diasSemana=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

//funcion para elegir el fondo segun el dia que este seleccionado
diaSeleccionado = fechadia.getDay();
elegirfondo(diaSeleccionado);
document.write(`este es el color del dia ${diasSemana[diaSeleccionado]}`);
function elegirfondo(diaSeleccionado){

//creamos un swich para cada caso de la semana asignando un color a cada dia
switch(diaSeleccionado){
    case 0: document.body.style.backgroundColor = 'aqua'; break;
    case 1: document.body.style.backgroundColor = 'grey'; break;
    case 2: document.body.style.backgroundColor = 'green'; break;
    case 3: document.body.style.backgroundColor = 'purple'; break;
    case 4: document.body.style.backgroundColor = 'pink'; break;
    case 5: document.body.style.backgroundColor = 'red'; break;
    case 6: document.body.style.backgroundColor = 'brown'; break;
}
}