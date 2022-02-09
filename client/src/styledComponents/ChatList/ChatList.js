import React from "react";
import * as Style from "./StyledChatList";
function ChatContainer({ children, ...restProps }) {
    return <Style.ChatContainer {...restProps}>
        {children}
    </Style.ChatContainer>
}

export default ChatContainer;

ChatContainer.ChatTitle = function ChatTitle({ children, ...restProps }) {
    return <Style.ChatTitle {...restProps}>
        {children}
    </Style.ChatTitle>
}

ChatContainer.ChatNewMessageSign = function ChatNewMessageSign() {
    return <Style.ChatNewMessageSign />
}

ChatContainer.ChatNewMessage = function ChatNewMessage({ children, ...restProps }) {
    return <Style.ChatNewMessage {...restProps}>
        {children}
    </Style.ChatNewMessage>
}
