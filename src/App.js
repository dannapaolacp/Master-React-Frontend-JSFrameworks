import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

//import components
import TheHeader from "./components/TheHeader.js";
import TheSlider from "./components/TheSlider.js";

function App() {
  return (
    <div className="App">
      <TheHeader />
      <TheSlider />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
