import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [warning, setWarning] = useState('')

  const handleNameChange = (newName) => {
    const formattedName
     = newName.trim().toLowerCase()
    setName(formattedName)
  }

  const handleYearChange = (newYear) => {
    const age = new Date().getFullYear() - newYear
    if (age < 18) {
      setWarning('Must be at least 18 yrs old!')
    } else {
      setWarning('')
      setYear(newYear)
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={
          (e) => handleNameChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter birth year"
        value={year}
        onChange={
          (e) => handleYearChange(e.target.value)}
      />
      {
        warning && (
          <p style={{ color: 'red' }}>{warning}</p>
        )
      }
      <p>Name: {name}</p>
      <p>Year: {year}</p>
    </div>
  )
}

export default App
