import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import Input from './components/Input/Input';

function App() {

  const [monsters,setMonsters] = useState([]);
  const [search, setSearch] = useState('');
  console.log('render');
  async function getMonsters(){
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    setMonsters(data);
  }
  useEffect(()=>{

    getMonsters();

  },[setMonsters])

  function inputHandler(e){
    const value = e.target.value.toLowerCase();
    setSearch(value);
  }

  const filterdMonsters = monsters.filter((monster,index)=>{
      return monster.name.toLowerCase().includes(search);
    })

  return (
    <div className="App">

      <h2 className='app-title'>Monsters Rodolex</h2>
      <Input inputHandler={inputHandler}></Input>
      <CardList monsters={filterdMonsters}></CardList>

    </div>
  );
}


export default App;
