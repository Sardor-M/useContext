import "./styles.css";
import {useState} from "react";

const ColorButton =() => {
  const [count, setCount] = useState(0);
    const handleClick =() => {
        setCount(count +5);
          
    };
    const resetCount =() => {
        setCount(0);

    };
    return (
        <div onClick = {handleClick} className="color-button">
           <span onClick = {resetCount}> 
               {count}
           </span>
        </div>
    );
};


export default ColorButton;