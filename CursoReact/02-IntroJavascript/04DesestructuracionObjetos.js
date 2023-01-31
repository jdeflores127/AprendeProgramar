//Asignacion desestructurada
const persona={
    nombre:'tony',
    edad:45,
    clave:'ironman'
};
//En lugar de hacer un persona.nombre se puede usar la AD

const {nombre:nombreNoRepetido,edad} = persona;
console.log(nombreNoRepetido);
console.log(edad);

//Desestructuracion en el argumento de la funcion
const imprimePersona=({nombre,clave,rango = 'Vengador'})=>{
    console.log(nombre);
    console.log(clave);
    console.log(rango);
    //Si el rango no existe o no esta definido se agregara el x defecto
};

imprimePersona(persona);

//Desestructuracion en scope local
const useContext=({nombre,clave,rango = 'Vengador'})=>{
    return {
        nombreAvenger:nombre,
        claverSuper:clave
    };
};

const superHeroe={
    nombre:'CapitanAmerica',
    edad:109,
    clave:'Super Soldado'
};

const {nombreAvenger,claverSuper}=useContext(superHeroe);
console.log(nombreAvenger);

//Desestructuracion con objetos anidados
const superHeroe2={
    nombre:'Bruce Baner',
    edad:28,
    clave:'Hulk',
    poderes:{
        superFuerza:100,
        resistencia: 200,
        inmortal: false
    }
};
//opncion 1
const {nombre:nombreSuper2,edad:edadSuper,poderes:{superFuerza:nivelFuerza,inmortal}}=superHeroe2;
console.log(`El Super [${nombreSuper2}] tiene superfuerza de [${nivelFuerza}]`);

//opcion 2
const {nombre:nombreSuper3,edad:edadSuper3,poderes:superpoderes}=superHeroe2;
const {resistencia}=superpoderes;
console.log(`El Super [${nombreSuper3}] tiene resistencia de [${resistencia}]`);

