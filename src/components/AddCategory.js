import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setearCategorias} ) => {

    const [valorInput, setValorInput] = useState('');

    const valorInputCambia = (e) => {      
        setValorInput(e.target.value);
    }

    const valorEnviado = (e) => {
        e.preventDefault();
        
    if(valorInput.trim().length > 2){
        setearCategorias(categorias => [valorInput,...categorias]);
        setValorInput('');
    }

       

        //console.log('Submit hecho');

    }

    return (
        
        <form onSubmit={valorEnviado}>
            <input 
                type="text" 
                value={valorInput}
                onChange={ valorInputCambia }
            />
        </form>
           
        
    )
}


AddCategory.propTypes = {
    setearCategorias: PropTypes.func.isRequired
}