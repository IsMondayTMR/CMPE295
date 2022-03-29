import React from "react";
import PropTypes from "prop-types";
import { ChatListComp } from "../../styledComponents/export";
import { connect } from "react-redux";
const ChatList = (props) => {
    const { chats, creds, setActiveChat } = props;

    const renderImage = (from) => {

        if (from.length > 1) {
            return <ChatListComp.ImageName src="" >{from[0]?.person?.username.substring(0, 2).toUpperCase() + "&" + from[1]?.person?.username.substring(0, 2).toUpperCase()} </ChatListComp.ImageName>;
        }
        var avatar = JSON.parse(from[0]?.person?.custom_json);
        if (avatar?.avatar) {
            return <ChatListComp.Image src={avatar?.avatar} />;
        }
        return <ChatListComp.ImageName src="" >{from[0]?.person?.username.substring(0, 2).toUpperCase()} </ChatListComp.ImageName>;
    };
    const renderChats = () => {

        if (chats) {
            const keys = Object.keys(chats);
            return keys.map((key) => {
                const last_message = creds?.userName !== chats[key]?.last_message?.sender_username ? "" : chats[key]?.last_message?.text;
                const from = chats[key]?.people?.filter((people) => {
                    return people?.person?.username !== props.user.user.preferred_username;
                });
                if (chats[key]?.people.length > 2) {

                    return < ChatListComp key={key} onClick={() => setActiveChat(key)}>
                        {renderImage(from)}
                        <ChatListComp.ContentContainer>
                            <ChatListComp.ChatTitle>{from[0]?.person?.username + "&" + from[1]?.person?.username}</ChatListComp.ChatTitle>
                            <ChatListComp.ChatNewMessageSign />
                            <ChatListComp.ChatNewMessage dangerouslySetInnerHTML={{ __html: last_message }} />
                        </ChatListComp.ContentContainer>
                    </ ChatListComp>;
                } else {
                    return < ChatListComp key={key} onClick={() => setActiveChat(key)}>
                        {renderImage(from)}
                        <ChatListComp.ContentContainer>
                            <ChatListComp.ChatTitle>{from[0]?.person?.username}</ChatListComp.ChatTitle>
                            <ChatListComp.ChatNewMessageSign />
                            <ChatListComp.ChatNewMessage dangerouslySetInnerHTML={{ __html: last_message }} />
                        </ChatListComp.ContentContainer>
                    </ ChatListComp>;
                }
                // if (from === undefined) {
                //     return <></>;
                // }

            });
        }
        return <></>;
    };
    return (<div style={{ heigh: "90vh" }}>
        <ChatListComp.ChatListTitle>
            My Chat List
        </ChatListComp.ChatListTitle>
        {renderChats()}

    </div>

    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

ChatList.propTypes = {
    chats: PropTypes.object,
    creds: PropTypes.object,
    setActiveChat: PropTypes.func,
    user: PropTypes.object.isRequired,
};
export default connect(mapStateToProps)(ChatList);