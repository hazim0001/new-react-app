import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: 50 }}
        />
      </header>
      <body>
        <div>
          <h1 style={{ backgroundColor: "gray" }}>this is a header area</h1>
        </div>
        <div>
          <h1 style={{ backgroundColor: "blue" }}>footer</h1>
        </div>
      </body>
    </div>
  );
}

export default App;
