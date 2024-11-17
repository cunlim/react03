import './App.css'

function App() {

  const styleA = {
    color: "darkred",
    fontweight: "bold"
  };
  const styleB = {
    color: "navy",
    textDecoration: "underline"
  };
  const isPrimary = true;

  return (
    <>
      <div style={isPrimary ? styleA : styleB}>
        This text has dynamic styling
      </div>
      <span style={{
        fontSize: isPrimary ? "1.5em" : "1em",
        opacity: isPrimary ? 1 : 0.5
      }}>
        So does this text
      </span>
    </>
  )
}

export default App
