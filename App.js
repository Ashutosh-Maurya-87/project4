import logo from './logo.svg';
import './App.css';

function App() {
  const incFunc =() =>{
      console.log('this is a inreament function')
  }
  return (
    
    <>
    <h1> 0</h1>
    <button onClick={incFunc}>increament</button>
    </>
  );
}

export default App;
