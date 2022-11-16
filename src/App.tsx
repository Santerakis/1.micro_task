import React, {MouseEvent} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Components/Button";

function App() {

    const Button1Foo = (sub: string, age: number, address: string) => {
        console.log(sub, age, address)
    }
    const Button2Foo = (sub: string, age: number) => {
        console.log(sub, age)
    }
    const Button3Foo = () => {
        console.log('Im stupid button')
    }

    return (
        <div className="App">
            <Button name={'YouTubeChanel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'live in Latvia')}/>
            <Button name={'YouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan', 30)}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
        </div>
    )
}

export default App;
