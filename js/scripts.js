var studentsList = [
  {
    firstName: 'Juan',
    lastName: 'Pérez',
    dni: 45678987
  },
  {
    firstName: 'Ana',
    lastName: 'Fernandez',
    dni: 45678989
  },
  {
    firstName: 'Pedro',
    lastName: 'Mármol',
    dni: 45678956
  },
  {
    firstName: 'Pablo',
    lastName: 'Picapiedras',
    dni: 45678983
  }
]

var busqueda = prompt('ingrese búsqeda');

function miFuncion (miArray){
  var resul=-1;
  for(var i=0; i<miArray.length; i++){
    if (miArray[i].firstName==busqueda || miArray[i].lastName==busqueda) {
      resul=i;
    }
  }
  return resul;
}

console.log(miFuncion(studentsList));