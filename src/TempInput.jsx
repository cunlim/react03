import React from 'react'

const TempInput = (
  { value, unit, onChange }
) => {
  return (
    <div className='temp-input'>
      <input
        type="number"
        value={value}
        onChange={
          e => onChange(e.target.value)
        }
        placeholder={
          `In ${unit}`
        }
      />
      <span> {unit}</span>
    </div>
  )
}

export default TempInput