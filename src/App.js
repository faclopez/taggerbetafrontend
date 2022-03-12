import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {ScannerView} from './components/Scanner'
import {OrderUpdate} from './components/Orders'







function App() {

const [scanResult, setScanResult] = useState('No Scan Result')

const changeHandle = e => {
  console.log(e)
  setScanResult(e)
}

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CHD - Tagger V2
          <ScannerView onChange={e => changeHandle(e)}/>
          <OrderUpdate id={scanResult}/>
        </p>
      </header>
    </div>
  );
}

export default App;
