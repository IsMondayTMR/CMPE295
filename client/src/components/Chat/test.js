import React from "react";
import { ChatEngineContext } from "react-chat-engine";
function Test() {
    var _useContext = React.useContext(ChatEngineContext);
    // conn = _useContext.conn,
    // chats = _useContext.chats;
    // setChats = _useContext.setChats,
    // messages = _useContext.messages,
    // setMessages = _useContext.setMessages,
    // activeChat = _useContext.activeChat,
    // setActiveChat = _useContext.setActiveChat,
    // loadMoreMessages = _useContext.loadMoreMessages,
    // setLoadMoreMessages = _useContext.setLoadMoreMessages,
    // isBottomVisible = _useContext.isBottomVisible,
    // typingCounter = _useContext.typingCounter;
    // console.console.log(chats);
    console.log(_useContext);
    return (
        <>
        </>
    );
}

export default Test;