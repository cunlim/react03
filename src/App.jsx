import './App.css'

const hasMessage = true;
const message = "Hello, World!";

function App() {
  return (
    <>
      {hasMessage && <h2>You have new messages!</h2>}
      {message && <p>Message: {message}</p>}
    </>
  )
}

export default App
