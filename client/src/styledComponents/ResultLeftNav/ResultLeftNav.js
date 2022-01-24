import React from "react";
import * as Style from "./StyledLeftNav";
function ResultLeftNav({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default ResultLeftNav;

ResultLeftNav.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>{children}</Style.Container>
}

ResultLeftNav.Link = function Link({ to, children, ...restProps }) {
    return <Style.RouteContainer>
        <Style.RouteLink to={to} {...restProps}>
            {children}
        </Style.RouteLink>
    </Style.RouteContainer>



}

