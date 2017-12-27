import React, {Component} from 'react';
import './App.css';
import './bootstrap.css';
import AppRouter from './routes/routes';

class App extends Component {
    render() {
        return (
            <AppRouter />
        );
    }
}

export default App;
