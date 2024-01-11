import './App.css';
import Card from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import { useState, useEffect } from 'react'

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilterminsters] = useState(monsters)

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users)
    )
  }, [])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilterminsters(newfilteredMonsters)
   }, [monsters, searchField])
  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox 
      className='search-box' 
      onChangeHandler={onSearchChange} 
      placeholder="type your monster"
      />
      <Card monsters={filteredMonsters} /> 
    </div>
  );
}

export default App;

