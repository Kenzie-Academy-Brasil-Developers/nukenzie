import './App.css';
import { useState } from 'react';
import Form from './components/Form'
import List from './components/List'
import NuKenzie from './img/NuKenzie.svg'

function App() {
  const [listTransactions, setTransactions] = useState([]);
  const [dataCard, setDataCards] = useState([]);
  
  function deleteCard(id) {
    const newList = listTransactions.filter((element) => element.id !== id)
    setTransactions([...newList]);
    setDataCards([...newList]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={ NuKenzie } />
        <button className="inicio">Inicio</button>
      </header>

      <div className="App-content">
        <Form currentList={listTransactions} 
        newSet={setTransactions} 
        funcaoData={setDataCards}/>

        <List lista={listTransactions} 
        deleteCard={deleteCard} 
        funcao={setTransactions}
        data={dataCard}
        />
      </div>
    </div>
  );
}

export default App;