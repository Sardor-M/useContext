
import'./App.css';
import {useState} from "react";


const App=() =>{

  const [firstName, setFirstName] = useState(" ");
  const [firstName, setFirstName] = useState(" ");
  const sayHi = () => {
    alert (`Hi there ${firstName} ${lastName}`);
  }
  const handleFirstNameChange=(event) => {
    const value = event.target.value;
    setFirstName(value);

  };
  return (
    <div className="App">
      <header className="App-header">
        <div className= "form-container">
          <div className="form-row">
            <input
            value = {firstName}
            onChange={ handleFirstNameChange}
            />
          </div>
          <div className="form-row">
            <input 
            onChange={ handleLastNameChange}
            value = {lastname}/>
          </div>
          <div className="form-row"></div>
          <button> 
            Hi there {firstName} {lastName}
          </button>
          <div className="form-row"></div>
        </div>
      </header>
    </div>
  );
};

export default App;
