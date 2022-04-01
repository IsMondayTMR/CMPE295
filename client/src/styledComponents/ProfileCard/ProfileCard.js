import React from "react";
import * as Style from "./Style";
function ProfileCard({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default ProfileCard;

ProfileCard.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>{children}</Style.Container>
}

ProfileCard.Link = function Link({ to, children, ...restProps }) {
    return <Style.RouteLink to={to} {...restProps}>
        {children}
    </Style.RouteLink>
}


ProfileCard.Card = function Card({ to, children, ...restProps }) {
    return <Style.Card {...restProps}>
        <Style.RouteLink to={to}>
            {children}
        </Style.RouteLink>
    </Style.Card>

}

ProfileCard.ListCard = function ListCard({ to, children, ...restProps }) {
    return <Style.Card {...restProps}>
        {children}
    </Style.Card>
}


ProfileCard.Img = function Img({ children, ...restProps }) {
    return <Style.Img {...restProps}>{children}</Style.Img>
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

ProfileCard.ButtonContainer = function ButtonContainer({ children, ...restProps }) {
    return <Style.ButtonContainer {...restProps}>{children}</Style.ButtonContainer>
}

ProfileCard.Button = function Button({ children, ...restProps }) {
    return <Style.Button {...restProps}>{children}</Style.Button>
}
ProfileCard.InvitStarter = function ({ children, ...restProps }) {
    return <Style.InvitStarter {...restProps}>
        {children}
    </Style.InvitStarter>
}

ProfileCard.Username = function ({ children, ...restProps }) {
    return <Style.Username {...restProps}>
        {children}
    </Style.Username>
}

ProfileCard.OfferDialog = function ({ children, ...restProps }) {
    return <Style.OfferDialog {...restProps}>
        {children}
    </Style.OfferDialog>
}
ProfileCard.NoResultText = function NoResultText({ children, ...restProps }) {
    return <Style.NoResultText {...restProps}>{children}</Style.NoResultText>
}