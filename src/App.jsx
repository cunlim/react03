import './App.css'

import InfoCard from './InfoCard'

const cardData1 = {
  title: "Props in React",
  content: "Props pass data from one component to another.",
  author: "Alice"
};
const cardData2 = {
  title: "React Composition",
  content: "Composition makes your components more reusable"
};

function App() {

  return (
    <>
      <InfoCard {...cardData1} />
      <InfoCard {...cardData2} />
    </>
  )
}

export default App
