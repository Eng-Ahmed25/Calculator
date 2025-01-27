import React, { useState } from 'react'
import "./App.css"
const App = () => {
  
  const  [value , setvalue] = useState("") ;
  const calc = (value) =>
  {
    try
    {
      setvalue(eval(value))
    }
    catch(err)
    {
      setvalue('Invalid Syntax');
    }
  }
  const del = () =>
  {
    try
    {
      setvalue(value.slice(0,-1))
    }
    catch(err)
    {
      setvalue('Invalid Action')
    }
   
  }
  return (
    <div>
      <div  className='parent'>
        <form>
          <div className='display'>
          <input type='text' value={value}>
          </input>
          </div>
          <div className='all'>

          <div className='Buttons'>
            <input type="button" value='AC' onClick={()=> setvalue('')}></input>
            <input type="button" value='DE' onClick={del}></input>
            <input type="button" value='+' onClick={e => setvalue(value + e.target.value)}></input>
          </div>
          <div className='Buttons'>
            <input type="button" value='9' onClick={e => setvalue(value + e.target.value)}></input>
            <input type="button" value='8' onClick={e => setvalue(value + e.target.value)}></input>
            <input type="button" value='7' onClick={e => setvalue(value + e.target.value)}></input>
          </div>
 
          <div className='Buttons'>
            <input type="button" value='4' onClick={e => setvalue(value + e.target.value)}></input>
            <input type="button" value='5' onClick={e => setvalue(value + e.target.value)}></input>
            <input type="button" value='6' onClick={e => setvalue(value + e.target.value)}></input>
          </div>
          <div className='Buttons'>
            <input type="button" value='1' onClick={e => setvalue(value + e.target.value)}></input>
            <input type="button" value='2' onClick={e => setvalue(value + e.target.value)}></input>
            <input type="button" value='3' onClick={e => setvalue(value + e.target.value)}></input>
          </div>
          <div className='Buttons'>
            <input type="button" value='-' onClick={e => setvalue(value + e.target.value)}></input>
            <input type="button" value='*' onClick={e => setvalue(value + e.target.value)}></input>
            <input type="button" value='/' onClick={e => setvalue(value + e.target.value)}></input>
          </div>
          <input type="button" className='equal' value='=' onClick={() => calc(value)}></input>

           </div>

     
        </form>
      </div>
    </div>
  )
}

export default App

 