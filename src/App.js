import React, { useState } from 'react';
import Calculator from './components/Calculator';
import "./App.css"

function App() {
  const [result, setResult] = useState('0');

  const handleButtonClick = (buttonName) => {
    if (buttonName === '=') {
      calculate();
    } else if (buttonName === 'C') {
      reset();
    } else {
      setResult(result === '0' ? buttonName : result + buttonName);
    }
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const reset = () => {
    setResult('0');
  };

  return (
    <div className="App">
      <Calculator result={result} onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
