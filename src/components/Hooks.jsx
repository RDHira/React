import React from 'react'
import { useState } from 'react'

const Hooks = () => {
    let [counter,setcounter] = useState(5)

    //*** For AddValues*****
    const addValues =()=>{
      if(counter < 20){
          setcounter(counter+1)
      }
    }
    //*** For RemoveValues*****
    const removeValues =()=>{
        if(counter > 1){
            setcounter(counter-1)
        }
    }
  return (
    <div className='app'>
      <h2>Welcome in Hooks, useState Concept:</h2>
      <br/>
      <h3>Counting Value: {counter}</h3>
      <button onClick={addValues}>Add Value</button>
      <br />
      <button onClick={removeValues}>Remove Value</button>
    </div>
  )
}

export default Hooks
