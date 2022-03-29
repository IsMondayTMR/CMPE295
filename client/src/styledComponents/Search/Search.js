import React from "react";
import * as Style from "./StyledSearch";

function SearchComp({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default SearchComp

SearchComp.Form = function Form({ children, ...restProps }) {
    return <Style.Form {...restProps}>
        {children}
    </Style.Form>
}

SearchComp.Button = function Button({ children, ...restProps }) {
    return <Style.Button {...restProps}>
        {children}
    </Style.Button>
}

SearchComp.Input = function Input({ children, ...restProps }) {
    return <Style.Input {...restProps}>
        {children}
    </Style.Input>
}

SearchComp.Select = function Select({ children, ...restProps }) {
    return <Style.Select {...restProps}>
        {children}
    </Style.Select>
}

SearchComp.Option = function Option({ children, ...restProps }) {
    return <Style.Option {...restProps}>
        {children}
    </Style.Option>
}

