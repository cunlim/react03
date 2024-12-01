import './App.css'

function App() {

  return (
    <>
      <input
        onFocus={() => console.log('Focus')}
        onBlur={() => console.log('Blur')}
        onChange={(e) => console.log(e.target.value)}
        onKeyDown={(e) => {
          console.log(e.key, 'DOWN')
          if (e.key === 'Enter' && e.shiftKey) {
            console.log('Shift + Enter DOWN');
          }
        }}
        onKeyUp={(e) => {console.log(e.key, 'UP')}}
      />
    </>
  )
}

export default App