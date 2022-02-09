import React from "react";
import PropTypes from "prop-types";
import { ChatListComp } from "../../styledComponents/export";
const ChatList = (props) => {
    const { chats, creds, setActiveChat } = props;
    console.log(props);
    const renderChats = () => {

        if (chats) {
            const keys = Object.keys(chats);


            return keys.map((key) => {

                console.log(chats[key]?.last_message);

                const last_message = creds?.userName !== chats[key]?.last_message?.sender_username ? "" : chats[key]?.last_message?.text;
                // const sign = 
                return < ChatListComp key={key} onClick={() => setActiveChat(key)}>
                    <ChatListComp.ChatTitle>{chats[key]?.title}</ChatListComp.ChatTitle>
                    <ChatListComp.ChatNewMessageSign />
                    <ChatListComp.ChatNewMessage dangerouslySetInnerHTML={{ __html: last_message }} />
                </ ChatListComp>;
            });
        }
        return <></>;
    };

    // const renderNotification = () => {

    // }
    return (
        <div>
            {renderChats()}
        </div>
    );
};


ChatList.propTypes = {
    chats: PropTypes.object,
    creds: PropTypes.object,
    setActiveChat: PropTypes.func,
};
export default ChatList;