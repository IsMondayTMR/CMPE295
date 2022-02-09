import React from "react";
// import { ChatEngineWrapper, Socket, ChatList } from "react-chat-engine";
var reactChatEngine = require('react-chat-engine');
// import PropTypes from "prop-types";

// const style = {
//     width: "400px",
//     height: "75vh",
//     position: "fixed",
//     bottom: "0",
//     right: "0",
//     border: "1px solid #dbdbdb",
// };
const ChatLists = function ChatLists(props) {
    var didMountRef = React.useRef(false);

    var _useState = React.useState(false),
        loadChats = _useState[0],
        setLoadChats = _useState[1];

    var _useState2 = React.useState(true),
        hasMoreChats = _useState2[0],
        setHasMoreChats = _useState2[1];

    var _useContext = React.useContext(reactChatEngine.ChatEngineContext),
        conn = _useContext.conn,
        chats = _useContext.chats,
        setChats = _useContext.setChats,
        setActiveChat = _useContext.setActiveChat;

    var chatList = sortChats(chats ? Object.values(chats) : [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
    React.useEffect(function () {
        if (!didMountRef.current) {
            didMountRef.current = true;
            reactChatEngine.getLatestChats(props, interval, function (chats) {
                onGetChats(chats);
                chats.length > 0 && setActiveChat(chats[0].id);
            });
        }
    });
    React.useEffect(function () {
        if (!loadChats || loadChats === 'loading') return;
        setLoadChats('loading');
        var chatList = chats !== null ? sortChats(Object.values(chats)) : [];

        if (chatList.length > 0) {
            var before = chatList[chatList.length - 1].created;
            reactChatEngine.getChatsBefore(props, before, interval, function (chats) {
                return onGetChats(chats);
            });
        }
    }, [loadChats]);

    function sortChats(chats) {
        return chats.sort(function (a, b) {
            var aDate = a.last_message && a.last_message.created ? getDateTime(a.last_message.created, props.offset) : getDateTime(a.created, props.offset);
            var bDate = b.last_message && b.last_message.created ? getDateTime(b.last_message.created, props.offset) : getDateTime(b.created, props.offset);
            return new Date(bDate) - new Date(aDate);
        });
    }

    function onGetChats(chatList) {
        setLoadChats(false);
        var oldChats = chats !== null ? chats : {};

        var newChats = _$1.mapKeys(_extends({}, chatList), 'id');

        var allChats = _extends({}, oldChats, newChats);

        setChats(allChats);
        interval > chatList.length && setHasMoreChats(false);
    }

    function renderChats(chats) {
        return chats.map(function (chat, index) {
            if (!chat) {
                return /*#__PURE__*/React__default.createElement("div", {
                    key: "chat_" + index
                });
            } else if (props.renderChatCard) {
                return /*#__PURE__*/React__default.createElement("div", {
                    key: "chat_" + index
                }, props.renderChatCard(chat, index));
            } else {
                return /*#__PURE__*/React__default.createElement("div", {
                    key: "chat_" + index,
                    onClick: function onClick() {
                        return props.onChatClick && props.onChatClick(chat.id);
                    }
                }, /*#__PURE__*/React__default.createElement(ChatCard$1, {
                    chat: chat
                }));
            }
        });
    }

    return /*#__PURE__*/React__default.createElement("div", {
        style: styles$3.chatListContainer,
        className: "ce-chat-list"
    }, /*#__PURE__*/React__default.createElement("div", {
        style: styles$3.chatsContainer,
        className: "ce-chats-container"
    }, props.renderNewChatForm ? props.renderNewChatForm(conn) : /*#__PURE__*/React__default.createElement(NewChatForm, {
        onClose: props.onClose ? function () {
            return props.onClose();
        } : undefined
    }), renderChats(chatList), hasMoreChats && chatList.length > 0 && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(ChatLoader, {
        onVisible: function onVisible() {
            return !loadChats && setLoadChats(true);
        }
    }), /*#__PURE__*/React__default.createElement("div", {
        style: {
            height: '8px'
        }
    }))));
}

function getDateTime(date, offset) {
    if (!date) return '';
    date = date.replace(' ', 'T');
    offset = offset ? offset : 0;
    var year = date.substr(0, 4);
    var month = date.substr(5, 2);
    var day = date.substr(8, 2);
    var hour = date.substr(11, 2);
    var minute = date.substr(14, 2);
    var second = date.substr(17, 2);
    var d = new Date(year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":" + second);
    d.setHours(d.getHours() + offset);
    return d;
}
// ChatLists.propTypes = {
//     setChat: PropTypes.func.isRequired,
// };
export default ChatLists;