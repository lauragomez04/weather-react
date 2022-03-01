import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <body>
        <Weather />
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
      </body>
    </div>
  );
}

export default App;
