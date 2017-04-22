import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import App2 from './App2.jsx';

ReactDOM.render(<App/>, document.getElementById('app'));

// added a component with table row and iterating json object
ReactDOM.render(<App2/>, document.getElementById('app2'));