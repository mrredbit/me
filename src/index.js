import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// To prevent browser restore previous scroll position
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));


