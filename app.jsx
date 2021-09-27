import React from 'react'
import ReactDOM from 'react-dom';

let Greet = () => <h1>Beomjun, world!</h1>

ReactDOM.render(
    <React.StrictMode>
      <Greet />
    </React.StrictMode>,
    document.getElementById('root')
);
