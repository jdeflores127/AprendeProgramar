test('No debe fallar', () => { 
/*    if(0===0){
        throw new Error('No se puede dividir entre 0');
    }*/
 
//Arrange
const mensaje1='Hola mundo    ';
//Act
const message2 = mensaje1.trim();
//Assert
expect( mensaje1 ).toBe( message2 );  
 });