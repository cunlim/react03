import './App.css'

import InfoCard from './InfoCard'

function App() {

  return (
    <>
      <InfoCard 
        title="Props in React"
        content="Props pass data from one component to another."
        author="Alice"
      />
      <InfoCard 
        title="React Composition"
        content="Composition makes your components more reusable"
      />
    </>
  )
}

export default App