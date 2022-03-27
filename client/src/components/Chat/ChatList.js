import React from "react";
import PropTypes from "prop-types";
import { ChatListComp } from "../../styledComponents/export";
import { connect } from "react-redux";
const ChatList = (props) => {
    const { chats, creds, setActiveChat } = props;


    const renderImage = (from) => {
        var avatar = JSON.parse(from?.person?.custom_json);
        if (avatar?.avatar) {
            return <ChatListComp.Image src={avatar?.avatar} />;
        }
        return <ChatListComp.ImageName src="" >{from?.person?.username.substring(0, 2).toUpperCase()} </ChatListComp.ImageName>;
    };
    const renderChats = () => {

        if (chats) {
            const keys = Object.keys(chats);

            console.log(chats);
            return keys.map((key) => {
                const last_message = creds?.userName !== chats[key]?.last_message?.sender_username ? "" : chats[key]?.last_message?.text;
                const from = chats[key]?.people?.filter((people) => {
                    //remove later
                    // if (people?.person?.username != props?.user?.user?.Email) {
                    //     return people?.person?.username;
                    // }
                    // if (props?.user?.user?.Email === "bo.an.563641292@gmail.com") {
                    //     return "IsMondayTMR2";
                    // } else {
                    //     return "IsMondayTMR";
                    // }
                    return people;
                });

                if (from === undefined) {
                    return <></>;
                }
                const temp = props?.user?.user[9]?.Value == "bo.an.563641292@gmail.com" ? from[1] : from[0];
                const img = renderImage(temp);
                return < ChatListComp key={key} onClick={() => setActiveChat(key)}>
                    {/* <ChatListComp.Image src={from[0]?.person?.avatar} /> */}
                    {img}
                    <ChatListComp.ContentContainer>
                        {/* <ChatListComp.ChatTitle>{from[0]?.person?.username}</ChatListComp.ChatTitle> */}
                        <ChatListComp.ChatTitle>{props?.user?.user[9]?.Value == "bo.an.563641292@gmail.com" ? "IsMondayTMR2" : "IsMondayTMR"}</ChatListComp.ChatTitle>
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