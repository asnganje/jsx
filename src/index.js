import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el);

function App() {
    // let message = 'Bye there!'
    // if(Math.random() > 0.5) {
    //     message = 'Hello there!'
    // }

    const inputType = 'number';
    const minValue = 5;
    return (

        <input type={inputType} min={minValue} />
        // <div>
        //     <h1>{message}</h1>
        // </div>
    )
}

root.render(<App />)