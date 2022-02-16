import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./component/Card-list/card-list.component";
import SearchBar from "./component/searchBar/searchbar-component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);
  const filteredMonster = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="App">
      <h1> Monsters Roodex</h1>
      <SearchBar
        placeholder="Serach monster"
        handleChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
