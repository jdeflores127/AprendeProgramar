import React, { useState } from 'react';
import PropTypes from 'prop-types';
 
export const AddCategory = ({agregaCategoria}) => {

    const [categoryValue, setcategoryValue] = useState();
    //Del objeto event desestructurar el target
    const addCategoryOnChange = ({target}) => {
        setcategoryValue(()=>target.value);
    };

    const onSubmitEvent = (event)=>{
        
        event.preventDefault();
        console.log(categoryValue);
        agregaCategoria(categoryValue);
        setcategoryValue(()=>'');
        
    };

    return (
        <>
            <form onSubmit={onSubmitEvent}>
                <input id="addCategory" 
                    type="text" 
                    placeholder="Inserte Categoria" 
                    value={categoryValue}
                    onChange={addCategoryOnChange}/>
            </form>
        </>
    );
};
AddCategory.propTypes={
    agregaCategoria: PropTypes.func.isRequired
} 