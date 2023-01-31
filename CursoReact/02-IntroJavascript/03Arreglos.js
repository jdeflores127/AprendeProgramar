const arregloNumeros=[1,2,3,4,5,6];

//Map crea un nuevo arreglo
const arreglo=arregloNumeros.map(function(x){
    return x*x;
});

console.log(arreglo);

//Funciones
const SALUDAR_FUNCTION=function(nombre){
    return `saludar a ${nombre}`;
};

console.log(SALUDAR_FUNCTION('KOKUNZ'));

//Funciones flecha
const SALUDAR_FUNCTION_FLECHA=(nombre)=>{
    return `SALUDAR DESDE FLECHA A: ${nombre}`;
};

console.log(SALUDAR_FUNCTION_FLECHA('VEGETA'));

//Funcion flecha simplificada, si solo vamos a usar una linea para el return podemos realizar lo siguiente
const SALUDAR_FUNCTION_FLECHA_SIMPL=(nombre)=>`SALUDAR DESDE FLECHA SIMP A: ${nombre}`

console.log(SALUDAR_FUNCTION_FLECHA_SIMPL('KRILIN'));

/* Para devolver un objeto hay que hacer de el un objeto implicito, porque sino js no sabe diferenciar los {}
*  envolver en parentesis 
*/

const objetoCobro=(nombre,monto)=>({
    nombreUsuario:nombre,
    montoPagar:monto,
    creditoRestante: 120.00
});

console.table(objetoCobro("Jose Manuel",700));

