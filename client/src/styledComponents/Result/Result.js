import React from "react";
import * as Style from "./StyledResult";
function Result({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default Result;


Result.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}