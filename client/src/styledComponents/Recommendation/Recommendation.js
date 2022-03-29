import React from "react";
import * as Style from "./Style";






function Recommendation({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default Recommendation;


Recommendation.Container = function ({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}
Recommendation.UnderLine = function ({ children, ...restProps }) {
    return <Style.UnderLine {...restProps}>
        {children}
    </Style.UnderLine>
}
Recommendation.Title = function ({ children, ...restProps }) {
    return <Style.Title {...restProps}>
        {children}
    </Style.Title>
}

Recommendation.ImageList = function ({ children, ...restProps }) {
    return <Style.ImageList {...restProps}>
        {children}
    </Style.ImageList>
}

Recommendation.RouteLink = function ({ children, ...restProps }) {
    return <Style.RouteLink {...restProps}>
        {children}
    </Style.RouteLink>
}

Recommendation.Image = function ({ ...restProps }) {
    return <Style.Image {...restProps} />
}
