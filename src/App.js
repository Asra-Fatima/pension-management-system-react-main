import './App.css';
import Header from './components/Header';


import BankData from './components/BankData';
import PensioneDetails from './components/PensionDetails';
import PensionerData from './components/PensionerData';



function App() {
  return (
    <div className="App">
     <Header/>

     <BankData/>
     <PensioneDetails/>
     <PensionerData/>
    
    </div>
  );
}

export default App;