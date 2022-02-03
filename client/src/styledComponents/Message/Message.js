import React from "react";
import * as Styled from "./StyledMessage";

function Message({ children, ...restProps }) {
    return <Styled.BackGround {...restProps}>
        {children}
    </Styled.BackGround>
}

export default Message;