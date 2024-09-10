// index.js (Part 1)

// FirstComponent
function FirstComponent() {
  return <h1>My very first component</h1>;
}

// NamedComponent
function NamedComponent({ name }) {
  return <p>My name is {name}</p>;
}

// App Component
function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Stephen" />
    </div>
  );
}

// Rendering the App component
ReactDOM.render(<App />, document.getElementById("root"));
