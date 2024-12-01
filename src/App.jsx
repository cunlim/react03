import './App.css'
import React, { useReducer } from 'react'
import { countReducer, initialState }
 from './reducers/countReducer'

function App() {
  const [state, dispatch]
   = useReducer(countReducer, initialState)

  const handleClick = (type, value, event) => {
    const { clientX: x, clientY: y } = event
    dispatch({
      type, payload: { value }, meta: { x, y }
    })
  }

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={(e) => handleClick('INC', 1, e)}>+1</button>
      <button onClick={(e) => handleClick('DEC', 1, e)}>-1</button>
      <button onClick={(e) => handleClick('INC', 2, e)}>+2</button>
      <button onClick={(e) => handleClick('DEC', 2, e)}>-2</button>
    </>
  )
}

export default App