import './App.css'

const hasMessage = true;
const message = null;
// const message = "";
// const message = "Hello!";

function App() {
  return (
    <>
      {hasMessage && <h2>You have new messages!</h2>}
      {message && <p>Message: {message}</p>}

      <p>Message: {message ?? <em>No message</em>}</p>
      <p>Message: {message || <em>Empty</em>}</p>
    </>
  )
}

export default App
