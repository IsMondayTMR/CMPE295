import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routers from "./router";
// import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Message from "./components/Message";
// import ChatFeeds from "./components/Chat/ChatFeeds";
// import Chat from "./components/Chat/Chat";

// const style = {
//     position: "fixed",
//     border: "none",
//     bottom: "10%",
//     right: "5%",
//     height: "50px",
//     width: "100px",
//     borderRadius: "20px",
//     fontSize: "20px",
//     backgroundColor: "#17a1ff",
//     color: "white",

// };
class App extends React.Component {
    state = { hideChat: true };

    setChat = (state) => {
        this.setState({ hideChat: state });
    };
    // renderMessage = () => {

    //     // if (this.props.auth.isSignedIn) {
    //     return ReactDOM.createPortal(
    //         this.state.hideChat ? <button style={style} onClick={() => this.setChat(false)}>Chat</button> : <>
    //             <Chat />

    //         </>,
    //         document.querySelector("#message"));
    //     // }

    //     // return null;
    // };

    render() {
        return (
            <div className='App'>
                <Header />
                <Routers />
                {/* {this.renderMessage()} */}
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