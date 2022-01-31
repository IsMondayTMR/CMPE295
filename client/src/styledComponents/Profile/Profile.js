import React from "react";
import * as Style from "./StyledProfile";

function Profile({ children, ...restProps }) {
    return <Style.BackGround {...restProps}>
        {children}
    </Style.BackGround>
}

export default Profile

Profile.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}

Profile.NavContainer = function NavContainer({ children, ...restProps }) {
    return <Style.NavContainer {...restProps}>
        {children}
    </Style.NavContainer>
}

Profile.ContentContainer = function ContentContainer({ children, ...restProps }) {
    return <Style.ContentContainer {...restProps}>
        {children}
    </Style.ContentContainer>
}

Profile.RouteLink = function RouteLink({ children, ...restProps }) {
    return <Style.RouteLink {...restProps}>
        {children}
    </Style.RouteLink>
}

Profile.Button = function Button({ children, ...restProps }) {
    return <Style.Button {...restProps}>
        {children}
    </Style.Button>
}
