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