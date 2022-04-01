import React from "react";
import * as Style from "./StyledListing";

function Listing({ children, ...restProps }) {
    return <Style.BackGround {...restProps}>
        {children}
    </Style.BackGround>
}

export default Listing;

Listing.ImagesContainer = function ({ children, ...restProps }) {
    return <Style.ImagesContainer {...restProps}>
        {children}
    </Style.ImagesContainer>
}

Listing.DeleteContainer = function ({ children, ...restProps }) {
    return <Style.DeleteContainer {...restProps}>
        {children}
    </Style.DeleteContainer>
}

Listing.ImageBox = function ({ children, ...restProps }) {
    return <Style.ImageBox {...restProps}>
        {children}
    </Style.ImageBox>
}
Listing.Image = function ({ children, ...restProps }) {
    return <Style.Image {...restProps}>
        {children}
    </Style.Image>
}
