
function mostrar()
{
	let producto;
	let precio;
	let cantidad;
	let tipoInflamable;
	let contAlcohol;
	let contIac;
	let contQuat;
	let promAlcohol;
	let promIac;
	let promQuat;
	let cantAlcohol;
	let cantIac;
	let cantQuat;
	let cantIgnifugo;
	let cantCombustible;
	let cantExplosivo; 
	let canTotalIac; //cantidad total de iac con precio menor a 200
	let flag;
	let productoMax;
	let marcaMax;

	flag = 0;
	contAlcohol = 0;
	contIac = 0;
	contQuat = 0;
	cantAlcohol = 0;
	cantIac = 0;
	cantQuat = 0;	
	cantIgnifugo = 0;
	cantCombustible = 0;
	cantExplosivo = 0;
	precioMax = 0;
	productoMax = 0;

	for(let i = 0;i<5;i++)
	{
		 
		producto = prompt("ingrese el tipo de producto (ALCOHOL/IAC/QUAT").toUpperCase();
		while(producto != "ALCOHOL" && producto != "IAC" && producto != "QUAT")
		{
			producto = prompt("ingrese un tipo de producto valido (ALCOHOL/IAC/QUAT").toUpperCase();

		}

		precio= parseInt(prompt("ingrese el precio (100-300)"));
		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = parseInt(prompt("ingrese un precio valido(100-300)"));
		}		

		cantidad = parseInt(prompt("ingrese la cantidad de unidades(1 - 1000)"));
		while(cantidad <= 0 || cantidad > 1000 || isNaN(cantidad))
		{
			cantidad = parseInt(prompt("ingrese una cantidad dentro de los limites(1 -  1000"));
		}

		tipoInflamable = prompt("ingrese el tipo de inflamables (ignifugo / combustible / explosivo)").toLowerCase();
		while(tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo")
		{
			tipoInflamable = prompt("ingrese un tipo valido de inflamables (ignifugo / combustible / explosivo)").toLowerCase();
		}

		marca = prompt("ingrese una marca: ");

		if(producto == "ALCOHOL")
		{
			contAlcohol ++;
			cantAlcohol += cantidad;
		}
		else if(producto == "IAC")
		{
			contIac ++;
			cantIac += cantidad;
			if(precio <= 200)
			{
				canTotalIac += cantidad;
			}
		}
		else
		{
			contQuat ++;
			cantQuat += cantidad;
		}

		if(tipoInflamable == "ignifugo")
		{
			cantIgnifugo += cantidad;
		}
		else if(tipoInflamable == "combustible")
		{
			cantCombustible += cantidad;
		}
		else
		{
			cantExplosivo += cantidad;
		}

		if(flag==0 || precio > precioMax)
		{
			flag == 1;
			productoMax=producto;
			marcaMax=marca
		}




	}
	promAlcohol = cantAlcohol / contAlcohol;
	promIac = cantIac / contIac;
	promQuat = cantQuat / contQuat;

	alert("el promedio de cantidad del alcohol es "+promAlcohol+", el del Iac "+promIac+" y el del Quat"+promQuat);

	if(cantIgnifugo > cantCombustible && cantIgnifugo > cantExplosivo)
	{
		alert("el tipo de inflamable con mas cantidad es el ignifugo con " + cantIgnifugo);
	}
	else if(cantCombustible > cantIgnifugo && cantCombustible > cantExplosivo)
	{
		alert("el tipo de inflamable con mayor cantidad es el combustible con "+cantCombustible);
	}
	else
	{
		alert("el tipo de inflamable con mayor cantidad es el explosivo con "+cantExplosivo);
	}

	alert("la cantidad total de iac comprados con el precio menor a 200 es de "+canTotalIac);

	alert("la marca y tipo del producto mas caro es "+marcaMax + " y "+productoMax);
}


/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),(terminado)
el precio (validar entre 100 y 300),(terminado)
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),(terminado)
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.(terminado)
Se debe Informar al usuario lo siguiente:

a) El promedio de cantidad por tipo de producto(terminado)
b) El tipo de inflamable con más cantidad de unidades en total de la compra(terminado)
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total (terminado)
d) la marca y tipo del más caro de los productos(terminado)
*/