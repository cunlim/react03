import React from 'react'

const UnitSelector = ({ unit, onUnitChange }) => {
  return (
    <div className='unit-selector'>
      <label>
        <input
          type="radio"
          value="Celsius"
          checked={unit === "Celsius"}
          onChange={
            e => onUnitChange(e.target.value)}
        />
        Celsius
      </label>
      <label>
        <input
          type="radio"
          value="Fahrenheit"
          checked={unit === "Fahrenheit"}
          onChange={
            e => onUnitChange(e.target.value)}
        />
        Fahrenheit
      </label>
    </div>
  )
}

export default UnitSelector