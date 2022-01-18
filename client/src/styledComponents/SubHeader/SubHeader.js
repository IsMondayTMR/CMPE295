import * as Style from "./StyledSubHeader";
import React from "react";
function SubHeader({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
};

export default SubHeader;

SubHeader.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
};
SubHeader.Link = function Link({ to, children, ...restProps }) {
    return <Style.RouteLink to={to}{...restProps}>{children}</Style.RouteLink>
}
