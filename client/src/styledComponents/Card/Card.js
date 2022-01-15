import React, { Children } from "react";
import * as Styled from "./StyledCard";

function Card({ to, children, ...restProps }) {
    return <Styled.Container {...restProps}><Styled.RouteLink to={to}>{children}</Styled.RouteLink></Styled.Container>

}

export default Card;

