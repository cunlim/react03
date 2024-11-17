import './App.css'

function getUserContent( userStatus ) {
  return (
    userStatus === "admin" ? (
      <>
        <h2>Admin Dashboard</h2>
        <button>Manage Users</button>
      </>
    ) : userStatus === "member" ? (
      <p>Welcome to the community!</p>
    ) : (
      <a href="/signup">Sign up here</a>
    )
  );
}

function App() {
  return (
    <>
      {getUserContent("admin")}
    </>
  )
}

export default App
