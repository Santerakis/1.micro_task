import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const myManButton = () => {
        console.log('Hello first')
    }

    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Vasja!')
    // }
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im John!')
    // }
    // const onClickHadnler = (name: string) => {
    //     console.log(name)
    // }

    return (
        <div className="App">
                {/*<button onClick={(event)=>{console.log('Hello first')}}>myFirstButton</button>*/}
                <button onClick={(event)=>{console.log('Hello Man')}}>myManButton</button>
                {/*<button onClick={(event)=>onClickHadnler("Vasja")}>MyYoutubeChanel-1</button>*/}
                {/*<button onClick={(event)=>onClickHadnler("John")}>MyYoutubeChanel-2</button>*/}
                {/*<button onClick={()=>onClickHadnler("some info")}>MyYoutubeChanel-3</button>*/}

        </div>
    )
}

export default App;
