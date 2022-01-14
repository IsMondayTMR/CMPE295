import React from "react";
import * as Style from "./StyleExternalAuth";
function ExternalAuth({ children, ...restProps }) {
    return <Style.Container {...restProps}>
        {children}
    </Style.Container>
}

export default ExternalAuth

ExternalAuth.Button = function Button({ children, ...restProps }) {
    return <Style.Button {...restProps}>
        {children}
    </Style.Button>
}