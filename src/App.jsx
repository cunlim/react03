import './App.css'

const hasMessage = true;
const message = "Hello, World!";

function App() {
  return (
    <>
      {hasMessage && message}
    </>
  )
}

export default App
