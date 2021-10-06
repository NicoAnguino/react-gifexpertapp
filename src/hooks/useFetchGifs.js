import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";
//import { useEffect } from "react/cjs/react.development";




export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data:[],
        loading: true
    });


    useEffect(() => {

        getGifs(categoria)
        .then(imagenes => {

     
                setState({
                    data: imagenes,
                loading: false
                })
     

            
        } );//SOLO EJECUTA CUANDO ES RENDERIZADO POR PRIMERA VEZ

    }, [categoria])



    return state;//{data:[], loading: true};
}