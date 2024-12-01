import './App.css'
import React, { useReducer } from 'react'
import { userReducer, initialState } from './reducers/userReducer'

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState)

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={state.name}
        onChange={(e) => dispatch({ 
          type: 'SET_NAME',  payload: e.target.value })}
      />
      <input
        type="number"
        placeholder="Enter birth year"
        value={state.year}
        onChange={(e) => dispatch({ 
          type: 'SET_YEAR', payload: e.target.value })}
      />
      {state.warning
       && <p style={{ color: 'red' }}>{state.warning}</p>}
      <p>Name: {state.name}</p>
      <p>Year: {state.year}</p>
    </div>
  )
}

export default App