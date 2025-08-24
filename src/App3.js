import { useState, useMemo } from 'react';

function App() {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [calculatingIsEven, setCalculatingIsEven] = useState(false);

  const incrementCounter1 = () => {
    setCounter1(counter1+1);
  }

  const incrementCounter2 = () => {
    setCounter2(counter2+1);
  };

  const isEven = useMemo(() => {
    // setCalculatingIsEven(true);
    let i=0;
    while (i<2000000000) {
        i++;
    }
    // setCalculatingIsEven(false);
    return counter1 % 2 === 0;
  }, []);

  return (
    <div className="App">
      <div>
        <button data-testid="counter1-button" onClick={incrementCounter1}>{calculatingIsEven ? 'Calculating ... ' : `Count One - ${counter1}`}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button data-testid="counter2-button" onClick={incrementCounter2}>Count Two - {counter2}</button>
      </div>
    </div>
  );
}

export default App;
