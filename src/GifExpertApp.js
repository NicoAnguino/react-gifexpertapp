import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

const [categorias, setCategorias] = useState(['Categoria precargada']);

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setearCategorias = {setCategorias} />

            <hr />           

            <ol>
                { 
                  categorias.map( categoria => (
                      <GifGrid 
                        key = {categoria} 
                        categoria = {categoria} 
                      />
                      //return <li key={categoria}> {categoria} </li>
                    ))
                }
            </ol>
        </>
    )
}
