import React from "react";
import PropTypes from "prop-types";
import { ChatListComp } from "../../styledComponents/export";
import { connect } from "react-redux";
const ChatList = (props) => {
    const { chats, creds, setActiveChat } = props;
    // console.log(props);

    const renderImage = (from) => {
        if (from?.person?.avatar) {
            return <ChatListComp.Image src={from[0]?.person?.avatar} />;
        }
        return <ChatListComp.ImageName src="" >{from?.person?.username.substring(0, 2).toUpperCase()} </ChatListComp.ImageName>;
    };
    const renderChats = () => {

        if (chats) {
            const keys = Object.keys(chats);
            return keys.map((key) => {
                const last_message = creds?.userName !== chats[key]?.last_message?.sender_username ? "" : chats[key]?.last_message?.text;
                const from = chats[key]?.people?.filter((people) => {
                    if (people?.person?.username != chats[key]?.admin?.username && people?.person?.username != props?.auth?.user?.Email) {
                        return people?.person?.username;
                    }
                });

                if (from === undefined) {
                    return <></>;
                }
                const img = renderImage(from[0]);
                return < ChatListComp key={key} onClick={() => setActiveChat(key)}>
                    {/* <ChatListComp.Image src={from[0]?.person?.avatar} /> */}
                    {img}
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

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

ChatList.propTypes = {
    chats: PropTypes.object,
    creds: PropTypes.object,
    setActiveChat: PropTypes.func,
    auth: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(ChatList);