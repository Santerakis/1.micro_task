import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const myFirstSubscriber = () => {
        console.log('Hello Im Vasja!')
    }
    const mySecondSubscriber = () => {
        console.log('Hello Im John!')
    }

    return (
        <div>
            <div className="App">
                <button onClick={myFirstSubscriber}>MyYoutubeChanel-1</button>
            </div>

            <div className="App">
                <button onClick={mySecondSubscriber}>MyYoutubeChanel-2</button>
            </div>
        </div>
    )
}

export default App;
