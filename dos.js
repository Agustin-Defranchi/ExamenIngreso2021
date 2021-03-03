function mostrar()
{
	let salir;
	let cursada;
	let cantidad;
	let sexo;
	let nota;
	let edad;
	let flag;
	let promMax;
	let cantNotas;
	let contNotas;
	let prom;
	let nombreMax;
	let flagEdad;
	let edadMin;
	let nombreMin;
	let promF;
	let promM;
	let acumNotaF;
	let acumnotaM;
	let cantF;
	let cantM;
	let flagmateris;
		let materiaMax;
		let edadMatMax;
		let nombreMatMax;
	flagmateris =0;


	cantF=0;
	cantM=0;

		acumnotaM=0;
		acumNotaF=0;
	promM=0;
	promF =0;
	flagEdad=0
	flag = 0;
	contNotas=0;
	prom = 0;

	do
	{
		nombre = prompt("Ingrese su nombre:");
 		
 		cursada = prompt("estado de su cursada(libre/presencial/remota) ");
	  	while(cursada != "libre" && cursada != "presencial" && cursada != "remota")
		{
 			cursada = prompt("ingrese un estado valido(libre/presencial/remota) ");

		}
		cantidad = parseInt(prompt("ingrese la cantidad de materias(1 - 7)"));
		while(cantidad <= 1 || cantidad >= 8 )
		{
			cantidad = parseInt(prompt("ingrese una cantidad dentro de los limites(1 -  7"));

		}

		sexo = prompt("ingrese su sexo (f/m)");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("ingrese un sexo valido (f/m)");

		}

		nota= parseInt(prompt("ingrese una nota del 0-10"))
		while(nota <0 || nota >10 )
		{
			nota= parseInt(prompt("ingrese una nota valida 0-10"))

		}

		edad = prompt("ingrese una edad (18 o mas)");
		while(edad < 18)
		{
			edad = prompt("ingrese una edad valida (18 o mas)");
		}
		if(sexo == "s")
		{
			acumNotaF += nota;
			cantF ++ ;
			if(flag==0 || nota>promMax)
			{
				flag == 1;
				promMax = nota;
				nombreMax = nombre;
					
			}
		}
		else
		{
			acumnotaM +=nota;
			cantM++;
		}
		if(cursada == "libre")
		{
			if(flagEdad ==0 || edad < edadMin)
			{
				flagEdad==1;
				nombreMin = nombre;
			}
		}
		if(flagmateris==0|| cantidad>materiaMax)
		{
			if(cursada != "remota")
			{
				flag == 1;
				edadMatMax=edad;
				nombreMatMax=nombre;

			}
		}



		salir = prompt("desea salir?");
	}while(salir != "s")

	alert("el nombre del mejor promedio " + nombreMax);
	alert("el nombre del alumno mas joven querinde libre es "+nombreMin);
	promF=acumNotaF/cantF;
	promM=acumnotaM/cantM;
	alert("el promedio masculino es "+promM + " y  el orimedio femenino es "+promF);
	alert("el nombre y la edad del que cursa mas materias de forma no remota es" +nombreMatMax +" y "+edadMatMax+"años");



}
/*
Enunciado:


se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre

c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota


*/