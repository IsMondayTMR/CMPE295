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

ChatContainer.ContentContainer = function ContentContainer({ children, ...restProps }) {
    return <Style.ContentContainer {...restProps}>
        {children}
    </Style.ContentContainer>
}
ChatContainer.Image = function Image({ ...restProps }) {
    return <Style.Image {...restProps} />
}

ChatContainer.ChatListTitle = function ChatListTitle({ children, ...restProps }) {
    return <Style.ChatListTitle {...restProps}>
        {children}
    </Style.ChatListTitle>
}
