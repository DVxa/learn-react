import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './configStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();