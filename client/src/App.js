import React from 'react'
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

class App extends React.Component {


    render() {

        return (
            <div className='App'>
                <Header/>
                <Search/>
                <Footer/>
            </div>
        )
    }
}

export default App