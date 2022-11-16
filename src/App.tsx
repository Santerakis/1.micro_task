import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";

function App() {

    // let a = 1
    let [a, setA] = useState(0)

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onClickHandler2=()=>{
        setA(a=0)
    }

    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>++number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    )
}

export default App;
