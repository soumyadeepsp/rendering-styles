import { useState, useCallback } from 'react';
import Header from './Header';
import Count from './Count';
import Button from './Button';

function App() {

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = useCallback(() => {
    setCounter1(counter1 + 1);
  }, [counter1]);

  const incrementCounter2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  return (
    <div className="App">
      <Header />
      <Count text="Counter 1" count={counter1} />
      <Button onClick={incrementCounter1} text="Increment Counter 1" />
      <Count text="Counter 2" count={counter2} />
      <Button onClick={incrementCounter2} text="Increment Counter 2" />
    </div>
  );
}

export default App;
