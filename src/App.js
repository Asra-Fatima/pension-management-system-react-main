import './App.css';
import Header from './components/Header';

import PensionerData from './components/PensionerData';
import BankData from './components/BankData';
import PensioneDetails from './components/PensionDetails';



function App() {
  return (
    <div className="App">
     <Header/>
    
     <PensionerData/>
     <BankData/>
     <PensioneDetails/>
  
    
     
    
    </div>
  );
}

export default App;