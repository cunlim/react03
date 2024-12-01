import './App.css'
import { useState } from 'react'
import Profile from './Profile'

function App() {
  const users = ['Alice', 'Bob', 'Clark']
  const [user, setUser] = useState(users[0])
  const [status, setstatus] = useState(true)

  console.log('App Rendered')

  return (
    <>
      <h2>User Profile</h2>
      <button onClick={() => setstatus(!status)}>
        Toggle Status
      </button>
      <button onClick={
        () => setUser(
          users[(users.indexOf(user) + 1) % users.length]
        )}>
        Switch User
      </button>
      <p>
        <b>{user}</b> | {status ? 'Active' : 'Inactive'}
      </p>

      <Profile name={user} />
    </>
  )
}

export default App;