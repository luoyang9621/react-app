import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseRouter from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BaseRouter />, document.getElementById('root'));
registerServiceWorker();
