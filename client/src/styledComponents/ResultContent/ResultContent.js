import React from "react";
import * as Style from "./StyledContent";
function ResultContent({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default ResultContent;

ResultContent.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>{children}</Style.Container>
}

ResultContent.Link = function Link({ to, children, ...restProps }) {
    return <Style.RouteLink to={to} {...restProps}>
        {children}
    </Style.RouteLink>
}


ResultContent.Card = function Card({ to, children, ...restProps }) {
    return <Style.Card {...restProps}>
        <Style.RouteLink to={to}>
            {children}
        </Style.RouteLink>
    </Style.Card>

}

ResultContent.ListCard = function ListCard({ to, children, ...restProps }) {
    return <Style.Card {...restProps}>
        {children}
    </Style.Card>
}


ResultContent.Img = function Img({ children, ...restProps }) {
    return <Style.Img {...restProps}>{children}</Style.Img>
}

ResultContent.Title = function Title({ children, ...restProps }) {
    return <Style.Title {...restProps}>{children}</Style.Title>
}

ResultContent.Description = function Description({ children, ...restProps }) {
    return <Style.Description {...restProps}>{children}</Style.Description>
}
ResultContent.Donate = function Donate({ children, ...restProps }) {
    return <Style.Donate {...restProps}>{children}</Style.Donate>
}

ResultContent.InforContainer = function InforContainer({ children, ...restProps }) {
    return <Style.InforContainer {...restProps}>{children}</Style.InforContainer>
}

ResultContent.ButtonContainer = function ButtonContainer({ children, ...restProps }) {
    return <Style.ButtonContainer {...restProps}>{children}</Style.ButtonContainer>
}

ResultContent.Button = function Button({ children, ...restProps }) {
    return <Style.Button {...restProps}>{children}</Style.Button>
}
ResultContent.InvitStarter = function ({ children, ...restProps }) {
    return <Style.InvitStarter {...restProps}>
        {children}
    </Style.InvitStarter>
}

ResultContent.Username = function ({ children, ...restProps }) {
    return <Style.Username {...restProps}>
        {children}
    </Style.Username>
}

ResultContent.OfferDialog = function ({ children, ...restProps }) {
    return <Style.OfferDialog {...restProps}>
        {children}
    </Style.OfferDialog>
}
ResultContent.NoResultText = function NoResultText({ children, ...restProps }) {
    return <Style.NoResultText {...restProps}>{children}</Style.NoResultText>
}