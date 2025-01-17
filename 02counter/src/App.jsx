import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  // let counter = 0

  const addValue = () => {
        //  console.log('clicked',counter)
        //  counter = counter + 1
        
        if(counter >= 20){
              retrun `not working`;
        }else{
          setCounter(counter +1)
        }
  }

  const removeValue = () => {
    // console.log('clicked',counter)
   //  counter = counter + 1
  
   if(counter > 0){
    setCounter(counter - 1)
   }else{
   }
     return `note working`;
}

  return (
    <>
      <h1>chai aur code</h1>
      <h2>counter value:{counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove value</button>
      <p className="footer">footer:{counter}</p>
    </>
  )
}

export default App
