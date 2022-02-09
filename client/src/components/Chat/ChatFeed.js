import React from "react";


const ChatFeed = (props) => {


    const { chats } = props;
    const renderChats = () => {
        // console.log(chats);
        return chats.map((chat) => {
            <div>
                {chat.id}
            </div>
        })
    }
    return (
        <div>
            {renderChats()}
        </div>
    );
};

export default ChatFeed;