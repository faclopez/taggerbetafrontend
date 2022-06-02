// import logo from './logo.svg';
import './App.css';
import {ScannerView} from './components/Scanner'
import {useOrderUpdate} from './components/Orders'








function App() {



//const [scanResult, setScanResult] = useState('No Scan Result')
//console.log('from outside', scanResult)

const {tag, render} = useOrderUpdate()

/*const changeHandle = e => {
  setScanResult(e) 
}*/



  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          CHD - Tagger V2
        </p>
         {render}
        
        <ScannerView tag={tag}/>
        <span></span>
        <br></br>
          
        
      </header>
    </div>
  );
}

export default App;
