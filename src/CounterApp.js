import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {
    
    const [counter, setCounter] = useState(value);

    const handleSuma = () => {
        setCounter(counter + 1);
    }

    const handleCero = () => {
        setCounter(value);
    }

    const handleResta = () => {
        setCounter(counter - 1);
    }

    return (<>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick ={handleSuma} > Contar</button>
        <button onClick ={handleCero} > Reset</button>
        <button onClick ={handleResta} > Restar</button>
    </>
)};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;