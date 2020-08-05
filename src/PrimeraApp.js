//Primer componente
import React from 'react';
import PropTypes from 'prop-types'; //Importamos prop-types

//Le ponemos la Props desestructurando 
// con un valor por defecto saludo = "Hola Mundo"
const PrimeraApp = ({saludo, subtitulo}) =>{
    
    //El Fragment para retornar varias etiquetas de JSX
    return(
        //Se puede poner <Fragment> si no solo <> y no hace ninguna importacion
        <>
        {/* Para mostrar la props con {} */}
        <h1>{saludo}</h1> 
        <p>{subtitulo}</p>
        </>
    );
}

//Le indicamos la propiedad del valor y si es obligatoria
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

//Otra manera de colocar un valor por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;