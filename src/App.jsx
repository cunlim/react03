import './App.css'
import { useState } from 'react'

function Form() {
  const [username, setUsername] = useState('')
  const [isSubscribed, setSubscribed] = useState(false)
  const [role, setRole] = useState('user')
  const roles = ['user', 'admin', 'guest']

  return (
    <form>
	    <p>
        Name: {username}
        {isSubscribed && ' (Subscribed)'}
      </p>
      <p>Role: {role}</p>
      <input
        type="text" placeholder="Username"
        value={username}
        onChange={
          (e) => setUsername(e.target.value)
        }/>
      <input
        type="checkbox"
        checked={isSubscribed}
        onChange={
          (e) => setSubscribed(e.target.checked)
          }/>
      <label>Subscribe</label>

      <select value={role} onChange={
        (e) => setRole(e.target.value)}>
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