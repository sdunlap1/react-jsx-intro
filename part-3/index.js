// index.js (Part 3)

// Person Component
function Person({ name, age, hobbies }) {
  const displayName = name.length > 8 ? name.slice(0, 6) : name;

  return (
    <div>
      <p>Learn some information about this person:</p>
      <p>Name: {displayName}</p>
      <p>Age: {age}</p>
      {age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

// App Component
function App() {
  return (
    <div>
      <Person name="Alexander" age={19} hobbies={["Reading", "Coding", "Gaming"]} />
      <Person name="John" age={17} hobbies={["Basketball", "Movies", "Music"]} />
      <Person name="Christine" age={23} hobbies={["Traveling", "Photography", "Running"]} />
    </div>
  );
}

// Rendering the App component
ReactDOM.render(<App />, document.getElementById("root"));
