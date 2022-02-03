import React from "react";
import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";
import PropTypes from "prop-types";

const style = {
    width: "400px",
    height: "75vh",
    position: "fixed",
    bottom: "0",
    right: "0",
    border: "1px solid #dbdbdb",
};
function Chat(props) {
    return (
        <div style={style}>
            <button className="fas fa-times"
                style={{
                    color: "black",
                    zIndex: "50",
                    position: "relative",
                    border: "none",
                    backgroundColor: "transparent",
                    fontSize: "20px"
                }}
                onClick={() => { props.setChat(true); }} />
            <ChatEngineWrapper>
                <Socket
                    userName='IsMondayTMR'
                    userSecret='Tmdsb!@213'
                    projectID='62b90b34-fac4-4d2d-9572-ef43ecee2ba1'
                />
                <ChatFeed />
            </ChatEngineWrapper>
        </div>
    );
}

Chat.propTypes = {
    setChat: PropTypes.func.isRequired,
};
export default Chat;