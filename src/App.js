import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Character from "./components/Character";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = async () => {
    try {
      const { data: responseAxios } = await axios.get(
        "https://finalspaceapi.com/api/v0/character"
      );
      setData(responseAxios);
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
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
          {data.map((element) => {
            return <Character key={element.id} character={element} />;
          })}
        </div>
      ) : (
        <p>{isLoading ? "Carregando..." : "Sem dados"}</p>
      )}
    </div>
  );
}

export default App;
