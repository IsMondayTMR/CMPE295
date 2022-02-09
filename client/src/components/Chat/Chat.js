import React from "react";
import { ChatEngine } from "react-chat-engine";
// import ChatFeed from "./ChatFeed";
import ChatList from "./ChatList";
import "./chat.css";
const Chat = () => {
    return (
        <div>
            <ChatEngine
                height="90vh"
                userName='IsMondayTMR'
                userSecret='Tmdsb!@213'
                projectID='62b90b34-fac4-4d2d-9572-ef43ecee2ba1'
                renderChatList={(props) => <ChatList {...props} />}
            // renderChatCard={(chat, index) => { }}
            // renderNewChatForm={(creds) => { }}
            // renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
            // renderChatHeader={(chat) => { }}
            // renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => { }}
            // renderIsTyping={(typers) => { }}
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

export default Chat;