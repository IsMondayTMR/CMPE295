import React from "react";
import * as Style from "./StyledItemDetail";

function ItemDetail({ children, ...restProps }) {
    return <Style.BackGround {...restProps}>
        {children}
    </Style.BackGround>
}

export default ItemDetail;

ItemDetail.Container = function Container({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}
ItemDetail.ContentContainer = function ContentContainer({ children, ...restProps }) {
    return <Style.ContentContainer {...restProps}>
        {children}
    </Style.ContentContainer>
}
ItemDetail.ImageContainer = function ImageContainer({ children, ...restProps }) {
    return <Style.ImageContainer {...restProps}>
        {children}
    </Style.ImageContainer>
}

ItemDetail.PrimaryImage = function PrimaryImage({ children, ...restProps }) {
    return <Style.PrimaryImage {...restProps}>
        {children}
    </Style.PrimaryImage>
}


ItemDetail.ImageList = function ImageList({ children, ...restProps }) {
    return <Style.ImageList {...restProps}>
        {children}
    </Style.ImageList>
}


ItemDetail.SecondaryImage = function SecondaryImage({ children, ...restProps }) {
    return <Style.SecondaryImage {...restProps}>
        {children}
    </Style.SecondaryImage>
}

ItemDetail.InforContainer = function InforContainer({ children, ...restProps }) {
    return <Style.InforContainer {...restProps}>
        {children}
    </Style.InforContainer>
}
ItemDetail.UserInfoContainer = function UserInfoContainer({ children, ...restProps }) {
    return <Style.UserInfoContainer {...restProps}>
        {children}
    </Style.UserInfoContainer>
}

ItemDetail.IconContainer = function IconContainer({ children, ...restProps }) {
    return <Style.IconContainer {...restProps}>
        {children}
    </Style.IconContainer>
}
ItemDetail.Username = function Username({ children, ...restProps }) {
    return <Style.Username {...restProps}>
        {children}
    </Style.Username>
}
ItemDetail.IconBox = function IconBox({ children, ...restProps }) {
    return <Style.IconBox {...restProps}>
        {children}
    </Style.IconBox>
}
ItemDetail.Icon = function Icon({ children, ...restProps }) {
    return <Style.Icon {...restProps}>
        {children}
    </Style.Icon>
}

ItemDetail.DetailContainer = function DetailContainer({ children, ...restProps }) {
    return <Style.DetailContainer {...restProps}>
        {children}
    </Style.DetailContainer>
}
ItemDetail.Title = function Title({ children, ...restProps }) {
    return <Style.Title {...restProps}>
        {children}
    </Style.Title>
}

ItemDetail.Text = function Text({ children, ...restProps }) {
    return <Style.Text {...restProps}>
        {children}
    </Style.Text>
}
ItemDetail.BackIconContainer = function BackIconContainer({ children, ...restProps }) {
    return <Style.BackIconContainer {...restProps} > {children}</Style.BackIconContainer>
}
ItemDetail.BackIcon = function BackIcon({ ...restProps }) {
    return <Style.BackIcon className="fas fa-chevron-left" {...restProps} />
}

ItemDetail.BackText = function BackText({ children, ...restProps }) {
    return <Style.BackText {...restProps} > {children}</Style.BackText>
}

ItemDetail.Break = function Break({ ...restProps }) {
    return <Style.Break {...restProps} />

}