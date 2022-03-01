import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Description from "./Description";
import Date from "./Date";
import Humidity from "./Humidity";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="row">
            <div className="col cover">
              <Search />
              <Weather />
            </div>
            <div className="col main-data">
              <Description />
              <Date />
              <div className="container-2">
                <Humidity />
              </div>
              <div class="container-fluid" id="weather-forecast">
                <Forecast />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="signature">
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
