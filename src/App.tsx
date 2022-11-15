import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {

    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Vasja!')
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im John!')
    // }
    const onClickHadnler = (name: string) => {
        console.log(name)
    }
    const foo1=()=>{
        console.log(100200)
    }
    const foo2=(num: number)=>{
        console.log(num)
    }

    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log('Hello first')}}>myFirstButton</button>*/}
            <button onClick={()=>onClickHadnler('Vasja')}>MyYoutubeChanel-1</button>
            <button onClick={()=>onClickHadnler('John')}>MyYoutubeChanel-2</button>
            {/*<button onClick={()=>onClickHadnler("some info")}>MyYoutubeChanel-3</button>*/}
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
        </div>
    )
}

export default App;
