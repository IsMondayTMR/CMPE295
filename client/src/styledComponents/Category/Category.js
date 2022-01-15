import React from "react";
import * as Styled from "./StyledCategory";

function Category({ children, ...restProps }) {
    return <Styled.Backgournd {...restProps}>
        {children}
    </Styled.Backgournd>
}

export default Category;

Category.Container = function Container({ children, ...restProps }) {
    return <Styled.Container {...restProps}>
        {children}
    </Styled.Container>
}

Category.Header = function Header({ children, ...restProps }) {
    return <Styled.Header {...restProps}>
        {children}
    </Styled.Header>
}

Category.HeaderUnderLine = function HeaderUnderLine({ children, ...restProps }) {
    return <Styled.HeaderUnderLine {...restProps}>
        {children}
    </Styled.HeaderUnderLine>
}

Category.CardContainer = function CardContainer({ children, ...restProps }) {
    return <Styled.CardContainer {...restProps}>
        {children}
    </Styled.CardContainer>
}