import React from 'react'
import './App.css';

import Header from './components/Header';
import Search from './components/Search';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.headerRef = React.createRef();
        this.state = {
            headerHeight: null
        }
    }
    componentDidMount() {
        console.log(this.headerRef.current)
    }


        
    render() {

        return (
            <div className='App'>
                <Header  ref ={this.headerRef}/>
    
                <Search/>
            </div>
        )
    }
}

export default App