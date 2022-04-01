import React from "react";
import * as Style from "./Style";

function ProfileCard({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default ProfileCard;

ProfileCard.Container = function ({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}

ProfileCard.Card = function ({ children, ...restProps }) {
    return <Style.Card {...restProps}>
        {children}
    </Style.Card>
}

ProfileCard.StarterContainer = function ({ children, ...restProps }) {
    return <Style.StarterContainer {...restProps}>
        {children}
    </Style.StarterContainer>
}

ProfileCard.RouteLink = function ({ children, ...restProps }) {
    return <Style.RouteLink {...restProps}>
        {children}
    </Style.RouteLink>
}

ProfileCard.Starter = function ({ children, ...restProps }) {
    return <Style.Starter {...restProps}>
        {children}
    </Style.Starter>
}
ProfileCard.UserInfor = function ({ children, ...restProps }) {
    return <Style.UserInfor {...restProps}>
        {children}
    </Style.UserInfor>
}

ProfileCard.UserId = function ({ children, ...restProps }) {
    return <Style.UserId {...restProps}>
        {children}
    </Style.UserId>
}

ProfileCard.ItemId = function ({ children, ...restProps }) {
    return <Style.UserId {...restProps}>
        {children}
    </Style.UserId>
}
ProfileCard.Username = function ({ children, ...restProps }) {
    return <Style.Username {...restProps}>
        {children}
    </Style.Username>
}
ProfileCard.DetailContainer = function ({ children, ...restProps }) {
    return <Style.DetailContainer {...restProps}>
        {children}
    </Style.DetailContainer>
}

ProfileCard.ItemContainer = function ({ children, ...restProps }) {
    return <Style.ItemContainer {...restProps}>
        {children}
    </Style.ItemContainer>
}

ProfileCard.ItemInfor = function ({ children, ...restProps }) {
    return <Style.ItemInfor {...restProps}>
        {children}
    </Style.ItemInfor>
}

ProfileCard.ItemTitle = function ({ children, ...restProps }) {
    return <Style.ItemTitle {...restProps}>
        {children}
    </Style.ItemTitle>
}

ProfileCard.ItemDesc = function ({ children, ...restProps }) {
    return <Style.ItemDesc {...restProps}>
        {children}
    </Style.ItemDesc>
}

ProfileCard.Image = function ({ children, ...restProps }) {
    return <Style.Image {...restProps}>
        {children}
    </Style.Image>
}
ProfileCard.Avatar = function ({ children, ...restProps }) {
    return <Style.Avatar {...restProps}>
        {children}
    </Style.Avatar>
}
ProfileCard.Button = function ({ children, ...restProps }) {
    return <Style.Button {...restProps}>
        {children}
    </Style.Button>
}

ProfileCard.ButtonContainer = function ({ children, ...restProps }) {
    return <Style.ButtonContainer {...restProps}>
        {children}
    </Style.ButtonContainer>
}

ProfileCard.NoResultText = function ({ children, ...restProps }) {
    return <Style.NoResultText {...restProps}>
        {children}
    </Style.NoResultText>
}

ProfileCard.Title = function Title({ children, ...restProps }) {
    return <Style.Title {...restProps}>{children}</Style.Title>
}

ProfileCard.Description = function Description({ children, ...restProps }) {
    return <Style.Description {...restProps}>{children}</Style.Description>
}
ProfileCard.Donate = function Donate({ children, ...restProps }) {
    return <Style.Donate {...restProps}>{children}</Style.Donate>
}

ProfileCard.InforContainer = function InforContainer({ children, ...restProps }) {
    return <Style.InforContainer {...restProps}>{children}</Style.InforContainer>
}
