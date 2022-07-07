import { useEffect } from 'react';
import { useState } from 'react';
import { getRates } from './components/fetchCurrentRates';
import './App.css';
import Header from './components/Header';
import Loader from './components/Loader';
import InputsAndSelects from './components/InputsAndSelects';

function App() {
  const [rates, setRates] = useState(null);
  useEffect(() => {
    getRates(setRates)
  }, []);
  return (
    <div className="App">
      {rates ? 
      <div>
        <Header rates={rates}/>
        <InputsAndSelects rates={rates}/>
      </div> : <Loader/>}
    </div>
  );
}

export default App;
