import React from 'react'
import * as Style from './StyledHeader'
import { Link } from 'react-router-dom'
function HeaderComp ({children, ...restProps}) {
    return <Style.BackGround {...restProps}>
        {children}
    </Style.BackGround>
} 
export default HeaderComp

HeaderComp.Content = function Content ({children, ...restProps}) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
} 
HeaderComp.WebsiteIcon = function WebsiteIcon ({ to,children, ...restProps}) {
    return (
        <LinkContainer to = {to}>
                <i className="fab fa-shopify"></i> 
                <Style.WebsiteName {...restProps}>  {children} 
                </Style.WebsiteName>
        </LinkContainer>
    )
}

HeaderComp.RightPanel = function RightPanel ({children, ...restProps}) {
    return <Style.RightPanelContainer {...restProps}>
        {children}
    </Style.RightPanelContainer>
}

HeaderComp.LinkText = function LinkText({to, children, ...restProps}) {
    return <LinkContainer to = {to}>
        <Style.LinkText {...restProps}>
            {children}
        </Style.LinkText>
    </LinkContainer>
}

HeaderComp.Button = function Button ({children, ...restProps}) {
    return <Style.Button {...restProps}>
        {children}
    </Style.Button>
}

HeaderComp.TextButton = function TextButton ({children, ...restProps}) {
    return <Style.TextButton {...restProps}>
        {children}
    </Style.TextButton>
}

function LinkContainer ({ to,children, ...restProps}) {
    return (
        <Link to ={to} style={LinkStyle} {...restProps}>
            {children}
        </Link>
    )  
}

const LinkStyle = {
    textDecoration: 'none', 
    color: '#383838', 
    display: 'flex',
    flexDrection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '45px',
}