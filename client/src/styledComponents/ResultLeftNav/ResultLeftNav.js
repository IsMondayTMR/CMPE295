import React from "react";
import Result from "../Result/Result";
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
        <Style.RouteLink {...restProps}>
            {children}
        </Style.RouteLink>
    </Style.RouteContainer>
}

ResultLeftNav.SubLinkContainer = function subLinkContainer({ children, ...restProps }) {
    return <Style.SubLinkContainer {...restProps}>
        {children}
    </Style.SubLinkContainer>
}
ResultLeftNav.SubLink = function SubLink({ to, children, ...restProps }) {
    return <Style.RouteContainer>
        <Style.RouteLink {...restProps}>
            {children}
        </Style.RouteLink>
    </Style.RouteContainer>

}

