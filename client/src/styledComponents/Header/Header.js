import React from "react";
import * as Style from "./StyledHeader";

function HeaderComp({ children, ...restProps }) {
    return <Style.BackGround {...restProps}>
        {children}
    </Style.BackGround>
}
export default HeaderComp

HeaderComp.Content = function Content({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}
HeaderComp.WebsiteIcon = function WebsiteIcon({ to, children, ...restProps }) {
    return (
        <Style.RouteLink to={to}>
            <i className="fab fa-shopify"></i>
            <Style.WebsiteName {...restProps}>  {children}
            </Style.WebsiteName>
        </Style.RouteLink>
    )
}

HeaderComp.RightPanel = function RightPanel({ children, ...restProps }) {
    return <Style.RightPanelContainer {...restProps}>
        {children}
    </Style.RightPanelContainer>
}

HeaderComp.LinkText = function LinkText({ to, children, ...restProps }) {
    return <Style.RouteLink to={to} {...restProps}>
        <Style.LinkText {...restProps}>
            {children}
        </Style.LinkText>
    </Style.RouteLink>
}

HeaderComp.Button = function Button({ children, ...restProps }) {
    return <Style.Button {...restProps}>
        {children}
    </Style.Button>
}

HeaderComp.TextButton = function TextButton({ children, ...restProps }) {
    return <Style.TextButton {...restProps}>
        {children}
    </Style.TextButton>
}