import React from 'react'
import * as Style from './Style'

function SearchComp ({children, ...restProps}) {
    return <Style.Background {...restProps}>
        {children}
    </Style.Background>
}

export default SearchComp