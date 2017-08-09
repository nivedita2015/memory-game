import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App url="http://localhost:3001/api/cards" />, document.getElementById('root'));
registerServiceWorker();
