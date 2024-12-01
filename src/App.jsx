import './App.css'
import { useState } from 'react'
import TempInput from './TempInput'
import UnitSelector from './UnitSelector'

const App = () => {
  const [temperature, setTemperature] = useState("")
  const [unit, setUnit] = useState("Celsius")

  const convertedTemp = unit === "Celsius"
    ? (temperature * 9/5 + 32).toFixed(1)
    : ((temperature - 32) * 5/9).toFixed(1)

  return (
    <div>
      <h2>Temperature Converter</h2>
      <p>
        Converted: {temperature ? convertedTemp : "--"} 
        {unit === "Celsius" ? "°F" : "°C"}
      </p>
      <TempInput
        value={temperature}
        unit={unit}
        onChange={setTemperature}
      />
      <UnitSelector
        unit={unit}
        onUnitChange={setUnit}
      />
    </div>
  )
}

export default App