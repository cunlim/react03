import './App.css'

function App() {

  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  )
}

export default App
