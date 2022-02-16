import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routers from "./router";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class App extends React.Component {
    state = { hideChat: true };

    setChat = (state) => {
        this.setState({ hideChat: state });
    };
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


const mapStateToProps = (state) => {
    return { auth: state.auth };
};

App.propTypes = {
    auth: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(App);