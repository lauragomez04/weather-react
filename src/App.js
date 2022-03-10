import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <br />
      <div className="signature">
        <a
          className="open-source"
          href="https://github.com/lauragomez04/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Laura Gómez
      </div>
    </div>
  );
}

export default App;
