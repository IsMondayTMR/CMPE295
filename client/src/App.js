import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routers from "./router";

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Routers />
                <Footer />
            </div>
        );
    }
}

export default App;