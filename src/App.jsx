import './App.css'

const isLoggedIn = true;

function App() {
  return (
    <>
      {isLoggedIn ? <h1>Hello</h1> : <h1>Sign in</h1>}
      {isLoggedIn ? (
        <>
          <h2>Welcome back!</h2>
          <p>You are Logged in. Enjoy your time here!</p>
        </>
      ) : (
        <>
          <h2>Hello, Guest!</h2>
          <p>Please Log in to access more features.</p>
        </>
      )}
    </>
  )
}

export default App
