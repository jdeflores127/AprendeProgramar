const personajes=['GOKU','VEGETA','TRUNKS'];

//obtener el primer elemento
console.info("Desestructuracion en primer elemento");
const[personaje1]=personajes;
console.log(personaje1);

//para obtener el segundo elemento realizar
console.info("Desestructuracion en segundo elemento");
const[,personaje2]=personajes
console.log(personaje2);

//para obtener un elemento que no existe elemento realizar
console.info("Desestructuracion en elementos de array que no existen");
const[,,,personaje3='BULMA']=personajes
console.log(personaje3);

//Desestructuracion en funciones
console.info("Desestructuracion en funciones");
const FUNCTION_GETPERSONAJE=()=>['CELL','FREEZER','MAJIN BOO'];
const [,,tercerVillano] =FUNCTION_GETPERSONAJE();

console.log(tercerVillano);

//Desestructuracion en funciones como elemento de array
console.info("Desestructuracion en funciones como elemento de array");
const FUNCTION_PERSONAJE_PODER=(nombreVillano)=>[nombreVillano,()=>{console.log(`${nombreVillano} lanza un Kame Hame Ha`)}];
const [,nombrePoder] =FUNCTION_PERSONAJE_PODER('BLACK GOKU');
nombrePoder();
nombrePoder()