import './App.css'
import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);
  const [isPinned, setPinned] = useState(false);

  const togglePinned = () => {
    setPinned(p => !p);
  }

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <button onClick={togglePinned}>
        {isPinned && "👌"} Pinn This!
      </button>
    </>
  )
}

export default App