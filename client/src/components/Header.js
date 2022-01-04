import React from 'react'
import { HeaderComp } from '../styledComponents/export'

class Header extends React.Component {

    render() {
        return (
            <HeaderComp>
                <HeaderComp.Content>
                    <HeaderComp.WebsiteIcon to = '/'>Mock Website</HeaderComp.WebsiteIcon>
    
    
                        <HeaderComp.RightPanel>
                            <HeaderComp.LinkText to = ''>About</HeaderComp.LinkText>
                            <HeaderComp.LinkText to = ''>Support</HeaderComp.LinkText>
                            <HeaderComp.LinkText to = ''>Login</HeaderComp.LinkText>
                            
                            <HeaderComp.Button>Contact</HeaderComp.Button>
                        </HeaderComp.RightPanel>
    
                </HeaderComp.Content>
            </HeaderComp>
        )
    }
   
}

export default Header