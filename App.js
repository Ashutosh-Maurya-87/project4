import './App.css';
import { React,useState } from 'react';

function App() {
  const incold=0;
  const [inc,setInc]=useState(incold);
  const incFunc =() =>{
    setInc(inc + 1);
      console.log('this is a inreament function')
  }
  return (
    
    <>
    <h1> {inc}</h1>
    <button onClick={incFunc}>increament</button>
    
    </>
  );
}

export default App;
