// import logo from './logo.svg';
import './App.css';
import CounterClass from './Components/CounterClass';
import CounterFunction from './Components/CounterFunction';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', 
    alignItems: 'center', minHeight: '100vh', backgroundColor: 'palegreen' }}>
      <h1 style={{backgroundColor: 'lightsalmon', width: '600px', 
      border: '4px solid black', borderRadius: '15px', padding: '13px'}}>Assignment-2 Counter Application</h1>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <CounterClass/>
        <CounterFunction/>
      </div>    
    </div>
  );
}

export default App;
