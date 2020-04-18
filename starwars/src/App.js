import React, { useState, useEffect } from "react";
import "./App.css";
import Character from "./components/Character";
import axios from "axios";
import "./index.css";
import SearchBar from "./components/SearchBar";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }, []);
  return (
    <div className="App">
      <SearchBar />
      <div className="character-div">
        {characters.map((character) => {
          return <Character character={character} />;
        })}
      </div>
    </div>
  );
};

export default App;
