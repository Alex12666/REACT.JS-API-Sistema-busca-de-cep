import React from 'react'
import './Style.css'
import {FiSearch} from 'react-icons/fi'
import Api from './Service/Api'
import { wait } from '@testing-library/user-event/dist/utils'

const App = () => {
  const[input,setInput]=React.useState('');
  const [end,setEnd] = React.useState({});
  
  async function HandleClick(){
    //01001000/json/
    if(input === ''){
      alert('Digite o CEP ');
      setInput('');
      return;
    }
    try 
    {
     const response = await Api.get(`${input}/json`);
    setEnd(response.data);
     setInput('');
    } 
    catch (error) 
    {
      
      alert('Ops Erro A busca Aqui');
      setInput('');
    }
  }


  return (

    <div className='conteiner'>
      <h1 className='title'>Buscador de CEP</h1>

      <div className='input-conteiner'>
        <input type='text'
        placeholder='Digite seu cep...'
        value={input}
        onChange={({target})=>setInput(target.value)}
        />

        <button className='Button' onClick={HandleClick}> 
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>
    
      {Object.keys(end).length > 0 && (
        <main className='main' >
          <h2> CEP:{end.cep} </h2>
          <span>Bairro: {end.bairro} </span>
          <span>Conplemento: {end.complemento}  </span>
          <span> Rua;{end.logradouro} </span>
          <span>UF {end.uf} </span>
        </main >
      )}

      
    </div>
  )
}

export default App
