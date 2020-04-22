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
  const [loading, setLoanding] = useState(false);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log("error!", error);
      });
  }, []);

  useEffect(() => {
    setFiltered(
      characters.filter((char) => {
        return char.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, characters]);

  return (
    <div className="App">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="character-div">
        {filtered.map((character) => {
          return <Character character={character} />;
        })}
      </div>
    </div>
  );
};

export default App;
