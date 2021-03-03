function mostrar()
{
	let salir;
	let cursada;
	let cantidad;
	let sexo;
	let nota;
	let edad;

	do
	{
		nombre = prompt("Ingrese su nombre:");
 		cursada = prompt("Ingrese tipo de cursada('libre', 'presencial', 'remota'):");

		cantmaterias = prompt("Ingrese cantidad de materias(mas de 0, menos de 8):");

 		sexo = prompt("Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):").toLowerCase();
 		while(sexo != "masculino" && sexo != "femenino")
 		{
 		  sexo = prompt("Dato inválido.Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):");
 		}

			notaprom = parseInt(prompt("Ingrese la nota promedio(entre 0 y 10):"));
		while(!(notaprom>=0 && notaprom<=10))
		{
 		  notaprom = parseInt(prompt("Dato inválido. Ingrese la nota promedio(entre 0 y 10):"));
 		}

		 edad = parseInt(prompt("Ingrese la edad:"));
 		 while( edad>= 0 && isNaN(edad)){
   		 edad = parseInt(prompt("Dato inválido. Ingrese edad."))
	  }

		salir = prompt("desea salir?");
	}while(salir != "s")
}
/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota

let cursada;
let cantmaterias;
let sexo;
let notaprom;
let edad;
let seguir = "s";
let prommax;
let nomprom;
let nombre;
let nomlibre;
let edadmin;
let acumpromM = 0;
let acumpromF = 0;
let acumpromN = 0;
let promM;
let promF;
let promN;
let alumM;
let alumF;
let alumN;
let totalmaterias;
let materiasMax;
let nombremat;
let edadmat;

do{
  nombre = prompt("Ingrese su nombre:");

  cursada = prompt("Ingrese tipo de cursada('libre', 'presencial', 'remota'):");

  cantmaterias = prompt("Ingrese cantidad de materias(mas de 0, menos de 8):");

  sexo = prompt("Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):").toLowerCase();
  while(sexo != "m" && sexo != "f" && sexo != "n"){
    sexo = prompt("Dato inválido.Ingrese sexo (femenino(f)/masculino(m)/no binario(n)):");
  }

  notaprom = parseInt(prompt("Ingrese la nota promedio(entre 0 y 10):"));
  while(!(notaprom>=0 && notaprom<=10)){
    notaprom = parseInt(prompt("Dato inválido. Ingrese la nota promedio(entre 0 y 10):"));
  }

  edad = parseInt(prompt("Ingrese la edad:"));
  while( edad>= 0 && isNaN(edad)){
    edad = parseInt(prompt("Dato inválido. Ingrese edad."))
  }

  if(sexo != "m"){
    if(prom>prommax){
      prommax = prom;
      nomprom = nombre;
    }

  }

  if(cursada == "libre"){
    if(edad<edadmin){
      edadmin = edad;
      nomlibre = nombre;
    }

  }

  if(sexo == "m"){
    acumpromM += notaprom;
    alumM++;
  }else if(sexo == "f"){
    acumpromF += notaprom;
    alumF++;
  }else{
    acumpromN += notaprom
    alumN++;
  }

  promM = acumpromM / alumM;
  promF = acumpromF / alumF;
  promN = acumpromN / alumN;

  if(cursada != "remota"){
    totalmaterias + cantmaterias;
    if(totalmaterias>materiasMax){
      materiasMax = totalmaterias;
      nombremat = nombre;
      edadmat = edad;

    }


  }









  seguir = prompt("Desea seguir ingresando productos?  s/n");

}while( seguir == "s")

console.log("El nombre del mejor promedio no masculino es:" + nomprom +"<br>")
console.log("El nombre del más joven de los alumnos que la dan libre es:" + nomlibre +"<br>")
console.log("El promedio de nota por sexo es: masculino:" + promM + "femenino:" + promF + "no binario:" + promN +"<br>" )
console.log("La edad y el nombre del que curse más materias de forma no remota es:" + nombremat + "y tiene" + edadmat + "años." + "<br>")

}
*/