
import { useState } from "react";

const Colorizer = () => {
    const [color, setColor] = useState('#6d0e0e'); //set parameter to anything. Here is string
    //create random color in arrow function and return it
    const getRandomColor = () => { 
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        return random;
    }

    //to update the state (setState), create arrow function 
    const changeColor = () => {
    //take previous arrow function and put in const
    const randomColor = getRandomColor();
    console.log('Color Change with', randomColor); //view results
    //update state variable value passing const parameter
    setColor(randomColor);
    }

    return (
        <div className="colorizer">
            <h1>Fun with Colors!</h1>
            <div className="box" style={{ backgroundColor: color /* the current value is passed here */ }}>{color}</div>
            <button onClick={ changeColor /*the arrow F of setState goes here */ }>Change Color</button> 
        </div>
    );
};

export default Colorizer;