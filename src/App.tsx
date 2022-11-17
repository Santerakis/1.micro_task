import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {

    // let a = 1
    let [a, setA] = useState(0)

    const onClickHandler = () => {
        setA(88)
        console.log(a)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
        </div>
    )
}

export default App