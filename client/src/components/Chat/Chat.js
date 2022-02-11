import React from "react";
import { ChatEngine } from "react-chat-engine";
// import ChatFeed from "./ChatFeed";
import ChatList from "./ChatList";
import { PROJECTID } from "./chatConst";
import "./chat.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const Chat = (props) => {

    console.log(props);
    return (
        <div>
            <ChatEngine
                height="90vh"
                userName={props?.auth?.user?.Email}
                userSecret={props?.auth?.user?.Email}
                projectID={PROJECTID}
                renderChatList={(props) => <ChatList {...props} />}
            // renderChatCard={(chat, index) => { }}
            // renderNewChatForm={(creds) => { }}
            // renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
            // renderChatHeader={() => { return "test"; }}
            // renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => { }}
            // renderIsTyping={() => { }}
            // renderNewMessageForm={(creds, chatId) => { }}
            // renderChatSettings={() => { }}
            // renderChatSettingsTop={() => { }}
            // renderPeopleSettings={(creds, chat) => { }}
            // renderPhotosSettings={(chat) => { }}
            // renderOptionsSettings={(creds, chat) => { }}
            />
        </div>
    );
};


const mapStateToProps = (state) => {
    return { auth: state.auth };
};

Chat.propTypes = {
    auth: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(Chat);