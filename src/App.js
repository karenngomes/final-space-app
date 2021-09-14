import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await fetch(
        "https://finalspaceapi.com/api/v0/character"
      );
      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <p>Personagens de Final Space</p>
      {data.length ? (
        <div className="container">
          {data.map((character) => {
            return (
              <div>
                <img src={character.img_url} />
                <p>Nome: {character.name}</p>
                <p>Espécie: {character.species}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Sem dados</p>
      )}
    </div>
  );
}

export default App;
