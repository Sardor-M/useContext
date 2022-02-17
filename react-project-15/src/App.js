
import { useReducer } from 'react';
import './App.css';
import Person from "./Components/person"

function App() {
  const people =[
    {id:"person-00",
    name: "Joseph", 
    age:31, 
    job: "teacher"},

    {id:"person-01",
    name: "Layla", 
    age:31, 
    job: "doctor"},

    {id:"person-02",
    name: "Leila", 
    age:31, 
    job: "stuff"},

    {id:"person-03",
    name: "Jeo", 
    age:31, 
    job: "tutor"},
  ]
  return (
    <div> 
      <h1> Average age: {people.reduce((prev, curr) => prev + curr.age, 0) / people.length }</h1>
    </div>
  );
}

export default App;
