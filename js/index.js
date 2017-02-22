require('babel-polyfill');
import React from 'react';
import ReactDOM  from 'react-dom';
import Board from './components/board';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Board title="Board 1" lists={'list 1'} />, document.getElementById('cards'))
);