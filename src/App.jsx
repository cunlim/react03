import './App.css'
import { useState } from 'react'

function Form() {
  const [formData, setFormData] = useState({
    username: '',
    isSubscribed: false,
    role: 'user'
  })
  const roles = ['user', 'admin', 'guest']

  const handleChange = (e) => {
    const { name, value, type, checked }
     = e.target
    setFormData({
      ...formData,
      [name]:  type === 'checkbox' ? checked : value
    })
  }

  return (
    <form>
      <p>
        Name: {formData.username}
        {formData.isSubscribed && ' (Subscribed)'}
      </p>
      <p>Role: {formData.role}</p>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="isSubscribed"
          checked={formData.isSubscribed}
          onChange={handleChange}
        />
        Subscribe
      </label>

      <select 
        name="role" value={formData.role}
        onChange={handleChange}>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </form>
  )
}

export default Form