import React, { Children } from "react";
import * as Styled from "./StyledCard";

function Card({ to, children, ...restProps }) {
    return <Styled.RouteLink to={to}>
        <Styled.Container {...restProps}>{children}</Styled.Container>
    </Styled.RouteLink>
}

export default Card;

