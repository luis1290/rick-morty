import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Location from "./components/Location";
import ResidentInfo from "./components/ResidentInfo";





function App() {
  // endpoint de rick and morty https://rickandmortyapi.com/api/location/{valor aleatorio 1 al 126}

  const [location, setLocation] = useState({});
  const [idLocation, setIdLocation] = useState('')

  useEffect(() => {
    let randowId = Math.floor(Math.random() * 127);

    axios
      .get(`https://rickandmortyapi.com/api/location/${randowId}`)
      .then((resp) => {
        setLocation(resp.data);
      })
      .catch((error) => console.error(error));
  }, []);

  //buscar por id
  const searchId = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then((resp) => {
        setLocation(resp.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header className="header">
        <img className="imgHeader" src="/public/logo.svg" alt="" />
      </header>

      <div className="searchLocation">
        <input
          type="text"
          placeholder="Escriba el Id a Buscar"
          name="searchLocation"
          id="searchLocation"
          value={idLocation}
          onChange={(e) => setIdLocation(e.target.value)}
        />
        <button onClick={searchId} className="btnSearchId">
          Buscar
        </button>
      </div>
      <Location infoLocation={location} />
      <ResidentInfo urls={location.residents} />
    </div>
  );
}

export default App;
