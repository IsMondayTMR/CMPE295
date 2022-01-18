import React from "react";
import Result from "../Result/Result";
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

ResultContent.Img = function Img({ children, ...restProps }) {
    return <Style.Img {...restProps}>{children}</Style.Img>
}

ResultContent.Title = function Title({ children, ...restProps }) {
    return <Style.Title {...restProps}>{children}</Style.Title>
}

ResultContent.Description = function Description({ children, ...restProps }) {
    return <Style.Description {...restProps}>{children}</Style.Description>
}

ResultContent.InforContainer = function InforContainer({ children, ...restProps }) {
    return <Style.InforContainer {...restProps}>{children}</Style.InforContainer>
}

ResultContent.NoResultText = function NoResultText({ children, ...restProps }) {
    return <Style.NoResultText {...restProps}>{children}</Style.NoResultText>
}