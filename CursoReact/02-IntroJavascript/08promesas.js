//promesas: dan una respuesta futura, eje cuando te comprometes a hacer algo.
//por default las promesas son asincronas y espera a que se termine la pila de ejecucion para ejecutar lo asincrono

import {getHeroeById} from './07Imports.js'

const promesa = new Promise( (resolve,reject)=>{
    setTimeout(() => {
       console.log('timeout de 2 segundos')
       //Con resolve indicamos que la promesa se ejecuto satisfactoriamente y seguira con el then
       const idHeroe=100;
       const heroe=getHeroeById(idHeroe);
       if(heroe!=undefined){
            resolve(heroe);
       }else{
            reject(idHeroe);
       }
       
    }, 2000);
} );

//Para mandar parametros al then enviarlo desde el objeto resolve
promesa
    .then((heroe)=>{console.log(` Nombre heroe ${heroe.name} de la marca ${heroe.owner} `)})
    .catch((idHeroe)=>{console.error(`No se pudo encontrar el heroe con id ${idHeroe}`)});

//Se puede crear una promesa como return de la funcion
const getHeroeByIdAsyc = (idHeroe)=>{
    return new Promise( (resolve,reject)=>{
        setTimeout(() => {
           console.log('timeout de 2 segundos')
           //Con resolve indicamos que la promesa se ejecuto satisfactoriamente y seguira con el then
           const idHeroe=2;
           const heroe=getHeroeById(idHeroe);
           if(heroe!=undefined){
                resolve(heroe);
           }else{
                reject(idHeroe);
           }
           
        }, 2000);
    } );
};

//Esto da un error debido a que en el debug el codigo sincrono sigue en la pila el asincrono no se puede ejecutar
const heroeAsync=getHeroeByIdAsyc(2)
    .then((heroe)=>{return heroe})
    .catch((idHeroe)=>{throw new Error("no se pudo obtener el heroe")});


console.table(heroeAsync);