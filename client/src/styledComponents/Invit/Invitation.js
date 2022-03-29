import React from "react";
import * as Style from "./style";

function Invitation({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default Invitation;

Invitation.Container = function ({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}

Invitation.Card = function ({ children, ...restProps }) {
    return <Style.Card {...restProps}>
        {children}
    </Style.Card>
}

Invitation.StarterContainer = function ({ children, ...restProps }) {
    return <Style.StarterContainer {...restProps}>
        {children}
    </Style.StarterContainer>
}

Invitation.RouteLink = function ({ children, ...restProps }) {
    return <Style.RouteLink {...restProps}>
        {children}
    </Style.RouteLink>
}

Invitation.Starter = function ({ children, ...restProps }) {
    return <Style.Starter {...restProps}>
        {children}
    </Style.Starter>
}
Invitation.UserInfor = function ({ children, ...restProps }) {
    return <Style.UserInfor {...restProps}>
        {children}
    </Style.UserInfor>
}

Invitation.UserId = function ({ children, ...restProps }) {
    return <Style.UserId {...restProps}>
        {children}
    </Style.UserId>
}
Invitation.Username = function ({ children, ...restProps }) {
    return <Style.Username {...restProps}>
        {children}
    </Style.Username>
}
Invitation.DetailContainer = function ({ children, ...restProps }) {
    return <Style.DetailContainer {...restProps}>
        {children}
    </Style.DetailContainer>
}

Invitation.ItemContainer = function ({ children, ...restProps }) {
    return <Style.ItemContainer {...restProps}>
        {children}
    </Style.ItemContainer>
}

Invitation.ItemInfor = function ({ children, ...restProps }) {
    return <Style.ItemInfor {...restProps}>
        {children}
    </Style.ItemInfor>
}

Invitation.ItemTitle = function ({ children, ...restProps }) {
    return <Style.ItemTitle {...restProps}>
        {children}
    </Style.ItemTitle>
}

Invitation.ItemDesc = function ({ children, ...restProps }) {
    return <Style.ItemDesc {...restProps}>
        {children}
    </Style.ItemDesc>
}

Invitation.Image = function ({ children, ...restProps }) {
    return <Style.Image {...restProps}>
        {children}
    </Style.Image>
}
Invitation.Avatar = function ({ children, ...restProps }) {
    return <Style.Avatar {...restProps}>
        {children}
    </Style.Avatar>
}
Invitation.Button = function ({ children, ...restProps }) {
    return <Style.Button {...restProps}>
        {children}
    </Style.Button>
}

Invitation.ButtonContainer = function ({ children, ...restProps }) {
    return <Style.ButtonContainer {...restProps}>
        {children}
    </Style.ButtonContainer>
}