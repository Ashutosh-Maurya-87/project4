import './App.css';
import { React,useState } from 'react';

function App() {
  
  

  
  const [inc,setInc]=useState(0);
  const incFunc =() =>{
    setInc(inc + 1);
    
      console.log('this is a inreament function')
  }
  //---decrement function------------
  const decFun = () =>{
    if(inc<=0){
      alert('Sorry !   You have reached zero 0')
    }else{
    setInc(inc-1);
  }
    console.log('decrement function call')
  }
  return (
    
    <>
    <div className="main_div">
    <div className="center_div">
    <h1> {inc}</h1>
    <div className="btn_div">
    <button onClick={incFunc}>Increament</button>
    <button onClick={decFun}>Decrement</button>
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
