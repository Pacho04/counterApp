import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import './index.css';
import CounterApp from './CounterApp';


const divRoot = document.querySelector('#root');
//le mandamos un dato al componente
ReactDOM.render( /*<PrimeraApp saludo = "Hola, soy tu padre"/> */ <CounterApp value = {0} />, divRoot);
