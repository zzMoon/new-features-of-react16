import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './DomAttributes_4';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
