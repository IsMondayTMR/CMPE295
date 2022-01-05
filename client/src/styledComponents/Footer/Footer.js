import React from 'react'
import * as Style from './Style';
function Footer({children, ...restProps}){
    return(
        <Style.Container {...restProps}>
            {children}
            </Style.Container>
    )
}

export default Footer

Footer.Link = function FooterLink({href, children,...restProps}){
    return(
        <Style.ExternalLink href = {href} {...restProps}>
            {children}
            </Style.ExternalLink>
    )

}
Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Style.Row {...restProps}>{children}</Style.Row>;
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
    return <Style.Column {...restProps}>{children}</Style.Column>;
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Style.Link {...restProps}>{children}</Style.Link>;
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Style.Title {...restProps}>{children}</Style.Title>;
}

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Style.Text {...restProps}>{children}</Style.Text>;
}

Footer.Break = function FooterBreak({ ...restProps }) {
    return <Style.Break {...restProps} />;
}

Footer.Bottom = function Bottom({ children, ...restProps }) {
    return <Style.Bottom {...restProps} > {children}</Style.Bottom>;
}