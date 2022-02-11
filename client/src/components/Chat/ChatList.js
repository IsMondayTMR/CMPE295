import React from "react";
import PropTypes from "prop-types";
import { ChatListComp } from "../../styledComponents/export";
const ChatList = (props) => {
    const { chats, creds, setActiveChat } = props;
    const renderChats = () => {
        if (chats) {
            const keys = Object.keys(chats);
            return keys.map((key) => {
                const last_message = creds?.userName !== chats[key]?.last_message?.sender_username ? "" : chats[key]?.last_message?.text;
                // const sign = 
                const from = chats[key]?.people?.filter((people) => {
                    if (people?.person?.username != chats[key]?.admin?.username) {
                        return people?.person?.username;
                    }
                });

                if (from === undefined) {
                    return <></>;
                }
                return < ChatListComp key={key} onClick={() => setActiveChat(key)}>
                    <ChatListComp.Image src={from[0]?.person?.avatar} />
                    <ChatListComp.ContentContainer>
                        <ChatListComp.ChatTitle>{from[0]?.person?.username}</ChatListComp.ChatTitle>
                        <ChatListComp.ChatNewMessageSign />
                        <ChatListComp.ChatNewMessage dangerouslySetInnerHTML={{ __html: last_message }} />
                    </ChatListComp.ContentContainer>

                </ ChatListComp>;
            });
        }
        return <></>;
    };

    return (
        <>
            <ChatListComp.ChatListTitle>
                My Chat List
            </ChatListComp.ChatListTitle>
            {renderChats()}

        </>

    );
};


ChatList.propTypes = {
    chats: PropTypes.object,
    creds: PropTypes.object,
    setActiveChat: PropTypes.func,
};
export default ChatList;