import React from "react";
import * as Style from "./StyledDropDown"

function DropDown({ children, ...restProps }) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default DropDown;

DropDown.DropDownContent = function DropDownContent({ children, ...restProps }) {
    return <Style.DropDownContent {...restProps}>
        {children}
    </Style.DropDownContent>
}
DropDown.Button = function Button({ children, ...restProps }) {
    return <Style.Button {...restProps}>
        {children}
    </Style.Button>
}
DropDown.LinkItem = function LinkItem({ children, ...restProps }) {
    return <Style.LinkItem {...restProps}>
        {children}
    </Style.LinkItem>
}

DropDown.ItemBtn = function ItemBtn({ children, ...restProps }) {
    return <Style.ItemBtn {...restProps}>
        {children}
    </Style.ItemBtn>
}

DropDown.ItemBtn = function ItemBtn({ children, ...restProps }) {
    return <Style.ItemBtn {...restProps}>
        {children}
    </Style.ItemBtn>
}
DropDown.Avatar = function Avatar({ children, ...restProps }) {
    return <Style.Avatar {...restProps}>
        {children}
    </Style.Avatar>
}
DropDown.List = function List({ children, ...restProps }) {
    return <Style.List {...restProps}>
        {children}
    </Style.List>
}
