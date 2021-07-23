import './App.css';
import { React,useState } from 'react';

function App() {
  const incold=0;
  const decold =0;
  const [dec,setDec]=useState(decold);
  
  const [inc,setInc]=useState(incold);
  const incFunc =() =>{
    setInc(inc + 1);
      console.log('this is a inreament function')
  }
  //---decrement function------------
  const decFun = () =>{
    setDec(dec-1);
    console.log('decrement function call')
  }
  return (
    
    <>
    <div className="main_div">
    <div className="center_div">
    <h1> {inc} {dec}</h1>
    <button onClick={incFunc}>increament</button>
    <button onClick={decFun}>Decrement</button>
    </div>
    </div>
    </>
  );
}

export default App;
