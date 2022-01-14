import React from "react";
import * as Style from "./StyledSearch";

function SearchComp({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default SearchComp

SearchComp.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}

SearchComp.Icon = function Icon({ children, ...restProps }) {
    return <Style.Icon {...restProps}>
        {children}
    </Style.Icon>
}

SearchComp.Input = function Input({ children, ...restProps }) {
    return <Style.Input {...restProps}>
        {children}
    </Style.Input>
}