import './App.css';
import Inputs from './componentes/Inputs';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [input3, setInput3] = useState(0);
  const [input4, setInput4] = useState(0);

  const [posicion, setPosicion] = useState(0);

  const cambios = [
    {
      moneda: 'Euro',
      cambio: 1
    },
    {
      moneda: 'Peso Cubano',
      cambio: 195
    },
    {
      moneda: 'Peso Argentino',
      cambio: 118.6
    },
    {
      moneda: 'Peso Colombiano',
      cambio: 4543.5
    },
    {
      moneda: 'Peso Mexicano',
      cambio: 23.2
    },
    {
      moneda: 'Dolar',
      cambio: 1.14
    }
  ];

  const calcularCambio = (e) => {

    if(e.target.value){
      let result1 = cambios[1].cambio * e.target.value;
      let result2 = cambios[2].cambio * e.target.value;
      let result3 = cambios[3].cambio * e.target.value;
      let result4 = cambios[4].cambio * e.target.value;
      let result5 = cambios[5].cambio * e.target.value;
      setInput(result1);
      setInput1(result2);
      setInput2(result3);
      setInput3(result4);
      setInput4(result5);
      setPosicion(posicion + 1);
      console.log('posicion: ', posicion);
      console.log('input: ', input);
      console.log('input1: ', input1);
      console.log('input2: ', input2);
    } 
    
  }
  
  
  return (
    <>
      <div className='caja-principal'>
        <label htmlFor='u0'>{cambios[0].moneda}</label>
        <input id='u0' type='number' value={posicion} min={0} onChange={calcularCambio}/>
      </div>
      <Inputs cambios={cambios} posicion={1} input={input}/>
      <Inputs cambios={cambios} posicion={2} input={input1}/>
      <Inputs cambios={cambios} posicion={3} input={input2}/>
      <Inputs cambios={cambios} posicion={4} input={input3}/>
      <Inputs cambios={cambios} posicion={5} input={input4}/>  
    </>
  )
}

export default App;
