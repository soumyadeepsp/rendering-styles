import { useState, startTransition } from 'react';

function App() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const performSearch = (query) => {
    // Simulate a search operation with a delay 
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
        const filteredData = data.filter(item => item.includes(query));
        resolve(filteredData);
      }, 4000); // Simulating a delay of 1 second
    });
  }

  const handleChange = async (event) => {
    const newQuery = event.target.value;
    // Start a transition for the state update
    // startTransition(async () => {
      // Simulate a search operation
      console.log(event.target.value);
      const filteredResults = await performSearch(newQuery);
      setResults(filteredResults);
    // });
    setQuery(newQuery);
  }

  return (
    <div className="App">
      <input value={query} onChange={handleChange}/>
      <ul>
        {results && results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
