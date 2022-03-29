import React from "react";
import * as Style from "./Style";
function UserProfile({ children, ...restProps }) {
    return <Style.BackGround {...restProps}>
        {children}
    </Style.BackGround>
}

export default UserProfile;

UserProfile.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}
UserProfile.ContentContainer = function ContentContainer({ children, ...restProps }) {
    return <Style.ContentContainer {...restProps}>
        {children}
    </Style.ContentContainer>
}
UserProfile.ImageContainer = function ImageContainer({ children, ...restProps }) {
    return <Style.ImageContainer {...restProps}>
        {children}
    </Style.ImageContainer>
}

UserProfile.PrimaryImage = function PrimaryImage({ children, ...restProps }) {
    return <Style.PrimaryImage {...restProps}>
        {children}
    </Style.PrimaryImage>
}




UserProfile.InforContainer = function InforContainer({ children, ...restProps }) {
    return <Style.InforContainer {...restProps}>
        {children}
    </Style.InforContainer>
}
UserProfile.UserInfoContainer = function UserInfoContainer({ children, ...restProps }) {
    return <Style.UserInfoContainer {...restProps}>
        {children}
    </Style.UserInfoContainer>
}
UserProfile.Username = function Username({ children, ...restProps }) {
    return <Style.Username {...restProps}>
        {children}
    </Style.Username>
}
UserProfile.IconBox = function IconBox({ children, ...restProps }) {
    return <Style.IconBox {...restProps}>
        {children}
    </Style.IconBox>
}
UserProfile.Icon = function Icon({ children, ...restProps }) {
    return <Style.Icon {...restProps}>
        {children}
    </Style.Icon>
}

UserProfile.Title = function Title({ children, ...restProps }) {
    return <Style.Title {...restProps}>
        {children}
    </Style.Title>
}

UserProfile.Text = function Text({ children, ...restProps }) {
    return <Style.Text {...restProps}>
        {children}
    </Style.Text>
}
UserProfile.IconContainer = function IconContainer({ children, ...restProps }) {
    return <Style.IconContainer {...restProps} > {children}</Style.IconContainer>
}
UserProfile.BackIcon = function BackIcon({ ...restProps }) {
    return <Style.BackIcon className="fas fa-chevron-left" {...restProps} />
}

UserProfile.BackText = function BackText({ children, ...restProps }) {
    return <Style.BackText {...restProps} > {children}</Style.BackText>
}

UserProfile.Break = function Break({ ...restProps }) {
    return <Style.Break {...restProps} />

}


UserProfile.ItemListContainer = function ItemListContainer({ children, ...restProps }) {
    return <Style.ItemListContainer {...restProps} > {children}</Style.ItemListContainer>
}

UserProfile.ItemImage = function ItemImage({ ...restProps }) {
    return <Style.ItemImage {...restProps} />

}

UserProfile.ImageLink = function ImageLink({ children, ...restProps }) {
    return <Style.ImageLink {...restProps} >
        {children}
    </Style.ImageLink>

}

UserProfile.DetailContainer = function DetailContainer({ children, ...restProps }) {
    return <Style.DetailContainer {...restProps} > {children}</Style.DetailContainer>
}
