import './App.css'

function App() {

  const books = [
    { id: 1, title: "React Basics", published: true, publisher: "Manning" },
    { id: 2, title: "Advanced Hooks", published: false, publisher: "OReilly" },
    { id: 3, title: "JSX in Depth", published: true, publisher: "Packt" },
  ];
  const publisheds = books.filter(book => book.published);

  return (
    <>
      {publisheds.length > 0 && <h2>Published Books</h2>}
      {publisheds.length ? publisheds.map(book => (
        <article key={book.id}>
          <strong>{book.title}</strong>
          <em> - {book.publisher}</em>
        </article>
      )) : <p>No published books found.</p>}
    </>
  )
}

export default App
