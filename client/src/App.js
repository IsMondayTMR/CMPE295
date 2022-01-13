import React from 'react'
import './App.css';

import Header from './components/Header';
import Routers from './router';

class App extends React.Component {


    render() {

        return (
            <div className='App'>
                <Header />
                <Routers />
            </div>
        )
    }
}

export default App