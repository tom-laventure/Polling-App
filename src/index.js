import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './Store/StoreContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import App from './app';

const home = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(<StoreProvider>{home}</StoreProvider>, document.getElementById('root'));


serviceWorker.unregister();
