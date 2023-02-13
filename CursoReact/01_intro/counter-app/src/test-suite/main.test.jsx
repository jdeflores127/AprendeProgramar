import {saludarFlecha, devolverObjeto} from "../../../../02-IntroJavascript/06Funciones"; 
import {poderesPeleaByPersonaje} from "../../../../02-IntroJavascript/05DesestructuracionArrays"; 

describe("prueba en el archivo main.jsx",()=>{
  test('debe devolver "hola"',()=>{
    const mensajeFuncion=saludarFlecha('Manolete');
    const validacion='hola Manolete';
    
    expect( mensajeFuncion ).toBe(validacion);
     
  });
});

describe("prueba en el archivo funciones.jsx de superheroes",()=>{
  test('debe devolver un heroe Batman',()=>{
    const superHeroe=devolverObjeto();
    const validacion={ id:"AB6788",nombre:"Juan carlos" };
    
    /*toBe valida la direccion de memoria de un objeto, 
    usar equals para validar el contenido del objeto*/
    expect( superHeroe ).toEqual(validacion);
     
  });
});

  describe("prueba en el archivo de desestructuracion de datos",()=>{
    test('debe validar los tipos de datos',()=>{
      const[personaje , poder]=poderesPeleaByPersonaje();    
      
      /*toBe valida la direccion de memoria de un objeto, 
      usar equals para validar el contenido del objeto*/
      expect( personaje ).toEqual('GOKU');
      expect( poder ).toEqual(12);
      //validar el tipo de datos
      expect( typeof personaje ).toBe( 'string' );


    });
  });