//import {heroes} from '/data/07Heroes.js'
import {heroes,owners} from './data/07Heroes.js ' 



//Filtrar por el primer elemento que encuentre
export const getHeroeById = (id) => heroes.find( (heroe)=>heroe.id==id );
//filtrar varios elementos
const getHeroesByOwner = (owner) => heroes.filter( (heroe)=>heroe.owner===owner );

console.table(getHeroeById(2));
console.table(getHeroesByOwner('DC'));
console.log(owners);
