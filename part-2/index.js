// index.js (Part 2)

// Tweet Component
function Tweet({ username, name, date, message }) {
  return (
    <div className="tweet">
      <h3>{name} (@{username})</h3>
      <p>{message}</p>
      <small>{date}</small>
    </div>
  );
}

// App Component
function App() {
  return (
    <div>
      <Tweet username="user1" name="Alice" date="09/09/2024" message="Just finished a new project!" />
      <Tweet username="user2" name="Bob" date="09/08/2024" message="Had a great lunch today!" />
      <Tweet username="user3" name="Charlie" date="09/07/2024" message="Loving React so far!" />
    </div>
  );
}

// Rendering the App component
ReactDOM.render(<App />, document.getElementById("root"));
