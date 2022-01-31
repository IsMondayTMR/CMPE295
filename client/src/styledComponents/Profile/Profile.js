import React from "react";
import * as Style from "./StyledProfile";

function Profile({ children, ...restProps }) {
    return <Style.BackGround {...restProps}>
        {children}
    </Style.BackGround>
}

export default Profile

Profile.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}

Profile.NavContainer = function NavContainer({ children, ...restProps }) {
    return <Style.NavContainer {...restProps}>
        {children}
    </Style.NavContainer>
}

Profile.ContentContainer = function ContentContainer({ children, ...restProps }) {
    return <Style.ContentContainer {...restProps}>
        {children}
    </Style.ContentContainer>
}

Profile.RouteLink = function RouteLink({ children, ...restProps }) {
    return <Style.RouteLink {...restProps}>
        {children}
    </Style.RouteLink>
}

Profile.Button = function Button({ children, ...restProps }) {
    return <Style.Button {...restProps}>
        {children}
    </Style.Button>
}

Profile.Image = function Image({ children, ...restProps }) {
    return <Style.UserImage {...restProps}>
        {children}
    </Style.UserImage>
}

Profile.ImageContainer = function ImageContainer({ children, ...restProps }) {
    return <Style.ImageContainer {...restProps}>
        {children}
    </Style.ImageContainer>
}

Profile.Input = function Input({ children, ...restProps }) {
    return <Style.Input {...restProps}>
        {children}
    </Style.Input>
}

Profile.InputGroup = function InputGroup({ children, ...restProps }) {
    return <Style.InputGroup {...restProps}>
        {children}
    </Style.InputGroup>
}

Profile.InputContainer = function InputContainer({ children, ...restProps }) {
    return <Style.InputContainer {...restProps}>
        {children}
    </Style.InputContainer>
}
Profile.Label = function Label({ children, ...restProps }) {
    return <Style.Label {...restProps}>
        {children}
    </Style.Label>
}

Profile.UserName = function UserName({ children, ...restProps }) {
    return <Style.UserName {...restProps}>
        {children}
    </Style.UserName>
}

Profile.TextArea = function TextArea({ children, ...restProps }) {
    return <Style.TextArea {...restProps}>
        {children}
    </Style.TextArea>
}

