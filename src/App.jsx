import './App.css'
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);

  console.log(count);
  console.log(useState(0));

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  )
}

export default App