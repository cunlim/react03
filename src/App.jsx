import './App.css'

const hasMessage = true;
const message = null;
// const message = "";
// const message = "Hello!";

function App() {
  return (
    <>
      {[0, 123, "A", true, false, undefined, null, "Hello"]}
      {[
        <button>A</button>,
        <button>B</button>,
        <button>C</button>
      ]}
    </>
  )
}

export default App
