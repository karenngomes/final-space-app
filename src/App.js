import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const getCharacters = async () => {
    try {
      const { data: responseAxios } = await axios.get(
        "https://finalspaceapi.com/api/v0/character"
      );
      setData(responseAxios);
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
              <div key={character.id}>
                <img alt="Character" src={character.img_url} />
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
