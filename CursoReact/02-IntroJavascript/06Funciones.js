//es recomendable asignar la funcion a una constante
const saludar = function saludar(nombre){
    return `Hola, ${nombre}`;
}

//COnversion en funcion flecha
const saludarFlecha = (nombre)=> `hola ${nombre}` ;

//Para devolver objetos usando el parentesis
const devolverObjeto = () =>(
    {
        id:"AB6788",
        nombre:"Juan carlos"
    }
);

console.log(saludarFlecha('KOKUN'));
console.table(devolverObjeto());

const getUsuarioActivo = (nombre) => (
    {
        uid:"23456",
        username:nombre
    }
);

console.table(getUsuarioActivo('TUCO'))