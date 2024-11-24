import './App.css'

import InfoCard from './InfoCard'

const cards = [
  {
    idx: 1,
    title: "Props in React",
    content: "Props pass data from one component to another.",
    author: "Alice"
  }, {
    idx: 2,
    title: "React Composition",
    content: "Composition makes your components more reusable"
  }
]

function App() {

  return (
    <>
      {cards.map(cardData => (
        <InfoCard key={cardData.idx} {...cardData} />
      ))}
    </>
  )
}

export default App