
import './App.css';
import {useState} from "react";

function App() {
  const [toDos, setToDos] = useState(['walk the dog']);
  const [newToDo, setNewToDo] = useState("");
  const handleChange =(event) => {
   const value = event.target.value;
   setNewToDo(value);
  };
  const handleClick = () =>{
    setToDos([...toDos,newToDo]);    // ... is a spread operator
    setNewToDo(" ");

  };

  return (
    <div>
      <h1> Hello</h1>
      <input 
      value = {newToDo}
      onChange ={handleChange}
      />
      <button onClick={handleClick}> Create new to do item</button>
      {toDos.map((toDo) => {
        return (
          <div key ={toDo}>  
            <h1>{toDo} <span onClick={() => {
              const newList = toDos.filter(x => x !== toDo);
              setToDos(newList);
            }}> X</span></h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
