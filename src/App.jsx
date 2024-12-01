import './App.css'

function App() {

  function handleClick() {
    console.log('Event 1')
  }

  return (
    <>
      <button onClick={handleClick}>
        Button 1
      </button>
      <button onClick={() => {console.log('Event 2')}}>
        Button 2
      </button>
    </>
  )
}

export default App