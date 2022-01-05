import React from 'react'
import { HeaderComp } from '../styledComponents/export'
import Authorization from './Authorization'

class Header extends React.Component {
    state = {hide: true}

    closeForm = () => {
        this.setState({hide: true})
    }
    render() {
        return (
            <>
            <HeaderComp>
                <HeaderComp.Content>
                    <HeaderComp.WebsiteIcon to = '/'>Mock Website</HeaderComp.WebsiteIcon>
    
    
                        <HeaderComp.RightPanel>
                            <HeaderComp.LinkText to = ''>About</HeaderComp.LinkText>
                            <HeaderComp.LinkText to = ''>Support</HeaderComp.LinkText>
                            <HeaderComp.TextButton 
                                onClick = {() => this.setState({hide: false})}>Login</HeaderComp.TextButton>
                            
                            <HeaderComp.Button>Contact</HeaderComp.Button>
                        </HeaderComp.RightPanel>
    
                </HeaderComp.Content>
                
            </HeaderComp>
            <Authorization hide = {this.state.hide} closeHelper = {this.closeForm}/>
            </>
        )
    }
   
}

export default Header